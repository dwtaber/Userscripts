// ==UserScript==
// @name         LibChat Volume Slider
// @namespace    https://github.com/dwtaber/userscripts
// @version      0.1
// @updateURL    https://raw.githubusercontent.com/dwtaber/Userscripts/master/LibChatVolumeSlider.js
// @downloadURL  https://raw.githubusercontent.com/dwtaber/Userscripts/master/LibChatVolumeSlider.js
// @description  Allows volume adjustment for LibChat notification sounds
// @author       dwtaber@cofc.edu
// @match        https://*.libanswers.com/admin/dashboard
// @grant        none
// ==/UserScript==

//Inject slider style into document head.
const volumeSliderStyle = `
#volumeSliderContainer {
    display:flex;
}

#volumeSliderWrapper {
    width: 5em;
}

#volumeSlider {
    width: 100%;
}
`;
const togglestyle = document.createElement("style");
togglestyle.innerHTML = volumeSliderStyle;
document.head.append(togglestyle);

//Volume slider and label elements and attributes.
const container = document.createElement("div");
container.setAttribute("id","volumeSliderContainer");
container.setAttribute("class","toggleGroup");

const wrapper = document.createElement("div");
wrapper.setAttribute("id","volumeSliderWrapper");
wrapper.setAttribute("class","btn-statusToggle");

const slider = document.createElement("input");
slider.setAttribute("id","volumeSlider");
slider.setAttribute("type","range");
slider.setAttribute("min","0");
slider.setAttribute("max","100");
slider.setAttribute("value","20");

const label = document.createElement("span");
label.setAttribute("id","toggleLabel")
label.setAttribute("class","toggleLabel");

//Node structure for slider and label.
container.append(wrapper);
wrapper.append(slider);
container.append(label);

//Insert node at target location.
const targetNode = document.getElementById("notifyToggleGroup").parentNode.childNodes[2];
targetNode.after(container);

//Identify alert sounds.
const sounds = document.getElementsByTagName("audio");

//Initial volume level.
let sliderVolume = parseVolume(slider.value);

//Update volume with slider.
slider.oninput = setVolume();


function parseSlider() {
    sliderVolume = parseInt(numberString)/100;
}

function setVolume() {
    parseVolume();
    for (sound in sounds)
    {
        sound.setAttribute("volume",sliderVolume);
    }
}
