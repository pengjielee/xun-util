export const objectToArray = (object) => {
  var arr = [];
  for (let key in object) {
    arr.push({
      value: key,
      label: object[key],
    });
  }
  return arr;
};
