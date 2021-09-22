/**
 * 判断数组中的所有元素是否相等
 *
 * @param  {[Array]}
 * @return {[Boolean]}
 */
const arrayAllEqual = (arr) => arr.every((val) => val === arr[0]);

export default arrayAllEqual;
