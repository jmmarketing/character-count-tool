class InputView {
  _input = document.querySelector(".input-container");
  _spacesOption = document.querySelector("#spaces");
  _characterOption = document.querySelector("#limit");
  _limit = document.querySelector("#limit-count");

  constructor() {
    this._init();
  }

  _init() {
    this._characterOption.addEventListener(
      "change",
      this._toggleCharacterLimit.bind(this)
    );
  }

  _toggleCharacterLimit() {
    this._characterOption.checked
      ? this._limit.classList.remove("hide")
      : this._limit.classList.add("hide");
  }
}

export default new InputView();
