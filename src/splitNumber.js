export const splitNumber = (number) => {
  var result = [];
  var revArr = String(number).split("").reverse(); //整数部分倒序
  revArr.forEach(function (item, index) {
    result.push(item);
    if ((index + 1) % 3 === 0 && index != revArr.length - 1) {
      result.push(",");
    }
  });
  return result.reverse().join("");
};
