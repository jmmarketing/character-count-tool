import toggleView from "./views/modeToggleView.js";

const controlModeToggle = function () {
  toggleView.changeMode();
};

function init() {
  toggleView.addToggleEventHandler(controlModeToggle);
}

init();
