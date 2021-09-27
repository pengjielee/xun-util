/**
 * 计算两点间的距离
 *
 * @param  {Object}
 * @param  {Object}
 * @return {[Number]}
 */
const distance = (point1 = { x1: 0, y1: 0 }, point2 = { x2: 0, y2: 0 }) =>
  Math.hypot(point1.x1 - point2.x2, point2.y2 - point1.y1);

export default distance;
