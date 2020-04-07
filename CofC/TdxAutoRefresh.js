// ==UserScript==
// @name         TDX Auto-refresh
// @namespace    https://github.com/dwtaber/userscripts
// @version      0.8
// @updateURL    https://raw.githubusercontent.com/dwtaber/Userscripts/master/CofC/TdxAutoRefresh.js
// @downloadURL  https://raw.githubusercontent.com/dwtaber/Userscripts/master/CofC/TdxAutoRefresh.js
// @description  Refreshes all modules in TDNext desktops at a specified interval.
// @author       dwtaber@cofc.edu
// @match        https://cofc.teamdynamix.com/*/Desktop.aspx
// @grant        none
// ==/UserScript==

//Inject slider style into document head.
const togglestylecontent = `
.switch {
  position: relative;
  display: inline-block;
  width: 2em;
  height: 1.05em;
  vertical-align: -30%;
}

.switch input {display:none;}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: .75em;
  width: .75em;
  left: .15em;
  bottom: .15em;
  background-color: #f5f5f5;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider {
  background-color: #2b2b2b;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2b2b2b;
}

input:checked + .slider:before {
  -webkit-transform: translateX(.95em);
  -ms-transform: translateX(.95em);
  transform: translateX(.95em);
}

/* Rounded sliders */
.slider.round {
  border-radius: 1em;
}

.slider.round:before {
  border-radius: 50%;
}
`;
const togglestyle = document.createElement("style");
togglestyle.setAttribute("type", "text/css");
togglestyle.innerHTML = togglestylecontent;
document.head.appendChild(togglestyle);

//Identifies all modules in a TDNext desktop.
const modulelist = Array.from(document.getElementsByClassName("desktop-module"));

//Sets an ID for the set of control buttons in each module.
for(let value of modulelist){
	value.firstChild.lastChild.setAttribute("id", value.id + "-controls");
}

//Create a styled unique checkbox to the left of each module's controls
for(let value of modulelist){
	let switchbg = document.createElement("label");
	switchbg.setAttribute("class", "switch");
	switchbg.setAttribute("title", "Toggle auto-refresh");
	let toggle = document.createElement("input");
	toggle.setAttribute("type", "checkbox");
	toggle.setAttribute("id", value.id + "-toggle");
	toggle.setAttribute("checked", "checked");
	let slider = document.createElement("span");
	slider.setAttribute("class", "slider round");
	switchbg.appendChild(toggle);
	switchbg.appendChild(slider);
	let controls = document.getElementById(value.id + "-controls");
	controls.insertBefore(switchbg, controls.firstChild);
}

//Refreshes only modules toggled to auto-refresh
function refreshCheckedModules(){
	for (let value of modulelist){
		let toggle = document.getElementById(value.id + "-toggle");
		if(toggle.checked == true){
			refreshModule(value.id);
		}
	}
}

setInterval(refreshCheckedModules, 60000);
