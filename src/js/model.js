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
  console.log(stats);
  return stats;
}

function charCount(string, spaces = false) {
  const spacesCount = string.split(" ").length - 1;
  const characterCount = string.length;

  stats.characters = spaces ? characterCount - spacesCount : characterCount;
}

function wordCount(string) {}

function sentenceCount(string) {}

function readTime(num) {}

function letterDensity(string) {}
