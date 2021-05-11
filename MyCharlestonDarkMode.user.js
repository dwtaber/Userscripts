// ==UserScript==
// @name         MyCharleston Admin Dark Mode
// @namespace    https://github.com/dwtaber/userscripts
// @version      0.1.1
// @description  Dark mode for MyCharleston admin console
// @author       Dan Taber
// @match        https://github.com/dwtaber/Userscripts/blob/master/MyCharlestonDarkMode.user.js
// @include      https://my.cofc.edu/jsp/admin/*
// @include      https://my.cofc.edu/jsp/*
// @include      https://my.cofc.edu/cp/*
// @exclude      https://my.cofc.edu/cp/home/displaylogin
// @grant        none
// ==/UserScript==

// Inject dark mode style into document head.
const darkModeStyle = `

body
{
    background-color: #1E1E1E;
}

body, table, th, td, span, h1, h2, h3, h4, h5, h6, a, b, .node a:link, strong,
.text12, .datatable, td.dataheader, td.dataheader-firstcell, td.dataheader-lastcell,
th.dataheader, th.dataheader-firstcell, th.dataheader-lastcell
{
    color: #D4D4D4;
}

span.node a:hover
{
    color: #D4D4D4;
    text-decoration: underline;
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

td.dataheader, td.dataheader-firstcell, td.dataheader-lastcell
{
    border-color: #333;
    border-width: 0px;
    font-weight: bold;
}

input.btn
{
    color: #D4D4D4;
    background: #333 repeat-x center;
}

input.btn:hover {
    color: #FFF;
    background-color: #505050;
    border-width: 1px;
    border-style: solid;
    border-color: #FFF;
    text-decoration: none;
    cursor: pointer;
}

.bgmenu, td.bg3, td.bg2
{
    background-color: #1E1E1E;
    background-image: none;
}

td.bg1
{
    visibility: hidden;
    height: 0;
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
    -webkit-text-fill-color: #D4D4D4;
}

a:link, .leaf a:link, .location a:link, a:visited
{
    color: #569CD6;
    text-decoration: none;
}

.leaf a:hover, .location a:hover
{
    color: #569CD6;
    text-decoration: underline;
}
`;

const styleTag = document.createElement("style");
styleTag.innerHTML = darkModeStyle;
document.head.append(styleTag);

// Removes a layout image.
document.getElementsByClassName("bg1")[0].getElementsByTagName("img")[0].remove()