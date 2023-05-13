// ==UserScript==
// @name         Agent Workspace Hide Parent Alert
// @namespace    https://github.com/dwtaber/Userscripts
// @downloadURL  https://github.com/dwtaber/Userscripts/raw/master/ServiceNow/AgentWorkspaceHideParentAlert.user.js
// @updateURL    https://github.com/dwtaber/Userscripts/raw/master/ServiceNow/AgentWorkspaceHideParentAlert.user.js
// @supportURL   https://github.com/dwtaber/Userscripts/issues
// @version      0.4
// @description  Hides the "this is the primary ticket for..." notification on incidents
// @author       Dan Taber (dwtaber@gmail.com)
// @match        https://*.service-now.com/now/workspace/agent/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=service-now.com
// @grant        none
// ==/UserScript==

function deepQuerySelectorAll(selector, root) {
    root = root || document;
    const results = Array.from(root.querySelectorAll(selector));
    const pushNestedResults = function (root) {
        deepQuerySelectorAll(selector, root)
            .forEach(elem => {
                if (!results.includes(elem)) {
                    results.push(elem);
                }
            });
    };
    if (root.shadowRoot) {
        pushNestedResults(root.shadowRoot);
    }
    for (const elem of root.querySelectorAll('*')) {
        if (elem.shadowRoot) {
            pushNestedResults(elem.shadowRoot);
        }
    }
    return results;
}

function testLocation()
{
    return window.location.href.match("https://\\w+.service-now.com/now/workspace/agent/record*") != null;
}

function hideAlerts() {
    deepQuerySelectorAll(".now-alert").forEach(x => {
        if (Array.from(x.querySelectorAll("div"))
                 .some(y => y.innerText.match("This is the primary ticket for")))
        { x.style.display = 'none' }
    });
}

function testAndHide() {
    if (testLocation() == true) {hideAlerts()}
}

setInterval(testAndHide, 1000)