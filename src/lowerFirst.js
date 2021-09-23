/**
 * 首字母小写
 *
 * @param  {[Array]}
 * @return {[String]}
 */
const lowerFirst = ([first, ...rest]) => first.toLowerCase() + rest.join("");

export default lowerFirst;
