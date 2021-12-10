// const curry = (fn, arity = fn.length, ...args) =>
//   arity <= args.length ? fn(...args) : curry.bind(null, fn, arity, ...args);
// // curry(Math.pow)(2)(10); // 1024
// // console.log('%c 🍮 curry(Math.pow)(2)(10);: ', 'font-size:20px;background-color: #93C0A4;color:#fff;', curry(Math.pow)(2)(10));
// curry(Math.min, 3)(10)(50)(2); // 2


// function func (f) {
//   console.log(f.length)
// }

// func(Math.min)


// const curry = (fn, arity = fn.length, ...args) => arity <= args.length ? fn(...args) : curry.bind(null, fn, arity, ...args);
// function curry(func) {
//   return function curried(...args) {
//     if (args.length >= func.length) {
//       return func.apply(this, args);
//     } else {
//       return function (...args2) {
//         return curried.apply(this, args.concat(args2));
//       };
//     }
//   };
// }

// const curry = (fn, arity = fn.length, ...args) => arity <= args.length ? fn(...args) : curry.bind(null, fn, arity, ...args)
// console.log(curry(Math.pow,3)(10)(2)(2));

// 如果方法的参数大于传入的参数，就需要返回的是一个方法。
const curry = (fn, arity = fn.length, ...args) => {
  console.log('%c 🍌 args: ', 'font-size:20px;background-color: #FFDD4D;color:#fff;', args);
  return arity <= args.length ? fn(...args) : curry.bind(null, fn, arity, ...args)
}

console.log(curry(Math.pow,3)(10)(2)(2));













