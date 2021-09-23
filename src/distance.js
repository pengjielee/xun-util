/**
 * 计算两点间的距离
 *
 * @param  {Object}
 * @param  {Object}
 * @return {[Number]}
 */
const distance = (point1 = { x1: 0, y1: 0 }, point2 = { x2: 0, y2: 0 }) =>
  Math.hypot(x1 - x2, y2 - y1);

export default distance;
