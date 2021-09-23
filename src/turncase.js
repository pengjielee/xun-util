/**
 * 字符串大小写转换
 *
 * @param  {[String]}，要转换的字符串
 * @param  {[Number]}，type=1全大写；type=2全小写；type=3首字母大写；默认为0不转换
 * @return {[String]}
 */
const turncase = (str, type = 0) => {
  switch (type) {
    case 1:
      return str.toUpperCase();
    case 2:
      return str.toLowerCase();
    case 3:
      return str[0].toUpperCase() + str.substring(1).toLowerCase();
    default:
      return str;
  }
};

export default turncase;
