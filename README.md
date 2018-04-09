# Unit Testing Playground

My first time writing unit tests, so they're simple.

Testing is done with [Jest](https://facebook.github.io/jest/)

All source files are in the `src` directory. All test files are in the `tests` directory.

To run the tests:

1.  Clone this repo from the terminal:

    Using SSH:

    ```
    git clone git@github.com:meowwwls/jest-test-playground.git
    ```

    Using HTTPS:

    ```
    git clone https://github.com/meowwwls/jest-test-playground.git
    ```

2.  Change directories to `jest-test-playground`:

    ```
    cd jest-test-playground
    ```

3.  Install dependencies (Jest and Babel since the scripts use ES6+ features):

    ```
    npm install
    ```

4.  To run the tests manually, run:


    ```
    npm test
    ```

    To watch the test and source files for changes and run tests on each save, run:

    ```
    npm run test-watch
    ```

## Tested Functions

### arrayOfRandomNumbers

[**Source file**](./src/arrayOfRandomNumbers.js) | [**Test file**](./tests/arrayOfRandomNumbers.test.js)

**Purpose**: This function creates a new array of a certain length and fills the array with random numbers between 0 and a provided max. (_I first needed this when trying to make Game of Life_.)

`arrayOfRandomNumbers` has two parameters: `n` and `max` where `n` is the length of the array to be created, and `max` is the ceiling of random numbers to generated.

If `max` is not provided, all numbers will be either 0 or 1;

If no arguments are provided, or if `n` is not a valid number, an empty array is returned.

**Example Usage**:

```javascript
arrayOfRandomNumbers(10, 4); // returns something like [4, 1, 0, 4, 4, 3, 2, 0, 1, 2]
arrayOfRandomNumbers(5); // returns something like [0, 0, 1, 0, 1]
arrayOfRandomNumbers(); // returns []
```

### isHexColor

[**Source file**](./src/isHexColor.js) | [**Test file**](./tests/isHexColor.test.js)

**Purpose**: Determine if an input is a valid hex color. Useful especially when trying to convert a hex color to another color format like RGB or HSL.

`isHexColor` has one parameter: `val`.

`val` is expected to be a string. If `val` is not a string, `isHexColor` returns `false`.

Valid hex colors include shorthand hex (_for example_ `#fff` _instead of #ffffff_). A hash (<kbd>#</kbd>) _must_ be at the start of the string, or the function will return `false`;

**Example Usage**:

```javascript
isHexColor('#bad'); // returns true
isHexColor('#a55eee'); // returns true
isHexColor('fff'); // returns false
```

### hexToRGB

[**Source file**](./src/hexToRGB.js) | [**Test file**](./tests/hexToRGB.test.js)

**Purpose**: Take a valid hex color and convert it to RGB format.

`hexToRGB` has one parameter: `hex`. `hex` should be a string, and should be a valid hex color.

If the argument passed is not a valid hex color, the function will throw an error.

**Example Usage**:

```javascript
hexToRGB('#ad45dd'); // returns 'rgb(173, 69, 221)'
hexToRGB('#0ee'); // returns 'rgb(0, 238, 238)'
hexToRGB('red'); // throws the error 'red is not a valid hex value.'
```
