export const trim = (str, type = 1) => {
  if (type && type !== 1 && type !== 2 && type !== 3 && type !== 4) {
    return;
  }
  switch (type) {
    case 1:
      return str.replace(/\s/g, ""); //所有空格
    case 2:
      return str.replace(/(^\s)|(\s*$)/g, ""); //前后空格
    case 3:
      return str.replace(/(^\s)/g, ""); //前空格
    case 4:
      return str.replace(/(\s$)/g, ""); //后空格
    default:
      return str;
  }
};
