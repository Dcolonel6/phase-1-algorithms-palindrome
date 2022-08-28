function isPalindrome(word) {
  // Write your algorithm here
  const listOfLetters = word.split('')
  return listOfLetters.reverse().join("") === word
}

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("Expecting: True");
  console.log("=>", isPalindrome("noon"));

  console.log("Expecting: True");
  console.log("=>", isPalindrome("nun"));

  console.log("Expecting: false");
  console.log("=>", isPalindrome("okta"));
}

module.exports = isPalindrome;
