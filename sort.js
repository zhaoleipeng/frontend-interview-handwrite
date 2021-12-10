const arr = [200,3,123,123,1222,1,3,10] 

// 冒泡排序。
// 间隔两侧，一直互相更换位置，将最大的移到最后面。
// const bubbleSort = (arr) => {
//   const length = arr.length;
//   for (let i = 0; i < length -1; i ++) {
//     for (let j = 0; j< length-1; j++) {
//       if (arr[j] > arr[j+1]) {
//         [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
//       }
//     }
//   }
//   return arr;
// }
// console.log('%c 🍗 bubbleSort(arr): ', 'font-size:20px;background-color: #FCA650;color:#fff;', bubbleSort(arr));

// 选择排序
// 遍历数组，选择其中最小的或者最大的，将其与特定位置互换。
// const selectionSort = arr => {
//   let minIndex = 0;
//   let curIndex = 0;
//   for (let i = 0; i < arr.length; i++) {

//     for(let j = curIndex; j < arr.length; j++) {
//       if (arr[j]<arr[minIndex]) {
//         minIndex = j;
//       }
//     }
//     if (minIndex !== i) {
//       [arr[curIndex], arr[minIndex]] = [arr[minIndex], arr[curIndex]];
//     }
//     curIndex++;
//     minIndex = curIndex
//   }
//   return arr;
// }

// console.log('%c 🍚 selectionSort(arr);: ', 'font-size:20px;background-color: #E41A6A;color:#fff;', selectionSort(arr));

// 插入排序
// 对之前已经排好的内容，进行比较，插入前面已经排好的列表里面


// 快速排序
// const quickSort = (arrList = []) => {
//   if (arrList.length < 2) {
//     return arrList;
//   }
//   const cur = arrList[arrList.length-1]
//   const left = arrList.filter(
//     (i, index) => i <= cur && index !== arrList.length - 1
//   );
//   const right = arrList.filter(i => i > cur)
//   return [...quickSort(left), cur, ...quickSort(right)]
// }
// // quickSort(arr)
// console.log('%c 🎂 quickSort(arr): ', 'font-size:20px;background-color: #6EC1C2;color:#fff;', quickSort(arr));


// const quickSort = (arr) => {
//   if (arr.length < 2) {
//     return arr;
//   }
  
//   const mid = arr[0];
//   const left = arr.filter((i,index) => index !==0 && i <=mid)
//   const right = arr.filter(i => i > mid)
//   return [...quickSort(left), mid, ...quickSort(right)]
// }

// console.log('%c 🍲 quickSort(arr): ', 'font-size:20px;background-color: #ED9EC7;color:#fff;', quickSort(arr));






const quickSort1 = (arr) => {
  console.log('%c 🥓 arr: ', 'font-size:20px;background-color: #FCA650;color:#fff;', arr);
  if (arr.length < 2) {
    return arr
  }
  const mid = arr[0];
  const left = arr.filter((x,index) => x <= mid && index !== 0 )
  const right = arr.filter(x => x > mid)
  return [ ...quickSort1(left), mid, ...quickSort1(right)]
}
console.log('%c 🥚 quickSort1(arr): ', 'font-size:20px;background-color: #EA7E5C;color:#fff;', quickSort1(arr));