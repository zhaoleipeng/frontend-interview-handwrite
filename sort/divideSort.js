const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const divideArr = (arr, target, start, end) => {
  let targetIndex = -1
  let mid = Math.floor((start + end) / 2);
  console.log('%c 🥕 mid: ', 'font-size:20px;background-color: #3F7CFF;color:#fff;', mid);

  console.log('%c 🥖 arr[mid]: ', 'font-size:20px;background-color: #B03734;color:#fff;', arr[mid]);
  if (arr[mid] === target ) {
    targetIndex = mid
    console.log('%c 🍻 targetIndex: ', 'font-size:20px;background-color: #FCA650;color:#fff;', targetIndex);
    return targetIndex
  }
  // if (start >= end) {
  //   return targetIndex;
  // }
  if (arr[mid] > target) {
    return  divideArr(arr, target, start, mid - 1)
  } else {
    return divideArr(arr, target, mid+1, end)
  }
}

// divideArr(arr1, 4, 0, arr1.length)
console.log('%c 🧀 divideArr(arr1, 4, 0, arr1.length): ', 'font-size:20px;background-color: #2EAFB0;color:#fff;', divideArr(arr1, 4, 0, arr1.length-1));