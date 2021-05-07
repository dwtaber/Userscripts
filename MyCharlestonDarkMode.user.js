// ==UserScript==
// @name         MyCharleston Admin Dark Mode
// @namespace    https://github.com/dwtaber/userscripts
// @version      0.1
// @description  Dark mode for MyCharleston admin console
// @author       You
// @match        https://github.com/dwtaber/Userscripts/blob/master/MyCharlestonDarkMode.user.js
// @include      https://my.cofc.edu/jsp/admin/*
// @include      https://my.cofc.edu/jsp/*
// @include      https://my.cofc.edu/cp/*
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

.dataheader
{
    background-color: #252526;
}

table.bgwhite
{
    background-color: #252526;
}

input.btn
{
    color: #D4D4D4;
    background: #333 repeat-x center;
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

a:link, .leaf a:link, .location a:link
{
    color: #569CD6;
    text-decoration: none;
}

a:hover, .leaf a:hover, .location a:hover
{
    color: #F14C4C;
    text-decoration: none;
}
`;

const styleTag = document.createElement("style");
styleTag.innerHTML = darkModeStyle;
document.head.append(styleTag);

document.getElementsByClassName("bg1")[0].getElementsByTagName("img")[0].remove()

// document.getElementsByClassName("topnav")[0].firstElementChild.getElementsByTagName("table")[0].remove()
