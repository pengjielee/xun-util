/**
 * 是否是英文
 *
 * @param  {[String]}
 * @return {[Boolean]}
 */
export const isEnglish = (value) => /[a-zA-Z]+/.test(value);

/**
 * 是否是中文
 *
 * @param  {[String]}
 * @return {[Boolean]}
 */
export const isChinese = (value) =>
  /[\u4E00-\u9FA5|\u9FA6-\u9FEF|\u3400-\u4DB5]+/.test(value);

/**
 * 是否是邮箱
 *
 * @param  {[String]}
 * @return {[Boolean]}
 */
export const isEmail = (value) => /[a-zA-Z\d]+\@[a-zA-Z\.]+/.test(value);

/**
 * 是否是数字
 *
 * @param  {[String]}
 * @return {[Boolean]}
 */
export const isNumber = (value) => /^\d{1,}$/g.test(value);

/**
 * 是否是小数
 *
 * @param  {[String]}
 * @return {[Boolean]}
 */
export const isDecimal = (value) => /^\d+\.\d+$/g.test(value);

/**
 * 是否是大写字母
 *
 * @param  {[String]}
 * @return {[Boolean]}
 */
export const isUppercase = (value) => /^[A-Z]+$/g.test(value);

/**
 * 是否是小写字母
 *
 * @param  {[String]}
 * @return {[Boolean]}
 */
export const isLowercase = (value) => /^[a-z]+$/g.test(value);

/**
 * 是否是身份证号
 *
 * @param  {[String]}
 * @return {[Boolean]}
 */
export const isIDCard = (value) =>
  /(^\d{8}(0\d|10|11|12)([0-2]\d|30|31)\d{3}$)|(^\d{6}(18|19|20)\d{2}(0\d|10|11|12)([0-2]\d|30|31)\d{3}(\d|X|x)$)/g.test(
    value
  );

/**
 * 是否是中文姓名
 *
 * @param  {[String]}
 * @return {[Boolean]}
 */
export const isChineseName = (value) =>
  /^(?:[\u4e00-\u9fa5·]{2,16})$/g.test(value);

/**
 * 是否是英文姓名
 *
 * @param  {[String]}
 * @return {[Boolean]}
 */
export const isEnglishName = (value) =>
  /(^[a-zA-Z]{1}[a-zA-Z\s]{0,20}[a-zA-Z]{1}$)/g.test(value);

/**
 * 是否是座机电话
 *
 * @param  {[String]}
 * @return {[Boolean]}
 */
export const isLandlineTelephone = (value) =>
  /\d{3}-\d{8}|\d{4}-\d{7}/g.test(value);

/**
 * 是否是手机号
 *
 * @param  {[String]}
 * @return {[Boolean]}
 */
export const isMobile = (value) => /1\d{10}/.test(value);

/**
 * 是否是数字和字母
 *
 * @param  {[String]}
 * @return {[Boolean]}
 */
export const isNumberAndLetter = (value) => /^[A-Za-z0-9]+$/g.test(value);

const reg = {
  isEnglish,
  isChinese,
  isEmail,
  isNumber,
  isDecimal,
  isUppercase,
  isLowercase,
  isIDCard,
  isChineseName,
  isEnglishName,
  isLandlineTelephone,
  isMobile,
  isNumberAndLetter,
};

export default reg;
