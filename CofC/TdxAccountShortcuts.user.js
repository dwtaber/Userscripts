// ==UserScript==
// @name         TDX Account Shortcuts
// @version      2021.05.20.0
// @downloadURL  https://raw.githubusercontent.com/dwtaber/Userscripts/master/CofC/TdxAccountShortcuts.user.js
// @updateURL    https://raw.githubusercontent.com/dwtaber/Userscripts/master/CofC/TdxAccountShortcuts.user.js
// @namespace    https://github.com/dwtaber/Userscripts
// @supportURL   https://github.com/dwtaber/Userscripts
// @description  Creates shortcut buttons for selecting common account/department values for new users.
// @author       Dan Taber
// @match        https://cofc.teamdynamix.com/SBTDNext/Apps/People/PersonNew
// @grant        none
// ==/UserScript==

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
    button.id = `quickButton-${accountName}`;
    button.onclick = function(){setAccount(accountName,accountID);}
    return button;
}

// Not sure any styling will be necessary.
let quickButtonStyle = document.createElement("style");
quickButtonStyle.innerHTML = `
    button.quickButton
    {
    }

    div.quickButtonContainer
    {

    }
`;


// Create a div to contain the buttons we create.
let buttonContainer = document.createElement("div");
buttonContainer.id = "quickButtonContainer";
buttonContainer.className = "quickButtonContainer";

// Create the specific buttons we want.
let studentButton = makeQuickButton("Student",45430);
let parentButton = makeQuickButton("Parent",59055);
let alumniButton = makeQuickButton("Alumni",45431);

buttonContainer.append(studentButton,parentButton,alumniButton);


// Prefill the Organization field.
document.getElementById("txtOrganization").value = "College of Charleston";

// Inject the style sheet into the head tag.
document.head.appendChild(quickButtonStyle);

// Inject the buttons and their container between the label and the input box.
document.getElementById(divAccount)
        .firstElementChild
        .after(buttonContainer);