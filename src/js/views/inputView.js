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
    error: false,
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
      this._toggleError();
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

    if (!limit || !str) {
      this._input.classList.remove("invalid");
      return;
    }

    if (str.length > limit) {
      this._markupError();
      this._input.classList.add("invalid");
      return;
    }

    this._input.classList.remove("invalid");
  }

  _markupError() {
    this._errorElement.textContent = `ⓘ Limit reached! Your text exceeds ${this._inputData.limit} characters.`;
  }
}

export default new InputView();
