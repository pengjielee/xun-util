/**
 * 将属性拷贝到目标对象
 *
 * @param  {[Object]}
 * @param  {[Object]}
 * @return {[Object]}
 */
const extend = (to, _from) => {
  for (let key in _form) {
    to[key] = _form[key];
  }
  return to;
};

export default extend;
