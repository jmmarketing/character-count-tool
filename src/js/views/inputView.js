class InputView {
  _input = document.querySelector(".input-container");
  _spacesOption = document.querySelector("#spaces");
  _characterOption = document.querySelector("#limit");
  _limit = document.querySelector("#limit-count");

  _inputData = {
    input: null,
    spaces: false,
    limit: null,
  };

  constructor() {
    this._init();
  }

  _init() {
    this._characterOption.addEventListener(
      "change",
      this._toggleCharacterLimit.bind(this)
    );

    this._limit.addEventListener("change", this._setCharacterLimit.bind(this));
  }

  _toggleCharacterLimit() {
    if (this._characterOption.checked) {
      this._limit.classList.remove("hide");
    } else {
      this._limit.classList.add("hide");
      this._inputData.limit = null;

      this._limit.value = "";
    }

    console.log(this._inputData);
  }

  _setCharacterLimit() {
    const characterLimit = this._limit.valueAsNumber;
    characterLimit !== NaN && (this._inputData.limit = characterLimit);
    console.log(this._inputData);
  }
}

export default new InputView();
