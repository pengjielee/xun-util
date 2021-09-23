/**
 * 目标值在数组中出现次数
 *
 * @param  {[Array]}
 * @param  {[type]}
 * @return {[Number]}
 */
const countInArray = (arr, target) =>
  arr.reduce((acct, value) => (value === target ? acct + 1 : acct), 0);

export default countInArray;
