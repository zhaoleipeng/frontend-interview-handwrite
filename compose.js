// 实现compose函数
// 用法如下:
function fn1(x) {
  return x + 1;
}
function fn2(x) {
  return x + 2;
}
function fn3(x) {
  return x + 3;
}
function fn4(x) {
  return x + 4;
}
// function compose (...args) {
//   if (args.length === 1) return args[0];
//   return args.reduce(
//     (pre, cur) =>
//       (...params) => {
//         console.log('%c 🦀 params: ', 'font-size:20px;background-color: #33A5FF;color:#fff;', params);
//         return pre(cur(...params))
//       }
//   );
// }
const a = compose(fn1, fn2, fn3, fn4);
console.log(a(1)); // 1+4+3+2+1=11

// 实现结果代码

function compose(...args) {
  // if (args.length === 1) return args[0]
  return args.reduce((preRes, cur) => (...args) => preRes(cur(...args)) )

}
