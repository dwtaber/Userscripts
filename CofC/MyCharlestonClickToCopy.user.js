// ==UserScript==
// @name         MyCharleston Admin Click to Copy
// @version      2021.12.23.1
// @downloadURL  https://github.com/dwtaber/Userscripts/raw/master/CofC/MyCharlestonClickToCopy.user.js
// @updateURL    https://github.com/dwtaber/Userscripts/raw/master/CofC/MyCharlestonClickToCopy.user.js
// @namespace    https://github.com/dwtaber/Userscripts
// @supportURL   https://github.com/dwtaber/Userscripts
// @description  When viewing a record, left-clicking on a value (e.g. a name, e-mail address, etc) copies it to clipboard.
// @author       Dan Taber
// @include      https://my.cofc.edu/jsp/admin/*
// @include      https://my.cofc.edu/jsp/*
// @include      https://my.cofc.edu/cp/*
// @exclude      https://my.cofc.edu/cp/home/displaylogin
// @grant        none
// ==/UserScript==

const pointerStyle = `
/* Pointer cursor on values in user information page. */
table>tbody>tr>td>span.text12
{
    cursor: pointer;
}

/* Pointer cursor on values in user information page on hover. */
table>tbody>tr>td>span.text12>strong:hover
{
    filter: invert(0.3);
}
`
// Inject css into document head.
const styleTag = document.createElement("style");
styleTag.innerHTML = pointerStyle;
document.head.append(styleTag);

let queryResults = document.querySelectorAll("span.text12");
queryResults.forEach( function(item)
    {
        item.onclick = function() { navigator.clipboard.writeText(this.innerText.trim() ); }
    }
)
