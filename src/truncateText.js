export const truncateText = (str, length) => {
  if (str.length === 0) {
    return "";
  }
  if (str.length > length) {
    return str.substr(0, length) + "...";
  } else {
    return str;
  }
};
