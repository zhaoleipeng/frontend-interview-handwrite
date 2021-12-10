class LRUCache {
  constructor(max) {
    this.max = max;
    this.dataset = new Map();
  }

  get(key) {
    if (this.dataset.has(key)) {
      let tValue = this.dataset.get(key);
      this.dataset.delete(key);
      this.dataset.set(key, tValue);
      return tValue;
    }
    return -1;
  }

  put(key, value) {
    if (this.dataset.has(key)) {
      this.dataset.delete(key);
      this.dataset.set(key, value);
    } else if (this.dataset.size < this.max) {
      this.dataset.set(key, value);
    } else {
      // console.log('%c 🍐 this.dataset.entries().next().value: ', 'font-size:20px;background-color: #6EC1C2;color:#fff;', this.dataset.keys().next().value);
      this.dataset.delete(this.dataset.keys().next().value);
      this.dataset.set(key, value);
    }
  }
}

let cache = new LRUCache(2);
cache.put(1, 1);
cache.put(2, 2);
console.log("cache.get(1)", cache.get(1))// 返回  1
cache.put(3, 3);// 该操作会使得密钥 2 作废
console.log("cache.get(2)", cache.get(2))// 返回 -1 (未找到)
cache.put(4, 4);// 该操作会使得密钥 1 作废
console.log("cache.get(1)", cache.get(1))// 返回 -1 (未找到)
console.log("cache.get(3)", cache.get(3))// 返回  3
console.log("cache.get(4)", cache.get(4))// 返回  4
