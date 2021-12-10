class Scheduler {
  queue = []
  maxCount = 1
  runningCount = 0
  constructor(limit) {
    if (limit != null) {  
      this.maxCount = limit
    }
  }

  addTask(time, order) {
    const promiseTask = () => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          console.log(order)
          resolve()
        }, time)
      })
    }
    this.queue.push(promiseTask);
  }
  doit() {
    if ( !this.queue || !this.queue.length || this.runningCount > this.maxCount) {
      return;
    }
    this.runningCount++
    this.queue.shift()().then(() => {
      this.runningCount--;
      this.doit();
    })
  }

  taskStart() {
    for(let i=0; i<this.maxCount; i++) {
      this.doit();
    }
  }
}
const s = new Scheduler(2);

const add = (time, order) => {
  s.addTask(time, order);
};
add(1000, "1");
add(500, "2");
add(300, "3");
add(400, "4");
s.taskStart();