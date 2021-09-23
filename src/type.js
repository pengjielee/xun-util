const isType = function (type) {
  return function (obj) {
    return Object.prototype.toString.call(obj) === `[object ${type}]`;
  };
};

const isLength = (val) =>
  typeof val == "number" &&
  val > -1 &&
  val % 1 == 0 &&
  val <= Number.MAX_SAFE_INTEGER;

/**
 * 是否是数组
 * @return {Boolean}
 */
export const isArray = Array.isArray || isType("Array");

/**
 * 是否是字符串
 * @return {Boolean}
 */
export const isString = isType("String");

/**
 * 是否是Object
 * @return {Boolean}
 */
export const isPlainObject = isType("Object");

/**
 * 是否是正则
 * @return {Boolean}
 */
export const isRegExp = isType("RegExp");

/**
 * 是否是日期
 * @return {Boolean}
 */
export const isDate = isType("Date");

/**
 * 是否是函数
 * @return {Boolean}
 */
export const isFunction = isType("Function");
// export const isFunction = (val) => typeof val === "function";

/**
 * 是否是Number
 * @return {Boolean}
 */
export const isNumber = (val) => typeof val === "number" && val === val;

/**
 * 是否是Boolean
 * @return {Boolean}
 */
export const isBoolean = (val) => typeof val === "boolean";

/**
 * 是否是symbol
 *
 * @param  {[any]}
 * @return {[Boolean]}
 */
export const isSymbol = (val) => typeof val === "symbol";

/**
 * 是否是除symbol外的原始数据
 *
 * @param  {[any]}
 * @return {[Boolean]}
 */
export const isStatic = (val) => {
  return (
    typeof val === "string" ||
    typeof val === "number" ||
    typeof val === "boolean" ||
    typeof val === "undefined" ||
    val === null
  );
};

/**
 * 是否是基本类型
 *
 * @param  {[type]}
 * @return {[type]}
 */
export const isPrimitive = (val) => isStatic(val) || typeof val === "symbol";
// export const isPrimitive = (val) => Object(val) !== val;

/**
 * 是否是undefined
 *
 * @param  {[type]}
 * @return {[type]}
 */
export const isUndefined = (val) => val === undefined;

/**
 * 是否是null
 *
 * @param  {[type]}
 * @return {[type]}
 */
export const isNull = (val) => val === null;

/**
 * 是否是类数组
 *
 * @param  {[any]}
 * @return {[type]}
 */
export const isArrayLike = (val) =>
  val != null && isLength(val.length) && !isFunction(val);

/**
 * 是否是类Promise
 *
 * @param  {[any]}
 * @return {[Boolean]}
 */
export const isPromiseLike = (val) =>
  val !== null &&
  (typeof val === "object" || typeof val === "function") &&
  typeof val.then === "function";

/**
 * 是否是类对象
 *
 * @param  {[any]}
 * @return {[Boolean]}
 */
export const isObjectLike = (val) => val !== null && typeof val === "object";

/**
 * 是否是合法的JSON
 *
 * @param  {[any]}
 * @return {[Boolean]}
 */
export const isValidJSON = (val) => {
  try {
    JSON.parse(val);
    return true;
  } catch (e) {
    return false;
  }
};

const type = {
  isArray,
  isString,
  isPlainObject,
  isRegExp,
  isDate,
  isFunction,
  isNumber,
  isBoolean,
  isSymbol,
  isStatic,
  isPrimitive,
  isUndefined,
  isNull,
  isArrayLike,
  isPromiseLike,
  isObjectLike,
  isValidJSON,
};

export default type;
