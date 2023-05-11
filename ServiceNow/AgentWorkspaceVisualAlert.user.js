// ==UserScript==
// @name         Agent Workspace Visual Alert
// @namespace    https://github.com/dwtaber/Userscripts
// @downloadURL  https://github.com/dwtaber/Userscripts/raw/master/ServiceNow/AgentWorkspaceVisualAlert.user.js
// @updateURL    https://github.com/dwtaber/Userscripts/raw/master/ServiceNow/AgentWorkspaceVisualAlert.user.js
// @supportURL   https://github.com/dwtaber/Userscripts/issues
// @version      0.2
// @description  Recolor list background when not empty
// @author       Dan Taber (dwtaber@gmail.com)
// @match        https://*.service-now.com/now/workspace/agent/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=service-now.com
// @grant        none
// ==/UserScript==

let alertColor = "#ff006666"
let refreshSeconds = 1;

function testLocation()
{
    return window.location.href.match("https://\\w+.service-now.com/now/workspace/agent/list/params/list-id/.*") != null;
}

function setAlert()
{
    if (testLocation() == true)
    {
        var grid = document.querySelector("sn-workspace-list-module")
                           .shadowRoot.querySelector("now-record-list-connected")
                           .shadowRoot.querySelector("now-record-list")
                           .shadowRoot.querySelector("now-grid")

        var emptyIndicator = grid.shadowRoot.querySelector("sn-record-list-state-empty")
        var gridStyle = grid.style

        if (emptyIndicator == null)
        {
            gridStyle.backgroundColor = alertColor
        }
        else
        {
            gridStyle.backgroundColor = "#ffffff"
            emptyIndicator.style.visibility = 'hidden'
        }
    }
}

setInterval(setAlert, (refreshSeconds * 1000))
