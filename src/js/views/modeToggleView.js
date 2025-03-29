import darkLogo from "../../../assets/images/logo-dark-theme.svg";
import lightLogo from "../../../assets/images/logo-light-theme.svg";

class ModeToggleView {
  _toggle = document.querySelector(".header-toggle");
  _toggleIcon = document.querySelector(".header-toggle__icon");
  _bodyElement = document.querySelector("body");
  _logoElement = document.querySelector(".header-logo");

  _display = {
    mode: "dark",
    logos: {
      dark: darkLogo,
      light: lightLogo,
    },
  };

  addToggleEventHandler(eventFunction) {
    this._toggle.addEventListener("click", eventFunction);
  }

  _toggleModeElements() {
    this._toggleIcon.setAttribute("src", ``);

    this._logoElement.setAttribute(
      "src",
      this._display.logos[this._display.mode]
    );
  }

  changeMode() {
    const isDark = !this._bodyElement.dataset.theme;

    if (isDark) {
      this._bodyElement.dataset.theme = "light";
      this._display.mode = "light";
    } else {
      delete this._bodyElement.dataset.theme;
      this._display.mode = "dark";
    }

    this._toggleModeElements();
  }
}

export default new ModeToggleView();
