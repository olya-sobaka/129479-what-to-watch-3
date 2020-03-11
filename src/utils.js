export const extend = (target, source) => {
  return Object.assign({}, target, source);
};

export const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};
