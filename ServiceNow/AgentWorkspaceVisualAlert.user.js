// ==UserScript==
// @name         Agent Workspace Visual Alert
// @namespace    https://github.com/dwtaber/Userscripts
// @downloadURL  https://github.com/dwtaber/Userscripts/raw/master/ServiceNow/AgentWorkspaceVisualAlert.user.js
// @updateURL    https://github.com/dwtaber/Userscripts/raw/master/ServiceNow/AgentWorkspaceVisualAlert.user.js
// @supportURL   https://github.com/dwtaber/Userscripts/issues
// @version      0.3
// @description  Recolor list background when not empty
// @author       Dan Taber (dwtaber@gmail.com)
// @match        https://*.service-now.com/now/workspace/agent/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=service-now.com
// @grant        none
// ==/UserScript==

// Configure these to taste.
let alertColor = "#ff006666"
let nonAlertColor = ""
let refreshSeconds = 1;


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
    return window.location.href.match("https://\\w+.service-now.com/now/workspace/agent/list/params/list-id/.*") != null;
}

function setAlert()
{
    if (testLocation() == true)
    {
        let grids = deepQuerySelectorAll("now-grid")

        grids.forEach(grid => {
            let emptyIndicator = grid.shadowRoot.querySelector("sn-record-list-state-empty")

            if (emptyIndicator == null)
            {
                grid.style.backgroundColor = alertColor
            }
            else
            {
                grid.style.backgroundColor = nonAlertColor
                emptyIndicator.style.visibility = 'hidden'
            }
        });
    }
}

setInterval(setAlert, (refreshSeconds * 1000))
