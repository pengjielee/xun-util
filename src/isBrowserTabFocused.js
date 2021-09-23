/**
 * 浏览器页面是否显示
 *
 * @return {[Boolean]}
 */
const isBrowserTabFocused = () => !document.hidden;

export default isBrowserTabFocused;
