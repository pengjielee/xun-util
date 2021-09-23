/**
 * 计算一个函数执行时间
 *
 * @param  {Function}
 * @return {[void]}
 */
const timeTaken = (callback) => {
  console.time("timeTaken");
  const r = typeof callback === "function" ? callback() : 0;
  console.timeEnd("timeTaken");
  return r;
};

export default timeTaken;
