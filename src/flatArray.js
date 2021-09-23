/**
 * 数组扁平化
 *
 * @param  {[Array]}
 * @return {[Array]}
 */
const flatArray = (arr) => {
  return arr.reduce((prev, curr) => {
    return prev.concat(Array.isArray(curr) ? flat(curr) : curr);
  }, []);
};

export default flatArray;
