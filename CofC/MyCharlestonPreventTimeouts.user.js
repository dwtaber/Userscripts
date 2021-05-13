// ==UserScript==
// @name         MyCharleston Prevent Timeouts
// @version      2021.05.13.0
// @downloadURL  https://github.com/dwtaber/Userscripts/raw/master/CofC/MyCharlestonPreventTimeouts.user.js
// @updateURL    https://github.com/dwtaber/Userscripts/raw/master/CofC/MyCharlestonPreventTimeouts.user.js
// @namespace    https://github.com/dwtaber/userscripts
// @supportURL   https://github.com/dwtaber/userscripts
// @description  Triggers MyCharleston's resetTimeout function every 30 seconds.
// @author       Dan Taber
// @include      https://my.cofc.edu/*
// @exclude      https://my.cofc.edu/cp/*
// @exclude      https://my.cofc.edu/jsp/*
// @exclude      https://my.cofc.edu/jsp/admin/*
// @grant        none
// ==/UserScript==

setInterval(function(){ window.resetTimeout(); }, 30*1000);