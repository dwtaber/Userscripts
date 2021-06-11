// ==UserScript==
// @name         MyCharleston Admin Dark Mode
// @version      2021.06.10.0
// @downloadURL  https://github.com/dwtaber/Userscripts/raw/master/CofC/MyCharlestonDarkMode.user.js
// @updateURL    https://github.com/dwtaber/Userscripts/raw/master/CofC/MyCharlestonDarkMode.user.js
// @namespace    https://github.com/dwtaber/Userscripts
// @supportURL   https://github.com/dwtaber/Userscripts
// @description  Dark mode for MyCharleston admin console
// @author       Dan Taber
// @include      https://my.cofc.edu/jsp/admin/*
// @include      https://my.cofc.edu/jsp/*
// @include      https://my.cofc.edu/cp/*
// @exclude      https://my.cofc.edu/cp/home/displaylogin
// @grant        none
// ==/UserScript==

// The style sheet to be injected.
const darkModeStyle = `

body
{
    background-color: #1E1E1E;
}

.dataheader, .datatable, td.dataheader, td.dataheader-firstcell, td.dataheader-lastcell,
th.dataheader, th.dataheader-firstcell, th.dataheader-lastcell
{
    background-color: #252526;
}

table.datatable
{
    background-color: #333;
    border-width: 0px;
}

table.bgwhite, td.datarowitem, td.datarowitem-username
{
    background-color: #252526;
}

.bgmenu, td.bg3, td.bg2
{
    background-color: #1E1E1E;
    background-image: none;
}

.bgslight
{
    background-color: #1E1E1E;
}

td.bglight
{
    background-color: #333;
}

.bgtabon
{
    background-color: #ad8800;
}

input.textform, select.textform
{
    color: #D4D4D4;
    background-color: #3C3C3C;
}

input:-webkit-autofill,
input:-webkit-autofill:focus,
input:-webkit-autofill:active,
input:-webkit-autofill:hover
{
    -webkit-box-shadow: 0 0 0px 1000px #3C3C3C inset;
    box-shadow: 0 0 0px 1000px #3C3C3C inset;
    -webkit-text-fill-color: #D4D4D4;
}

td.dataheader, td.dataheader-firstcell, td.dataheader-lastcell
{
    border-color: #333;
    border-width: 0px;
    font-weight: bold;
}

td.bg1
{
    visibility: hidden;
    height: 0;
}

input.btn
{
    color: #D4D4D4;
    background: #333 repeat-x center;
}

body, table, th, td, span, h1, h2, h3, h4, h5, h6, b, strong,
.text12, .datatable, td.dataheader, td.dataheader-firstcell, td.dataheader-lastcell,
th.dataheader, th.dataheader-firstcell, th.dataheader-lastcell
{
    color: #D4D4D4;
}

.node b a
{
    color: #D4D4D4 !important;
}

.node a:link
{
    color: #D4D4D4;
}

a:link,
.leaf a:link,
.location a:link
{
    color: #569CD6;
    text-decoration: none;
}

a:visited,
.leaf a:visited,
.location a:visited
{
    color: #569CD6;
    text-decoration: none;
}

a:hover,
.leaf a:hover,
.location a:hover {
    color: #569CD6;
    text-decoration: underline;
}

.node b a:hover,
span.node a:hover
{
    color: #D4D4D4 !important;
    text-decoration: underline;
}

input.btn:hover
{
    color: #FFF;
    background-color: #505050;
    border-width: 1px;
    border-style: solid;
    border-color: #FFF;
    text-decoration: none;
    cursor: pointer;
}

/* Hovering over search results highlights that row. */
tr:hover > td.datarowitem,
tr:hover > td.datarowitem-username
{
	background-color: #333;
    cursor: pointer;
}

/* Pointer cursor on values in user information page. */
table>tbody>tr>td>span.text12
{
    cursor: pointer;
}

/* Pointer cursor on values in user information page on hover. */
table>tbody>tr>td>span.text12>strong:hover
{
    color: #ffffff;
}

`;

// Inject dark mode style sheet into document head.
const styleTag = document.createElement("style");
styleTag.innerHTML = darkModeStyle;
document.head.append(styleTag);

// Clicking anywhere within a row opens that user record.
const dataRowItems = document.getElementsByClassName("datarowitem-username")
if (dataRowItems != null)
{
    for (let item of dataRowItems) {
        let uri = item.firstChild.firstChild.href;
        item.parentNode.onclick = function(){window.location.href = uri}
    }
}

// Fix menu bar scrollbar.
if (document.URL.includes("https://my.cofc.edu/jsp/admin/menu.jsp"))
{
    document.getElementById("folder_menu").removeAttribute("width");
}

// On User Information page, click a value to copy it to the clipboard.

let queryResults = document.querySelectorAll("span.text12");
// let resultsArray = Array.from(queryResults);
queryResults.forEach( function(item)
    {
        item.onclick = function() { navigator.clipboard.writeText(this.innerText.trim() ); }
    }
)
