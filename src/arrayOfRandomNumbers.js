export default (n, max = 1) => {
  if (!n) return [];
  if (typeof max !== 'number' || Number.isNaN(max))
    throw new Error('Second argument must be a valid number');

  return Array.from({ length: n }, () => Math.floor(Math.random() * (max + 1)));
};
