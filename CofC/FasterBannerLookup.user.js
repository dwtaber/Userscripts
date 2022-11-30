// ==UserScript==
// @name         Faster Banner Searches
// @version      2022.11.29
// @downloadURL  https://github.com/dwtaber/Userscripts/raw/master/CofC/FasterBannerSearches.user.js
// @updateURL    https://github.com/dwtaber/Userscripts/raw/master/CofC/FasterBannerSearches.user.js
// @namespace    https://github.com/dwtaber/Userscripts
// @supportURL   https://github.com/dwtaber/Userscripts
// @description  Suppresses per-keystroke search updates to return results faster.
// @author       Dan Taber
// @include      https://ssb.cofc.edu/BannerExtensibility/customPage/page/Service_desk_lookup
// @grant        none
// ==/UserScript==

let cwidBox = document.querySelector("#pbid-code1Like");
let nameBox = document.querySelector("#pbid-code2Like");

function change(box) {
    box.dispatchEvent(new Event("change"));
}
function cwidSearch(cwid) {
    cwidBox.value = cwid;
    nameBox.value = null;
    change(cwidBox);
    change(nameBox);
}

function nameSearch(name) {
    nameBox.value = name;
    cwidBox.value = null;
    change(nameBox);
    change(cwidBox);
}

let cwidForm = document.createElement("form");
cwidForm.setAttribute("id","cwidForm");

let fakeCwidBox = document.createElement("input");
fakeCwidBox.setAttribute("id","fakeCwidBox");


// I don't think these will be needed, going with the fake-boxes approach.

// function removeInputListener(box) {
//     let inputListener = getEventListeners(box)['input'][0];
//     box.removeEventListener('input', inputListener.listener, inputListener.useCapture);
// }
// 
// function removeBlurListener(box) {
//     let blurListener = getEventListeners(box)['blur'][0];
//     box.removeEventListener('blur', blurListener.listener, blurListener.useCapture);
// }
// 
// removeInputListener(cwidBox);
// removeInputListener(nameBox);