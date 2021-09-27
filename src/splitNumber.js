/**
 * 使用逗号三位分割数字
 *
 * @param  {[Number]}
 * @return {[String]}
 */
const splitNumber = (number) => {
  const result = [];
  number = parseInt(number, 10);
  const revArr = String(number).split("").reverse(); //整数部分倒序
  revArr.forEach(function (item, index) {
    result.push(item);
    if ((index + 1) % 3 === 0 && index != revArr.length - 1) {
      result.push(",");
    }
  });
  return result.reverse().join("");
};

export default splitNumber;
