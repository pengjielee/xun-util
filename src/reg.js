export const isEnglish = (str) => /[a-zA-Z]+/.test(str);

export const isChinese = (str) =>
  /[\u4E00-\u9FA5|\u9FA6-\u9FEF|\u3400-\u4DB5]+/.test(str);

export const isMobile = (str) => /1\d{10}/.test(str);

export const isEmail = (str) => /[a-zA-Z\d]+\@[a-zA-Z\.]+/.test(str);
