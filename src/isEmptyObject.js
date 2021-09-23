/**
 * 判断对象是否空对象
 *
 * @param  {[Object]}
 * @return {[Boolean]}
 */
const isEmptyObject = (obj) => {
  return Object.keys(obj).length === 0 && obj.constructor === Object;
};

export default isEmptyObject;
