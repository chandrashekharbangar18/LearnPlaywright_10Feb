let obj = {name : "Login"};
console.log(Object.getOwnPropertyDescriptor(obj, "name"));

// o/p
/*
 {
  value: 'Login',
  writable: true,
  enumerable: true,
  configurable: true
}
*/