// ==UserScript==
// @name         TDX Fewer Popups
// @version      0.0.5
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


/* Easily configurable bits start here! */

// Valid targets are:
// _self    - The current browsing context (e.g. same frame if within a frameset)
// _blank   - New tab or new window, depending on browser settings
// _parent  - Parent of the current context; same as _self if no parent
// _top     - Topmost ancestor of current context; same as _self if no ancestors
const defaultTarget = '_blank';

// Same valid targets as above.
// Note: after saving an update, if target is not _blank there's no in-page way to navigate back to the ticket detail page.
// When set to _blank, the update page opens in a new tab (or window, depending on browser settings),
// which closes automatically upon saving the update.
const updateTarget = "_blank";

/* End of easily configurable bits! */


const onclickName = 'onclick';
const targetName = 'target';

function removeOpenWinHref (onclickNode, newTarget)
{
    onclickNode.removeAttribute(onclickName);
    onclickNode.setAttribute(targetName, newTarget);
}

function openWinToOpen (onclickNode, newTarget)
{
    let uri = onclickNode.getAttribute(onclickName).split("'")[1];
    onclickNode.setAttribute(onclickName,`window.open('${uri}','${newTarget}')`);
}

// After saving an update, there's no in-page way to navigate back to the ticket detail page.
// This is a workaround until I figure out something cleaner.
document.querySelectorAll('#btnUpdateTicket, #divUpdateFromActions').forEach( x => openWinToOpen(x, updateTarget) )

// Strip openWinHref function from links, since they seem to have a usable href attribute to fall back to.
document.querySelectorAll('a[onclick*=openWinHref]').forEach( x => removeOpenWinHref(x, defaultTarget) );

// Replace openWin function with window.open for buttons and such.
document.querySelectorAll('[onclick*=openWin]').forEach( x => openWinToOpen(x, defaultTarget) );
