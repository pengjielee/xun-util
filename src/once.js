/**
 * 函数只运行一次
 *
 * @param  {[Function]}
 * @return {[void]}
 */
const once = (fn) => {
  let called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  };
};

export default once;
