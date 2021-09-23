/**
 * 扁平化对象
 *
 * @param  {[Object]}
 * @param  {[String]}
 * @return {[Object]}
 */
const flatObject = (obj, prefix = "") =>
  Object.keys(obj).reduce((accu, k) => {
    const prev = prefix.length ? prefix + "." : "";
    if (typeof obj[k] === "object") {
      Object.assign(accu, flatObject(obj[k], prev + k));
    } else {
      accu[prev + k] = obj[k];
    }
    return accu;
  }, {});

export default flatObject;
