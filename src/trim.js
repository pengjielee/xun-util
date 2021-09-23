/**
 * 去除字符串空格
 *
 * @param  {[String]}，要处理的字符串
 * @param  {[Number]}，type=1去除所有；type=2去除前后；type=3去除前面；type=4去除后面；type默认为1
 * @return {[String]}
 */
const trim = (str, type = 1) => {
  switch (type) {
    case 1:
      return str.replace(/\s/g, ""); //去除所有空格
    case 2:
      return str.replace(/(^\s)|(\s*$)/g, ""); //去除前后空格
    case 3:
      return str.replace(/(^\s)/g, ""); //去除前面空格
    case 4:
      return str.replace(/(\s$)/g, ""); //去除后面空格
    default:
      return str;
  }
};

export default trim;
