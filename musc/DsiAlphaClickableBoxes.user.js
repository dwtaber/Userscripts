// ==UserScript==
// @name         Alpha clickable boxes
// @version      2021.05.19
// @downloadURL  https://github.com/dwtaber/Userscripts/raw/master/musc/DsiAlphaClickableBoxes.user.js
// @updateURL    https://github.com/dwtaber/Userscripts/raw/master/musc/DsiAlphaClickableBoxes.user.js
// @namespace    https://github.com/dwtaber/Userscripts
// @supportURL   https://github.com/dwtaber/Userscripts
// @description  Click anywhere on a resource's box to open the relevant link
// @author       Dan Taber
// @match        https://alpha.library.musc.edu/*
// @icon         https://www.google.com/s2/favicons?domain=musc.edu
// @grant        none
// ==/UserScript==

document.querySelectorAll("div.box-bottom > a").forEach(function(link)
{
    let box = link.parentElement.parentElement;
    box.style.cursor = "pointer";
    box.onmousedown = function(e)
    {
        if (e.button == 1)
        {
            return false;
        }
    };
    box.onmouseup = function(e)
    {
        switch (e.button)
        {
            case 0:
                window.location.href = link.href;
                break;
            case 1:
                window.open(link.href);
                return false;
        }
    }
});
