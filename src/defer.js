/**
 * 函数延迟执行
 *
 * @param  {Function}
 * @param  {[Args]}
 * @return {[void]}
 */
const defer = (fn, ...args) => setTimeout(fn, 1, ...args);

export default defer;
