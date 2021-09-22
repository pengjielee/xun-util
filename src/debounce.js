export const debounce = (func, wait) => {
  let timer = null;
  return function () {
    let self = this,
      args = arguments;
    timer && clearTimeout(timer);
    timer = setTimeout(function () {
      func.apply(self, args);
    }, wait);
  };
};
