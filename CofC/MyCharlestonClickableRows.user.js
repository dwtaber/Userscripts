// ==UserScript==
// @name         MyCharleston Admin Clickable Rows
// @version      2021.12.23.1
// @downloadURL  https://github.com/dwtaber/Userscripts/raw/master/CofC/MyCharlestonClickableRows.user.js
// @updateURL    https://github.com/dwtaber/Userscripts/raw/master/CofC/MyCharlestonClickableRows.user.js
// @namespace    https://github.com/dwtaber/Userscripts
// @supportURL   https://github.com/dwtaber/Userscripts
// @description  In search results, clicking anywhere on a row opens that record.
// @author       Dan Taber
// @include      https://my.cofc.edu/jsp/admin/*
// @include      https://my.cofc.edu/jsp/*
// @include      https://my.cofc.edu/cp/*
// @exclude      https://my.cofc.edu/cp/home/displaylogin
// @grant        none
// ==/UserScript==

const rowHoverStyle = `
/* Hovering over search results highlights that row. */
tr:hover > td.datarowitem,
tr:hover > td.datarowitem-username
{
	background-color: #7f7f7f7f;
    cursor: pointer;
}
`
// Inject css into document head.
const styleTag = document.createElement("style");
styleTag.innerHTML = rowHoverStyle;
document.head.append(styleTag);

const dataRowItems = document.getElementsByClassName("datarowitem-username")
if (dataRowItems != null)
{
    for (let item of dataRowItems) {
        let uri = item.firstChild.firstChild.href;
        item.parentNode.onclick = function(){window.location.href = uri}
    }
}