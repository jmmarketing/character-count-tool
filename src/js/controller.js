/*
Mode view toggles light dark modes.
Input view captures input and settings. 
Stats view updates DOM . 
*/
import * as model from "./model.js";
import toggleView from "./views/modeToggleView.js";
import inputView from "./views/inputView.js";

const controlModeToggle = function () {
  toggleView.changeMode();
};

function init() {
  toggleView.addToggleEventHandler(controlModeToggle);
}

init();
