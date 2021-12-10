

class Mypromise {
  constructor(fn) {
    this.state = "pending";
    this.successFun = [];
    this.failFun = [];

    let resolve = (val) => {
      if (this.state !== "pending") return;

      this.state = "success";

      setTimeout(() => {
        this.successFun.forEach((i) => i.call(this, val));
      });
    };

    let reject = (err) => {
      if (this.state !== "pending") return;
      // 失败触发时机  改变状态 同时执行在then注册的回调事件
      this.state = "fail";
      // 为了保证then事件先注册（主要是考虑在promise里面写同步代码） promise规范 这里模拟异步
      setTimeout(() => {
        this.failFun.forEach((item) => item.call(this, err));
      });
    };

    // 调用函数
    try {
      fn(resolve, reject);
    } catch (error) {
      reject(error);
    }
  }

  then(resolveCallback, rejectCallback) {
    resolveCallback =
      typeof resolveCallback !== "function" ? (v) => v : resolveCallback;
    rejectCallback = typeof rejectCallback !== 'function' ? v => { throw v } : rejectCallback;

    return new Mypromise((resolve, reject) => {
      this.successFun.push((val) => {
        try {
          let x = resolveCallback(val)
          console.log('%c 🍬 x: ', 'font-size:20px;background-color: #F5CE50;color:#fff;', x);

          // 如果说x是promise需要等待promise异步的返回结果。
          x instanceof Mypromise ? x.then(resolve, reject) : resolve(x);
        } catch (e) {
          reject(e)
        }
      })
      this.failFun.push((val) => {
        try {
          //    执行回调函数
          let x = rejectCallback(val);
          x instanceof Mypromise ? x.then(resolve, reject) : reject(x);
        } catch (error) {
          reject(error);
        }
      });
    })
  }

  all (fnList) {
    let result = [];
    let count = 0
    return new Mypromise((resolve, reject) => {
      for (let i = 0; i < fnList.length; i ++) {
        Promise.resolve(fnList[i]).then(res => {
          result[i] = res;
          count ++;
          if (count === fnList.length) {
            resolve(result)
          }
        }, err => reject(err))
      }
    })
  }
}


const a = new Mypromise((resolve, reject) => {
  setTimeout(() => {
    resolve(123);
  }, 2000);
})

a.then(
  (res) => {
    console.log(
      "%c 🥦 res: ",
      "font-size:20px;background-color: #6EC1C2;color:#fff;",
      res
    );
    return res;
  },
  (err) => {
    console.log(
      "%c 🍋 err: ",
      "font-size:20px;background-color: #ED9EC7;color:#fff;",
      err
    );
  }
).then(
  (res) => {
    console.log(
      "%c 🥦 res: ",
      "font-size:20px;background-color: #6EC1C2;color:#fff;",
      res
    );
    return res;
  },
  (err) => {
    console.log(
      "%c 🍋 err: ",
      "font-size:20px;background-color: #ED9EC7;color:#fff;",
      err
    );
  }
);