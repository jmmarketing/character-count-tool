/*
Mode view toggles light dark modes.
Input view captures input and settings. 
Stats view updates DOM . 
*/
import * as model from "./model.js";
import toggleView from "./views/modeToggleView.js";
import inputView from "./views/inputView.js";
import statsView from "./views/statsView.js";

const controlModeToggle = function () {
  toggleView.changeMode();
};

const controlGetInputData = function () {
  const data = inputView.getInputData();
  console.warn("HERE IS YOUR DATA");

  if (data.error || !data.input) return;

  const dataStats = model.compileStats(data);
  console.log(dataStats);

  controlRenderStats(dataStats);
};

const controlRenderStats = function (obj) {
  statsView.renderStatistics(obj);
};

function init() {
  toggleView.addToggleEventHandler(controlModeToggle);
  inputView.addHandlerSendInputData(controlGetInputData);
}

init();
