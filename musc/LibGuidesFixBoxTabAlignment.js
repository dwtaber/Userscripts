// ==UserScript==
// @name         LibGuides Fix Box Tab Alignment
// @namespace    https://github.com/dwtaber/userscripts
// @version      0.1
// @updateURL    https://raw.githubusercontent.com/dwtaber/Userscripts/master/musc/LibGuidesFixBoxTabAlignment.js
// @downloadURL  https://raw.githubusercontent.com/dwtaber/Userscripts/master/musc/LibGuidesFixBoxTabAlignment.js
// @description  Fixes alignment/float issue on some LibGuides tabbed boxes
// @author       dwtaber@gmail.com
// @match        http*://musc.libguides.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    //Inject style into document head.
    const tabBoxStyleContent = `
    
    /* Fix float issue */
    ul.nav.nav-tabs {
        float: initial;
    }


    `;

    const tabBoxStyle = document.createElement("style");
    tabBoxStyle.innerHTML = tabBoxStyleContent;
    document.head.append(tabBoxStyle);

})();
