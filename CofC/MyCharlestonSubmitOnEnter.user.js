// ==UserScript==
// @name         MyCharleston Admin Submit on Enter
// @namespace    https://github.com/dwtaber/userscripts
// @version      0.1.1
// @description  Enables submiting name/username searches with the Enter/Return key in the admin console.
// @author       Dan Taber
// @match        https://github.com/dwtaber/Userscripts/CofC/blob/master/MyCharlestonSubmitOnEnter.user.js
// @include      https://my.cofc.edu/jsp/admin/manageUser.jsp
// ==/UserScript==


// Submit on Enter.
document.getElementsByName("search_btn")[0].type = "submit";