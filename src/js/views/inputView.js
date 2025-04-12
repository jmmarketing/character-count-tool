class InputView {
  _input = document.querySelector(".input-textarea");
  _spacesOption = document.querySelector("#spaces");
  _characterOption = document.querySelector("#limit");
  _limit = document.querySelector("#limit-count");
  _errorElement = document.querySelector(".error-message");

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

    this._input.addEventListener("change", this._getInputString.bind(this));
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

    this._toggleError();
  }

  _getInputString() {
    const inputString = this._input.value;
    this._inputData.input = inputString;

    this._toggleError();
  }

  _toggleError() {
    const str = this._inputData.input;
    const limit = this._inputData.limit;

    if (limit && str)
      str.length > limit
        ? this._input.classList.add("invalid")
        : this._input.classList.remove("invalid");
    else this._input.classList.remove("invalid");
  }
}

export default new InputView();
