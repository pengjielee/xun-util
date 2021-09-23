/**
 * 字符串截取
 *
 * @param  {[String]}，要截取的字符串
 * @param  {[Number]}，要截取的长度
 * @return {[String]}
 */
const truncateText = (str, length) => {
  if (str.length === 0) {
    return "";
  }
  if (str.length > length) {
    return str.substring(0, length) + "...";
  } else {
    return str;
  }
};

export default truncateText;
