// console.log(flatter([1, 2, [1, [2, 3, [4, 5, [6]]]]]));

// 递归

// const flatter = (arr) => {
//   if (!arr.length) return;
//   return arr.reduce((pre, cur) => {
//     return Array.isArray(cur) ? [...pre, ...flatter(cur)] : [...pre, cur]
//   }, [])
// }

// // 迭代.通过...来无限拆解

// const flatter = (arr) => {
//   if (!arr.length) return;
//   while(arr.some(item => Array.isArray(item))) {
//     console.log('%c 🍜 arr: ', 'font-size:20px;background-color: #3F7CFF;color:#fff;', arr);
//     arr = [].concat(...arr)
//   }
//   return arr;
// }
console.log(flatter([1, 2, [1, [2, 3, [4, 5, [6]]]]]));

function flatter(arr =[]) {
  while(arr.some(Array.isArray)) {
    arr = [].concat(...arr)
  }
  return arr
}
