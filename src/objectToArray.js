/**
 * 对象转为数组
 *
 * @param  {[Object]}
 * @return {[Array]}
 */
const objectToArray = (object) => {
  const arr = [];
  for (let key in object) {
    arr.push({
      value: key,
      label: object[key],
    });
  }
  return arr;
};

export default objectToArray;
