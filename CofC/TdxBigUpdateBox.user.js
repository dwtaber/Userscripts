// ==UserScript==
// @name         Tdx Big Update Box
// @namespace    https://github.com/dwtaber/Userscripts
// @version      0.1.1
// @updateURL    https://raw.githubusercontent.com/dwtaber/Userscripts/master/CofC/TdxBigUpdateBox.user.js
// @downloadURL  https://raw.githubusercontent.com/dwtaber/Userscripts/master/CofC/TdxBigUpdateBox.user.js
// @description  Taller default comment box in ticket update UI
// @author       Dan Taber
// @match        https://cofc.teamdynamix.com/TDNext/Apps/362/Tickets/Update*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    document.querySelector("#divComments textarea").style.height = "600px";
})();