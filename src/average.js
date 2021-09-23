/**
 * 计算一个number数组的平均值
 *
 * @param  {[Array]}
 * @return {[Bumber]}
 */
const average = (nums) => nums.reduce((acc, val) => acc + val, 0) / nums.length;

export default average;
