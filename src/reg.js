/**
 * 是否是英文
 *
 * @param  {[String]}
 * @return {[Boolean]}
 */
export const isEnglish = (str) => /[a-zA-Z]+/.test(str);

/**
 * 是否是中文
 *
 * @param  {[String]}
 * @return {[Boolean]}
 */
export const isChinese = (str) =>
  /[\u4E00-\u9FA5|\u9FA6-\u9FEF|\u3400-\u4DB5]+/.test(str);

/**
 * 是否是手机号
 *
 * @param  {[String]}
 * @return {[Boolean]}
 */
export const isMobile = (str) => /1\d{10}/.test(str);

/**
 * 是否是邮箱
 *
 * @param  {[String]}
 * @return {[Boolean]}
 */
export const isEmail = (str) => /[a-zA-Z\d]+\@[a-zA-Z\.]+/.test(str);

const reg = {
  isEmail,
  isChinese,
  isMobile,
  isEnglish,
};

export default reg;
