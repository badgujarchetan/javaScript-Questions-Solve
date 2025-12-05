// Q1 : write a function FindLogest word that takes a string as input and returns the longest word in the string.if there are multiple words retrun the first one encountered

// constraints:
// the input string may contains alphabetetic charcters , digit, space, and punctuation.
// the input string is non-empty
// the input string may contains multiple words separeted by space

// note :

// if the input string is empty or contains only whitspaces the functions should retrun an false
// the function should ignore leading and trailing whitespace when determinig the longest world

const findLongestWords = (str) => {
  if (str.trim().length === 0) {
    return false;
  }

  let words = str.split(" ");

  words = words.sort((a, b) => b.length - a.length);

  return words[0];
};

console.log(
  findLongestWords(
    "watch the movies in 2025 while coding amazing projects and exploring new ideas across different creative tech domains daily now"
  )
);
