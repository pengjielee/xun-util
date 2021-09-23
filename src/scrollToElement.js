/**
 * 平滑滚动到指定元素
 *
 * @param  {[Element]}
 * @return {[void]}
 */
const scrollToElement = (element) =>
  document.querySelector(element).scrollIntoView({
    behavior: "smooth",
  });

export default scrollToElement;
