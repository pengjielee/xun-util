const isType = function (type) {
  return function (obj) {
    return Object.prototype.toString.call(obj) === `[object ${type}]`;
  };
};

export const isArray = isType("Array");
export const isString = isType("String");
export const isObject = isType("Object");

export const isEmpty = (obj) => {
  return Object.keys(obj).length === 0 && obj.constructor === Object;
};

var isValidJSON = (str) => {
  try {
    JSON.parse(str);
    return true;
  } catch (e) {
    return false;
  }
};

var isUndefined = (val) => val === undefined;

const isSymbol = (val) => typeof val === "symbol";

const isPromiseLike = (obj) =>
  obj !== null &&
  (typeof obj === "object" || typeof obj === "function") &&
  typeof obj.then === "function";

const isPrimitive = (val) => Object(val) !== val;

const isObjectLike = (val) => val !== null && typeof val === "object";

const isNumber = (val) => typeof val === "number" && val === val;

const isNull = (val) => val === null;

const isFunction = (val) => typeof val === "function";

var isBoolean = (val) => typeof val === "boolean";
