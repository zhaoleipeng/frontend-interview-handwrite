// accumulator是之前所有的结果集合
function sum(...numbers) {
  return numbers.reduce((accumulator, current) => {
    return accumulator + current;
  }, 10);
}

console.log(sum(1,2,3,4,5)) // 15