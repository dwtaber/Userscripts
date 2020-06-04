// ==UserScript==
// @name         LibGuides Tab Box Style
// @namespace    https://github.com/dwtaber/userscripts
// @version      0.1
// @updateURL    https://raw.githubusercontent.com/dwtaber/Userscripts/master/musc/LibGuidesTabBoxStyle.js
// @downloadURL  https://raw.githubusercontent.com/dwtaber/Userscripts/master/musc/LibGuidesTabBoxStyle.js
// @description  Allows volume adjustment for LibChat notification sounds
// @author       dwtaber@gmail.com
// @match        http://musc.libguides.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    //Inject style into document head.
    const volumeSliderStyle = `
    ul.nav.nav-tabs li.active a {
        color: #005486
    }

    ul.nav.nav-tabs a {
        color: #999;
        font-size: 0.9em !important;
        font-weight: 600;
    }
    `;
    
})();
