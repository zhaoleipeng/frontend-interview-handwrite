const isObject = (target) => {
  if (typeof target === 'object' && target !== null){
    return true
  }
  return false;
}

const deepClone = (obj , hash = new WeakMap()) => {
  if (!isObject) return obj;
  if (hash.has(obj)) {
    hash.get(obj)
  }
  let target = Array.isArray(obj) ? [] : {}
  hash.set(obj, target);
  Reflect.ownKeys(obj).forEach(item => {
    if(!isObject(obj[item])) {
      target[item] = obj[item]
    } else {
      target[item] = deepClone(obj[item], hash);
    }
  })

  return target;
}

var sym = Symbol.for("comet");
var sym2 = Symbol.for("meteor");
var obj = {
  [sym]: 0,
  str: 0,
  773: 0,
  0: 0,
  [sym2]: 0,
  "-1": 0,
  8: 0,
  "second str": 0,
};

console.log(dpClone(obj))



function isObj (obj) {
  if (typeof obj === 'object' && obj !== null) {
    return true
  }
  return false
}
function dpClone(obj) {
  if (!isObj(obj)) {
    return obj
  }
  // if (wm.has(obj)) {
  //   wm.get(obj)
  // }
  let target = Array.isArray(obj) ? [] : {};
  // wm.set(obj, target)
  Reflect.ownKeys(obj).forEach((item, index) => {
    if (isObj(obj[item])) {
      target[item] = dpClone(obj[item])
    } else {
      target[item] = obj[item]
    }
  })
  return target;
}