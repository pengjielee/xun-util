/**
 * 获取URL参数
 *
 * @param  {[String]}
 * @param  {[String]}
 * @return {[Object]}
 */
const getQueryParams = (url, devide = "&") => {
  const idx = url.indexOf("?");
  if (idx < 0) {
    return null;
  }
  url = url.slice(url.indexOf("?") + 1);
  const params = {};
  const arr = url.split(devide);
  for (var i = 0; i < arr.length; i++) {
    var keys = arr[i].split("=");
    if (keys[0]) {
      params[keys[0]] = keys[1] || "";
    }
  }
  return params;
};

export default getQueryParams;
