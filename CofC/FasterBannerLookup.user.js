// ==UserScript==
// @name         Faster Banner Searches
// @version      0.3.0
// @downloadURL  https://github.com/dwtaber/Userscripts/raw/master/CofC/FasterBannerLookup.user.js
// @updateURL    https://github.com/dwtaber/Userscripts/raw/master/CofC/FasterBannerLookup.user.js
// @namespace    https://github.com/dwtaber/Userscripts
// @supportURL   https://github.com/dwtaber/Userscripts
// @description  Suppresses per-keystroke search updates to return results faster.
// @author       Dan Taber
// @match        https://ssb.cofc.edu/BannerExtensibility/customPage/page/Service_desk_lookup
// @grant        none
// ==/UserScript==

// Hoping I can find a way to suppress the initial null query that takes forever at page load.

// Hide the huge banner at the top of the page
document.querySelector("#pbid-Overview-container").style.display = "none";
document.querySelector("#pbid-L1-container").style.display = "none";

// I don't love inlining these functions, but it seems like one of the more straightforward ways
// to get these functions into the page context.
var cwidSubmit = `javascript: void(function () {
var cwidBox = document.querySelector("#pbid-code1Like");
var nameBox = document.querySelector("#pbid-code2Like");
var newCwidBox = document.querySelector("#newCwidBox");
var newNameBox = document.querySelector("#newNameBox");
cwidBox.value = newCwidBox.value;
nameBox.value = null;
newNameBox.value = null;
cwidBox.dispatchEvent(new Event("change"));
nameBox.dispatchEvent(new Event("change"));
}())
`
var nameSubmit = `javascript: void(function () {
var cwidBox = document.querySelector("#pbid-code1Like");
var nameBox = document.querySelector("#pbid-code2Like");
var newCwidBox = document.querySelector("#newCwidBox");
var newNameBox = document.querySelector("#newNameBox");
nameBox.value = newNameBox.value;
cwidBox.value = null;
newCwidBox.value = null;
nameBox.dispatchEvent(new Event("change"));
cwidBox.dispatchEvent(new Event("change"));
}())
`

var cwidBox = document.querySelector("#pbid-code1Like");
var nameBox = document.querySelector("#pbid-code2Like");

var newCwidBox = document.createElement("input");
newCwidBox.setAttribute("id","newCwidBox");
newCwidBox.setAttribute("name","newCwidBox");
newCwidBox.setAttribute("type","text");
newCwidBox.setAttribute("placeholder","CWID");
newCwidBox.setAttribute("tabindex","0");
newCwidBox.setAttribute("maxlength","8");
newCwidBox.classList = cwidBox.classList;

var cwidForm = document.createElement("form");
cwidForm.setAttribute("id","cwidForm");
cwidForm.setAttribute("action",cwidSubmit);
cwidForm.appendChild(newCwidBox);

cwidBox.parentNode.appendChild(cwidForm);
cwidBox.style.display = "none";

var newNameBox = document.createElement("input");
newNameBox.setAttribute("id","newNameBox");
newNameBox.setAttribute("name","newNameBox");
newNameBox.setAttribute("type","text");
newNameBox.setAttribute("placeholder","Surname");
newNameBox.setAttribute("tabindex","0");
newNameBox.classList = nameBox.classList;

var nameForm = document.createElement("form");
nameForm.setAttribute("id","nameForm");
nameForm.setAttribute("action",nameSubmit);
nameForm.appendChild(newNameBox);

nameBox.parentNode.appendChild(nameForm);
nameBox.style.display = "none";
