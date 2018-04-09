import isHexColor from '../src/isHexColor.js';

describe('isHexColor', () => {
  it('should take a string and return a boolean of whether the string is a valid hex color', () => {
    expect(isHexColor('#bad')).toBe(true);
    expect(isHexColor('#bada55')).toBe(true);
    expect(isHexColor('#bad0')).toBe(false);
    expect(isHexColor('red')).toBe(false);
    expect(isHexColor('#bada550202')).toBe(false);
    expect(isHexColor('#fefefg')).toBe(false);
    expect(isHexColor('rgb(10, 10, 10)')).toBe(false);
    expect(isHexColor('hsl(10, 50%, 50%)')).toBe(false);
    expect(isHexColor('')).toBe(false);
  });

  it('should return false for any non-string input', () => {
    expect(isHexColor(10)).toBe(false);
    expect(isHexColor(NaN)).toBe(false);
    expect(isHexColor([])).toBe(false);
    expect(isHexColor({})).toBe(false);
  });
});
