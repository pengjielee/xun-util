/**
 * 判断一个元素是否有某个类名
 *
 * @param  {[Element]}
 * @param  {[String]}
 * @return {[Boolean]}
 */
const hasClass = (el, className) => el.classList.contains(className);

export default hasClass;
