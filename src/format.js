export const formatNumber = (n) => {
  n = n.toString();
  return n[1] ? n : "0" + n;
};

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

export const formatPrice = (num) =>
  num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
