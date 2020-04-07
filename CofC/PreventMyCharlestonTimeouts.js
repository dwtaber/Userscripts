// ==UserScript==
// @name         Prevent MyCharleston Timeouts
// @namespace    https://github.com/dwtaber/userscripts
// @version      0.2
// @updateURL    https://github.com/dwtaber/userscripts/cofc/preventmycharlestontimeouts.js
// @downloadURL  https://github.com/dwtaber/userscripts/cofc/preventmycharlestontimeouts.js
// @description  Triggers MyCharleston's resetTimeout function every 30 seconds.
// @author       dwtaber@cofc.edu
// @include      https://my.cofc.edu/*
// @exclude      https://my.cofc.edu/cp/*
// @exclude      https://my.cofc.edu/jsp/*
// @exclude      https://my.cofc.edu/jsp/admin/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    setInterval(function(){ window.resetTimeout(); }, 30*1000);
})();