/**
 * 每个单词首字母大写
 *
 * @param  {[String]}
 * @return {[String]}
 */
const upperEveryWord = (str) =>
  str.replace(/\b[a-z]/g, (char) => char.toUpperCase());

export default upperEveryWord;
