/**
 * 获取指定元素的生效样式
 *
 * @param  {[type]}
 * @param  {[type]}
 * @return {[type]}
 */
const getStyle = (el, ruleName) => window.getComputedStyle(el)[ruleName];

export default getStyle;
