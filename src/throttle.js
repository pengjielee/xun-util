/**
 * 函数节流
 *
 * @param  {[Function]}
 * @param  {[Number]}
 * @param  {[Number]}
 * @return {[void]}
 */
const throttle = (func, wait, mustRun) => {
  let timeout,
    startTime = new Date();

  return function () {
    let context = this,
      args = arguments,
      curTime = new Date();

    clearTimeout(timeout);
    if (curTime - startTime >= mustRun) {
      func.apply(context, args);
      startTime = curTime;
    } else {
      timeout = setTimeout(func, wait);
    }
  };
};
export default throttle;
