/**
 * 生成随机整数
 *
 * @param  {[Number]}
 * @param  {[Number]}
 * @return {[Number]}
 */
const randomInt = (min, max) => {
  switch (arguments.length) {
    case 1:
      return parseInt(Math.random() * min + 1, 10);
    case 2:
      return parseInt(Math.random() * (max - min + 1) + min, 10);
    default:
      return 0;
  }
};

export default randomInt;
