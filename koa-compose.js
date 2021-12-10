// function compose(middleware) {
//   if (!Array.isArray(middleware))
//     throw new TypeError("Middleware stack must be an array!");
//   for (const fn of middleware) {
//     if (typeof fn !== "function")
//       throw new TypeError("Middleware must be composed of functions!");
//   }

//   /**
//    * @param {Object} ctx
//    * @return {Promise}
//    * @api public
//    */
//   return function fn(ctx, next) {
//     // 简化了部分代码
//     return dispatch(0);
//     function dispatch(i) {
//       let middlewareFn = middleware[i];
//       try {
//         return Promise.resolve(middlewareFn(ctx, dispatch.bind(null, i + 1)));
//       } catch (err) {
//         return Promise.reject(err);
//       }
//     }
//   };
// }


const c1 = async (ctx, next) => {
  console.log(1)
  // throw new Error('aaaa')
  await next();
  console.log(2)
}

const c2 = async (ctx, next) => {
  console.log(3)
  // await next()
}

const fn = compose([c1, c2])

fn();


function compose(middleware) {
  // 先判断是否是Array<Function>
  if (!Array.isArray(middleware)) {
    throw new Error("middleware must be array");
  }

  for (const fn of middleware) {
    if (typeof fn !== "function")
      throw new TypeError("Middleware must be composed of functions!");
  }
  //   return function fn(ctx, next) {
  //     // 简化了部分代码
  //     return dispatch(0);
  //     function dispatch(i) {
  //       let middlewareFn = middleware[i];
  //       try {
  //         return Promise.resolve(middlewareFn(ctx, dispatch.bind(null, i + 1)));
  //       } catch (err) {
  //         return Promise.reject(err);
  //       }
  //     }
  //   };
  return function fn(ctx) {
    return dispatch(0)
    function dispatch(i)  {
      let middlewareFn =  middleware[i];
      try {
        return Promise.resolve(middlewareFn(ctx, dispatch.bind(null, i + 1)));
      } catch (err) {
        return Promise.reject(err);
      }
    }
  }
  
}