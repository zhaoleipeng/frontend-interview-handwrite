function typeofFunc(a,b) {
  while(true) {

    if (a === null) {
      return false;
    }
    if (a.__proto__ === b.prototype) {
      return true;
    }
    a = a.__proto__
  }
}