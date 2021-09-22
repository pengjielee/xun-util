export const decapitalize = ([first, ...rest]) =>
  first.toLowerCase() + rest.join("");
