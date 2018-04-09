import arrayOfRandomNumbers from '../src/arrayOfRandomNumbers';

describe('arrayOfRandomNumbers', () => {
  it('should create a new array of n length', () => {
    expect(arrayOfRandomNumbers(10, 4)).toHaveLength(10);
  });

  it('should return an empty array if a falsey value, invalid value, no value, or a value less than 1 is provided for the array length', () => {
    expect(arrayOfRandomNumbers(-1)).toEqual([]);
  });

  it('should return an array where all values are non-NaN numbers', () => {
    expect(
      arrayOfRandomNumbers(5, 3).every(val => typeof val === 'number')
    ).toBe(true);
  });

  it('should throw in error if `max` value is not a valid number', () => {
    const result = () => {
      arrayOfRandomNumbers(5, NaN);
    };

    expect(result).toThrowError('Second argument must be a valid number');
  });
});
