/**
 * 生成指定范围的随机整数
 *
 * @param  {[Number]}
 * @param  {[Number]}
 * @return {[Number]}
 */
const random = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export default random;
