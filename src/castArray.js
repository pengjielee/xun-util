/**
 * 转为数组
 *
 * @param  {[any]}
 * @return {[Array]}
 */
const castArray = (val) => (Array.isArray(val) ? val : [val]);

export default castArray;
