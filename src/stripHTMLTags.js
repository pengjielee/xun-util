/**
 * 去除所有html标签
 *
 * @param  {[String]}
 * @return {[String]}
 */
const stripHTMLTags = (str) => str.replace(/<[^>]*>/g, "");

export default stripHTMLTags;
