/**
 * 格式化数字
 *
 * @param  {[Number]}
 * @return {[String]}
 */
export const formatNumber = (n) => {
  n = n.toString();
  return n[1] ? n : "0" + n;
};

/**
 * 格式化日期
 *
 * @param  {[Date]}
 * @return {[String]}
 */
export const formatDate = (date) => {
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var day = date.getDate();

  var hour = date.getHours();
  var minute = date.getMinutes();
  var second = date.getSeconds();

  return (
    [year, month, day].map(formatNumber).join("/") +
    " " +
    [hour, minute, second].map(formatNumber).join(":")
  );
};

/**
 * 格式化金额
 *
 * @param  {[Number]}
 * @return {[String]}
 */
export const formatMoney = (num) =>
  num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

const format = {
  number: formatNumber,
  date: formatDate,
  money: formatMoney,
};

export default format;
