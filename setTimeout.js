// const setIntervalNew = (fn, ms) => {
//   let timer = null;
//   timer = setTimeout(() => {
//     fn();
//     timer = setIntervalNew(fn, ms);
//   })
//   return timer
// }

// let a = setIntervalNew(() => {
//   console.log(111);
// }, 1000);

class Interval {
  constructor(fn, ms) {
    this.fn = fn
    this.ms = ms
    this._newInterval()
  }
  timer
  fn
  ms
  _newInterval() {
    this.timer = setTimeout(() => {
      this.fn();
      this._newInterval();
    }, this.ms)
  }

  cancel() {
    clearTimeout(this.timer)
  }
  
}


const a = new Interval(() => { console.log(123) }, 1000)

setTimeout(() => {
 a.cancel()
},3000)