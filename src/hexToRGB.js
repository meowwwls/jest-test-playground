import isHexColor from './isHexColor';

export default hex => {
  try {
    if (isHexColor(hex)) {
      const cleaned = hex.trim().slice(1);
      const hexToCol = (hexIndx, chars = 2) =>
        parseInt(cleaned.substr(hexIndx, chars), 16);

      // account for shorthand hex e.g., #03f, #bad
      if (cleaned.length === 3) {
        return `rgb(${hexToCol(0, 1) * 17}, ${hexToCol(1, 1) * 17}, ${hexToCol(
          2,
          1
        ) * 17})`;
      }

      return `rgb(${hexToCol(0)}, ${hexToCol(2)}, ${hexToCol(4)})`;
    } else {
      throw new Error(`${hex} is not a valid hex value.`);
    }
  } catch (e) {
    throw e;
  }
};
