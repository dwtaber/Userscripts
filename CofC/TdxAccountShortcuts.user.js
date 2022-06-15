// ==UserScript==
// @name         TDX Account Shortcuts
// @version      2022.6.7.1
// @downloadURL  https://raw.githubusercontent.com/dwtaber/Userscripts/master/CofC/TdxAccountShortcuts.user.js
// @updateURL    https://raw.githubusercontent.com/dwtaber/Userscripts/master/CofC/TdxAccountShortcuts.user.js
// @namespace    https://github.com/dwtaber/Userscripts
// @supportURL   https://github.com/dwtaber/Userscripts
// @description  Creates shortcut buttons for selecting common account/department values for new users.
// @author       Dan Taber
// @match        https://*.teamdynamix.com/TDNext/Apps/People/PersonNew
// @match        https://*.teamdynamix.com/SBTDNext/Apps/People/PersonNew
// @match        https://*.teamdynamix.com/TDNext/Apps/People/PersonEdit.aspx*
// @grant        none
// ==/UserScript==


/* Easily configurable bits start here! */

// Organization field will prefill with this name.
let orgName = "College of Charleston";

// Account name and ID number of each account we want a button for.
let accounts = [
    {name: "Student", id: 45430},
    {name: "Parent", id: 59055},
    {name: "Alumni", id: 45431}
];

/* End of easily configurable bits! */


// Takes the TDX account name and ID provided and produces the node for
// a button that selects that account without going through the search.
function makeQuickButton(accountName,accountID)
{
    let button = document.createElement("button")
    button.innerHTML = accountName;
    button.name = accountName;
    button.accountID = accountID;
    button.type = "button";
    button.className = "quickButton";
    button.id = `quickButton-${accountID}`;
    button.onclick = function(){acb_taluDepartment.addItem(accountName,accountID);}
    return button;
}

// Create a div to contain the buttons we create.
let buttonContainer = document.createElement("div");
buttonContainer.id = "quickButtonContainer";
buttonContainer.className = "quickButtonContainer";

// Create the specific buttons we want.
accounts.forEach(account => buttonContainer.append(makeQuickButton(account.name,account.id)));

// Prefill the Organization field.
document.getElementById("txtOrganization").value = orgName;

// Inject the buttons and their container between the label and the input box.
document.getElementById("divAccount")
        .firstElementChild
        .after(buttonContainer);
