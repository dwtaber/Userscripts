// ==UserScript==
// @name         MyCharleston Fix Menu Scrollbar
// @version      2021.05.17.1
// @downloadURL  https://github.com/dwtaber/Userscripts/raw/master/CofC/MyCharlestonFixMenuScrollbar.user.js
// @updateURL    https://github.com/dwtaber/Userscripts/raw/master/CofC/MyCharlestonFixMenuScrollbar.user.js
// @namespace    https://github.com/dwtaber/Userscripts
// @supportURL   https://github.com/dwtaber/Userscripts
// @description  The frame containing the left-hand menu bar won't have a horizontal scrollbar unless the content width actually requires it.
// @author       Dan Taber
// @include      https://my.cofc.edu/jsp/admin/menu.jsp*
// @grant        none
// ==/UserScript==


// Remove fixed table width.
document.getElementById("folder_menu").removeAttribute("width");