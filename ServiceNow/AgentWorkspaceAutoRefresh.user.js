// ==UserScript==
// @name         Agent Workspace Auto-refresh
// @namespace    https://github.com/dwtaber/Userscripts
// @downloadURL  https://github.com/dwtaber/Userscripts/raw/master/ServiceNow/AgentWorkspaceAutoRefresh.user.js
// @updateURL    https://github.com/dwtaber/Userscripts/raw/master/ServiceNow/AgentWorkspaceAutoRefresh.user.js
// @version      0.2
// @description  Auto-refresh Agent Workspace List
// @author       Dan Taber (dwtaber@gmail.com)
// @match        https://*.service-now.com/now/workspace/agent/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=service-now.com
// @grant        none
// ==/UserScript==

let refreshSeconds = 60;

function testLocation()
{
    return window.location.href.match("https://\\w+.service-now.com/now/workspace/agent/list/params/list-id/.*") != null;
}

function refreshList()
{
    if (testLocation() == true)
    {
        document.querySelector("sn-workspace-primary-content")
                .querySelector("sn-workspace-list-module")
                .shadowRoot.querySelector("now-record-list-connected")
                .shadowRoot.querySelector("now-record-list")
                .shadowRoot.querySelector("sn-record-list-header-toolbar")
                .shadowRoot.querySelector("now-button")
                .shadowRoot.querySelector("button")
                .click();
    }
}

setInterval(refreshList, (refreshSeconds * 1000));