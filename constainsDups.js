const containsDuplicates = (nums) => {
  let tempArr = [];
  nums.forEach((element) => {
    if (!tempArr.includes(element)) {
      tempArr.push(element);
    }
  });
  if (tempArr.length === nums.length) {
    return false;
  } else {
    return true;
  }
};
console.log(containsDuplicates([4, 2, 3, 1]));
