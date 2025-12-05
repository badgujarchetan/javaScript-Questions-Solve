// Q2 Hash tag generator

// you are required to implement a function generateHash that generates a hash tag form a given input string the hash tag should be constucted as follow:

// the input string should be converted to a hash tag format, where each word is capitalized and concatenated together withaout spaces

// if the length of the input string is greter than 280 characters or if the input string is empty or contains only whitspaces the function should return false

// otherWise the function should return the generated hash tag prefixed with #

const generateHash = (str) => {
  if (str.trim().length === 0 || str.length > 280) {
    return false;
  }
  newStr = str.split(" ")
  // console.log(newStr);

  newStr = newStr.map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  });

  return "#" + newStr.join("");
};

console.log(generateHash("my name is chetan badgujar"));
