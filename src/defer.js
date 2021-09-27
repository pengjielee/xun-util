/**
 * 函数延迟执行
 *
 * @param  {Function}
 * @param  {[Args]}
 * @return {[void]}
 */
const defer = (fn, ...args) => {
  if (typeof fn !== "function") {
    throw new TypeError("Expected a function");
  }
  return setTimeout(fn, 1, ...args);
};

export default defer;
