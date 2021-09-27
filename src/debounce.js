/**
 * 函数防抖
 *
 * @param  {[Function]}
 * @param  {[Number]}
 * @return {[void]}
 */
const debounce = (fn, wait) => {
  if (typeof fn !== "function") {
    throw new TypeError("Expected a function");
  }
  let timer = null;
  return function () {
    let self = this,
      args = arguments;
    timer && clearTimeout(timer);
    timer = setTimeout(function () {
      fn.apply(self, args);
    }, wait);
  };
};

export default debounce;
