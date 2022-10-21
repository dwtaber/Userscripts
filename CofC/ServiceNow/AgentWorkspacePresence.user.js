// ==UserScript==
// @name         Agent Workspace Presence
// @namespace    https://github.com/dwtaber
// @version      0.1
// @description  Enable Record Presence detection in Agent Workspace
// @author       Dan Taber
// @match        https://*.service-now.com/now/workspace/agent/record/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=service-now.com
// @grant        none
// ==/UserScript==

/*
    So far, only the first URI opened in Agent Workspace seems to count.
    Navigate to a different record, and it keeps tracking persistence on the first record.
    No workaround yet.
*/

let recordPresenceIntervalSeconds = 20;
let recordPresenceIntervalMillis = recordPresenceIntervalSeconds * 1000;
let appJson = "application/json"

function getApiRoot()
{
    return `${location.origin}/api`;
}

function getUserToken()
{
    return window.g_ck;
}

function outlineBool(boolValue)
{
    let contentArea = document.querySelector("sn-workspace-layout sn-workspace-content")
    if (boolValue)
    {
        contentArea.style.outline = "10px dashed red";
        contentArea.style.outlineOffset = "-10px";
    }

    else
    {
        contentArea.style.outline = "";
        contentArea.style.outlineOffset = "";
    }
}

let headers = {
    'Accept': appJson,
    'Content-Type': appJson,
    "X-UserToken": getUserToken()
}

async function getUsernameById(userID) {
    let uri = `${getApiRoot()}/now/table/sys_user/${userID}`
    let options = {
        method: "GET",
        headers: headers
    }
    let content = await fetch(uri, options)
        .then(response => response.json())
        .then(parsed => parsed.result);
    return content.user_name;
}

async function getPresence() {
    let body = {
        href: location.href,
        path: location.pathname,
        pathname: decodeURIComponent(location.pathname).split("?")[0]
    }
    let uri = `${getApiRoot()}/now/ui/presence?sysparm_auto_request=true&cd=${Date.now()}`;
    let options = {
        method: "POST",
        headers: headers,
        body: JSON.stringify(body)
    }
    let content = await fetch(uri, options)
        .then(response => response.json())
        .then(parsed => parsed.result);
    content.presenceArray.forEach(visitor => (visitor.secondsAgo = (content.serverTimeMillis - visitor.last_on)/1000) )
    content.presenceArray.forEach(async visitor => (visitor.user_name = await getUsernameById(visitor.user)))
    content.presenceArrayOthers = content.presenceArray.filter( u => u.user != window.NOW.user.userID )
    return content
}

async function getPresenceArray()
{
    return (await getPresence()).presenceArray
}

async function getPresenceOthers()
{
    return (await getPresence()).presenceArrayOthers
}

async function showPresence()
{
    let others = await getPresenceOthers();
    outlineBool(others.length >= 1)
    console.log(others)
}

window.onload = showPresence
setInterval(showPresence, recordPresenceIntervalMillis)