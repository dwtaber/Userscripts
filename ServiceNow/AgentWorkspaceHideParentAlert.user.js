// ==UserScript==
// @name         Agent Workspace Hide Parent Alert
// @namespace    https://github.com/dwtaber/Userscripts
// @downloadURL  https://github.com/dwtaber/Userscripts/raw/master/ServiceNow/AgentWorkspaceHideParentAlert.user.js
// @updateURL    https://github.com/dwtaber/Userscripts/raw/master/ServiceNow/AgentWorkspaceHideParentAlert.user.js
// @supportURL   https://github.com/dwtaber/Userscripts/issues
// @version      0.3
// @description  Hides the "this is the primary ticket for..." notification on incidents
// @author       Dan Taber (dwtaber@gmail.com)
// @match        https://*.service-now.com/now/workspace/agent/record*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=service-now.com
// @grant        none
// ==/UserScript==

function testLocation()
{
    return window.location.href.match("https://\\w+.service-now.com/now/workspace/agent/record*") != null;
}

function hideAlert(node) {
    let notificationInner = node.shadowRoot.querySelector("sn-form-internal-workspace-form-layout")
                                .shadowRoot.querySelector("sn-form-internal-notifications-wrapper")
                                .shadowRoot.querySelector("sn-form-internal-alert-list")
                                .shadowRoot.querySelector("now-alert")
                                .shadowRoot.querySelector(".now-alert-content.is-expanded div");
    if (notificationInner != null)
    {
        try
        {
            let notificationOuter = notificationInner.parentElement.parentElement.parentElement.parentElement;
            if (notificationInner.innerText.match("This is the primary ticket for")) {
                notificationOuter.style.display = 'none';
            }
        }
        catch {}
    }
}

function hideAlerts() {
    document.querySelector("sn-workspace-content")
            .shadowRoot.querySelectorAll("now-record-form-connected")
            .forEach(hideAlert)
}

function testAndHide() {
    if (testLocation() == true) {hideAlerts()}
}

setInterval(testAndHide, 1000)