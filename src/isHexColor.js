export default val => {
  if (typeof val !== 'string') return false;

  return /^#(?:[a-f0-9]{6}|[a-f0-9]{3})$/gi.test(val.trim());
};
