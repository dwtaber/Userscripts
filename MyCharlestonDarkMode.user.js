// ==UserScript==
// @name         MyCharleston Admin Dark Mode
// @namespace    https://github.com/dwtaber/userscripts
// @version      0.1
// @description  Dark mode for MyCharleston admin console
// @author       You
// @match        https://github.com/dwtaber/Userscripts/blob/master/MyCharlestonDarkMode.user.js
// @include      https://my.cofc.edu/jsp/admin/*
// @grant        none
// ==/UserScript==

// Inject dark mode style into document head.
const darkModeStyle = `
body
{
    background-color: #1E1E1E;
}

body, table, th, td, span, h1, h2, h3, h4, h5, h6, a, b, .node a:link
{
    color: #D4D4D4;
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

.bgmenu
{
    background-color: #1E1E1E;
    background-image: none;
}

.bslight
{
    background-color: #252526;
}

a:link, .leaf a:link
{
    color: #2472C8;
    text-decoration: none;
}

input.textform
{
    background-color: #3C3C3C;
}

a:hover, .leaf a:link
{
    color: #F14C4C;
}
`;

const styleTag = document.createElement("style");
styleTag.innerHTML = darkModeStyle;
document.head.append(styleTag);