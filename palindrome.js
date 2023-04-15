const isPalindrome = (str) => {
  let reverseStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reverseStr += str[i];
  }
  if (reverseStr == str) {
    return true;
  } else {
    return false;
  }
};

console.log(isPalindrome("abba"));
console.log(isPalindrome("ggop"));
