import hexToRGB from '../src/hexToRGB';

describe('hexToRGB', () => {
  it('should take a hex color and return its value in rgb form', () => {
    expect(hexToRGB('#03f')).toBe('rgb(0, 51, 255)');
    expect(hexToRGB('#bada55')).toBe('rgb(186, 218, 85)');
  });
  it('should throw an error if the input is not a valid hex color', () => {
    const result = () => {
      hexToRGB('#notvalid');
    };
    expect(result).toThrow(`#notvalid is not a valid hex value.`);
  });
});
