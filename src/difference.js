/**
 * 返回第一个数组独有的元素
 *
 * @param  {[Array]}
 * @param  {[Array]}
 * @return {[Array]}
 */
const difference = (a, b) => {
  const s = new Set(b);
  return a.filter((x) => !s.has(x));
};

export default difference;
