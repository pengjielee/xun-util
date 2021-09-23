/**
 * 返回两个数组的交集
 *
 * @param  {[Array]}
 * @param  {[Array]}
 * @return {[Array]}
 */
const intersection = (a, b) => {
  const s = new Set(b);
  return a.filter((x) => s.has(x));
};

export default intersection;
