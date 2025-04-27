//Psuedo code:
/* What calculations and states need to be recognized and done:
- Is Exclude Spaces checked?
- Is there a Chracter limit? 
    -- Both of these could be passed as parameters with default set to false. 

- Total input (string) needs to be recieved. 
- Length = Characters (+/- spaces)
- Spaces = Word Count
- Periods = Sentence count. 
- Letter Density
    - Reduce over string and increase count based on letter (MDN has example i think). 
- Time Read = Need to come up with equation. Word count / avg words read a minute? Round up to closest minute. 180/min

Out put should be one data object. 

*/

export let stats = {
  characters: 0,
  words: 0,
  sentences: 0,
  readtime: 0,
  density: {},
};

export function compileStats(obj) {
  console.log("compileStat Function is called!");
  charCount(obj.input, obj.spaces);
  wordCount(obj.input);
  sentenceCount(obj.input);
  readTime(stats.words);
  letterDensity(obj.input);
  console.log(stats);
  return stats;
}

function charCount(string, spaces = false) {
  const spacesCount = string.split(" ").length - 1;
  const characterCount = string.length;

  stats.characters = spaces ? characterCount - spacesCount : characterCount;
}

function wordCount(string) {
  const words = string.trim().split(" ").length;

  stats.words = words;
}

function sentenceCount(string) {
  const sentences = string.trim().split(".").length - 1;

  stats.sentences = sentences;
}

function readTime(num) {
  const time = +(num / 180).toFixed(2);

  stats.readtime = time;
}

function letterDensity(string) {
  stats.density = {};
  const letters = string.split("").filter((l) => l !== " ");
  console.log(letters);
}
