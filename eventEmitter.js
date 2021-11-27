// 实现一个发布订阅模式拥有 on emit once off 方法

class EventEmitter1 {
  constructor() {
    this.events = {};
  }
  on(type, cb) {
    if (!this.events[type]) {
      this.events[type] = [cb];
    } else {
      this.events[type].push(cb);
    }
  }

  emit(type, ...args) {
    if (this.events[type]) {
      this.events[type] && this.events[type].forEach(fn => {
        fn(...args)
      });
    }
  }
  once(type, callback) {
    const fn = () => {
      callback()
      this.off(type, fn)
    }
    this.on(type, fn)
  }

  off(type, callback) {
    if (!this.events[type]) return
    this.events[type] = this.events[type].filter(fn => fn !== callback)
  }
}


const event = new EventEmitter1();

const handle = (...rest) => {
  console.log(rest);
};

event.on("click", handle);

event.emit("click", 1, 2, 3, 4);

event.off("click", handle);

event.emit("click", 1, 2);

event.once("dbClick", () => {
  console.log(123456);
});
event.emit("dbClick");
event.emit("dbClick");
