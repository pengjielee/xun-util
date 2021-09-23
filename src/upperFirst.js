/**
 * 首字母大写
 *
 * @param  {[Array]}，接受数组形式
 * @return {[String]}，返回转换后的字符串
 */
const upperFirst = ([first, ...rest]) => first.toUpperCase() + rest.join("");

export default upperFirst;
