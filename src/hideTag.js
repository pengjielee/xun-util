/**
 * 隐藏所有标签
 *
 * @param  {[Elements]}
 * @return {[void]}
 */
const hideTag = (elements) =>
  [...elements].forEach((e) => (e.style.display = "none"));

export default hideTag;
