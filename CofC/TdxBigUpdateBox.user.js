// ==UserScript==
// @name         Tdx Big Update Box
// @namespace    https://github.com/dwtaber/Userscripts
// @version      0.1.2
// @updateURL    https://raw.githubusercontent.com/dwtaber/Userscripts/master/CofC/TdxBigUpdateBox.user.js
// @downloadURL  https://raw.githubusercontent.com/dwtaber/Userscripts/master/CofC/TdxBigUpdateBox.user.js
// @description  Taller default comment box in ticket update UI
// @author       Dan Taber
// @match        https://*.teamdynamix.com/TDNext/Apps/*/Tickets/Update*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    let boxHeight = "600px";

    document.querySelector("#divComments textarea").style.height = boxHeight;
})();