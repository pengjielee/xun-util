/**
 * 函数节流
 *
 * @param  {[Function]}
 * @param  {[Number]}
 * @param  {[Number]}
 * @return {[void]}
 */
const throttle = (fn, wait, mustRun) => {
  if (typeof fn !== "function") {
    throw new TypeError("Expected a function");
  }
  let timeout,
    startTime = new Date();

  return function () {
    let context = this,
      args = arguments,
      curTime = new Date();

    clearTimeout(timeout);
    if (curTime - startTime >= mustRun) {
      fn.apply(context, args);
      startTime = curTime;
    } else {
      timeout = setTimeout(fn, wait);
    }
  };
};
export default throttle;
