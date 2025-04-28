/*
For the Reading time, and number counters we can just render those with basic innerText methods. 

Letter density and see more will be trickier. Initial approach:
    - Take density data object and map through with html, and append to parent conatiner.
    - Set a max height for density container and set overflow to hidden. When See more is clicked we update the styling to fit-content. Seems simple enough. 

*/

class StatsView {
  _readingTime = document.querySelector("#reading-time");
  _characters = document.querySelector("#characters");
  _words = document.querySelector("#words");
  _sentences = document.querySelector("#sentences");

  _densityContainer = document.querySelector(".letters__container");
  _noCharacterMessage = document.querySelector("#no-characters");
  _seeMoreElement = document.querySelector(".see-more");

  renderStatistics(dataStatsObj) {
    const { characters, words, sentences, readtime, density } = dataStatsObj;
    this._renderReadingTime(readtime);
    this._renderCountNumbers(characters, words, sentences);
  }

  _renderReadingTime(num) {
    this._readingTime.textContent = num < 1 ? "<1" : Math.ceil(num);
  }

  _renderCountNumbers(characters = 0, words = 0, sentences = 0) {
    this._characters.textContent = characters;
    this._words.textContent = words;
    this._sentences.textContent = sentences;
  }
}
export default new StatsView();
