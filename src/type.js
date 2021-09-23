const isType = function (type) {
  return function (obj) {
    return Object.prototype.toString.call(obj) === `[object ${type}]`;
  };
};

export const isArray = isType("Array");
export const isString = isType("String");
export const isObject = isType("Object");

export const isNumber = (val) => typeof val === "number" && val === val;

export const isFunction = (val) => typeof val === "function";

export const isBoolean = (val) => typeof val === "boolean";

export const isValidJSON = (str) => {
  try {
    JSON.parse(str);
    return true;
  } catch (e) {
    return false;
  }
};

export const isSymbol = (val) => typeof val === "symbol";

export const isPromiseLike = (obj) =>
  obj !== null &&
  (typeof obj === "object" || typeof obj === "function") &&
  typeof obj.then === "function";

export const isObjectLike = (val) => val !== null && typeof val === "object";

export const isPrimitive = (val) => Object(val) !== val;

export const isUndefined = (val) => val === undefined;

export const isNull = (val) => val === null;

const type = {
  isBoolean,
  isFunction,
  isNull,
  isNumber,
  isObject,
  isObjectLike,
  isPromiseLike,
  isPrimitive,
  isArray,
  isString,
  isValidJSON,
  isSymbol,
};

export default type;
