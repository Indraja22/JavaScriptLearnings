const isPalindromeOrNot = (n) => {
  for (let i = n.length - 1; i >= 0; i--) {
    let revNum = revNum + n[i];
  }
  console.log(revNum);
  if (revNum === n) {
    return true;
  } else {
    return false;
  }
};

console.log(isPalindromeOrNot(121));
