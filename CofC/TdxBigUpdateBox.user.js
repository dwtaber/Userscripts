// ==UserScript==
// @name         Tdx Big Update Box
// @namespace    https://github.com/dwtaber/Userscripts
// @version      0.2.0
// @updateURL    https://raw.githubusercontent.com/dwtaber/Userscripts/master/CofC/TdxBigUpdateBox.user.js
// @downloadURL  https://raw.githubusercontent.com/dwtaber/Userscripts/master/CofC/TdxBigUpdateBox.user.js
// @description  Taller default comment box in ticket update UI
// @author       Dan Taber
// @match        https://*.teamdynamix.com/TDNext/Apps/*/Tickets/Update*
// @grant        none
// ==/UserScript==


/* Easily configurable bits start here! */

// Set this value to the desired height.  Don't forget units!
let boxHeight = "600px";

// When set to true, the update window will resize to be as tall as the screen size permits.
let resizeWindow = true;

/* End of easily configurable bits! */


if (resizeWindow && window.menubar.visible)
{
    window.resizeTo(window.outerWidth, window.screen.availHeight);
}

document.querySelector("#divComments textarea").style.height = boxHeight;
