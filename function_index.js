var x = 1;
a();
b();
console.log(x);

function a() {
  var x = 0;
  console.log(x);
}

function b() {
  var x = 100;
  console.log(x);
}
