/**
 * 将属性拷贝到目标对象
 *
 * @param  {[Object]}
 * @param  {[Object]}
 * @return {[Object]}
 */
const extend = (from, to = {}) => {
  for (let key in from) {
    if (typeof from[key] === "object") {
      to[key] = Array.isArray(from[key]) ? [] : {};
      extend(from[key], to[key]);
    } else {
      to[key] = from[key];
    }
  }
  return to;
};

export default extend;
