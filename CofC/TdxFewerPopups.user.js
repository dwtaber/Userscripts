// ==UserScript==
// @name         TDX Fewer Popups
// @version      0.0.1
// @downloadURL  https://raw.githubusercontent.com/dwtaber/Userscripts/master/CofC/TdxFewerPopups.user.js
// @updateURL    https://raw.githubusercontent.com/dwtaber/Userscripts/master/CofC/TdxFewerPopups.user.js
// @namespace    https://github.com/dwtaber/Userscripts
// @supportURL   https://github.com/dwtaber/Userscripts
// @description  Converts many of TDX's popup links to standard links.
// @author       Dan Taber
// @match        https://*.teamdynamix.com/TDNext/*
// @match        https://*.teamdynamix.com/SBTDNext/*
// @grant        none
// ==/UserScript==

function openWinToOpen (onclickNode)
{
    let uri = onclickNode.getAttribute('onclick').split("'")[1]
    onclickNode.setAttribute('onclick',`window.open('${uri}','_self')`)
}

// Strip openWinHref function from links, since they seem to have a usable href attribute to fall back to.
document.querySelectorAll('a[onclick*=openWinHref]').forEach( x => x.removeAttribute('onclick') );

// Replace openWin function with window.open for buttons and such.
document.querySelectorAll('[onclick*=openWin]').forEach( x => openWinToOpen(x) );
