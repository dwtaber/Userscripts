// ==UserScript==
// @name         LibGuides Tab Box Style
// @namespace    https://github.com/dwtaber/userscripts
// @version      0.1.1
// @updateURL    https://raw.githubusercontent.com/dwtaber/Userscripts/master/musc/LibGuidesTabBoxStyle.js
// @downloadURL  https://raw.githubusercontent.com/dwtaber/Userscripts/master/musc/LibGuidesTabBoxStyle.js
// @description  Alters styling of tabbed boxes on MUSC LibGuides
// @author       dwtaber@gmail.com
// @match        http*://musc.libguides.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    //Inject style into document head.
    const tabBoxStyleContent = `
    ul.nav.nav-tabs>li.active>a {
        color: #005486;
        background-color: #d9e9f2;
        font-weight: 600;
    }

    ul.nav.nav-tabs>li>a {
        color: #999;
        font-size: 0.9em;
        margin-bottom: 0;
    }

    `;

    const tabBoxStyle = document.createElement("style");
    tabBoxStyle.innerHTML = tabBoxStyleContent;
    document.head.append(tabBoxStyle);

})();
