export const hideTag = (...el) =>
  [...el].forEach((e) => (e.style.display = "none"));
