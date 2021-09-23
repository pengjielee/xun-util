/**
 * 深拷贝
 *
 * @param  {[Object]}
 * @param  {[WeakMap]}
 * @return {[Object]}
 */
const deepClone = (obj, hash = new WeakMap()) => {
  if (obj instanceof RegExp) return new RegExp(obj);
  if (obj instanceof Date) return new Date(obj);
  if (obj === null || typeof obj != "object") {
    return obj; // 如果不是复杂数据类型，直接返回
  }
  if (hash.has(obj)) {
    return has.get(obj);
  }
  /**
   * 如果obj是数组，那么 obj.constructor 是 [Function: Array]
   * 如果obj是对象，那么 obj.constructor 是 [Function: Object]
   **/
  let t = new obj.constructor();
  hash.set(obj, t);
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      //是否是自身的属性
      // 递归
      t[key] = deepClone(obj[key], hash);
    }
  }
  return t;
};
