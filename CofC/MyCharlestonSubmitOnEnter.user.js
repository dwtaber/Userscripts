// ==UserScript==
// @name         MyCharleston Admin Submit on Enter
// @version      2021.05.18.0
// @downloadURL  https://github.com/dwtaber/Userscripts/raw/master/CofC/MyCharlestonSubmitOnEnter.user.js
// @updateURL    https://github.com/dwtaber/Userscripts/raw/master/CofC/MyCharlestonSubmitOnEnter.user.js
// @namespace    https://github.com/dwtaber/Userscripts
// @supportURL   https://github.com/dwtaber/Userscripts
// @description  Enables submiting name/username searches with the Enter/Return key in the admin console.
// @author       Dan Taber
// @include      https://my.cofc.edu/jsp/admin/manageUser.jsp
// @grant        none
// ==/UserScript==


// Submit on Enter.
document.getElementsByName("search_btn")[0].type = "submit";

// Focus on the username input.
document.getElementsByName("UserName")[0].focus();
