function recurse(num) {
  if (num > 0) {
    console.log(num);
    recurse(num - 1);
  }
}
recurse(10);
