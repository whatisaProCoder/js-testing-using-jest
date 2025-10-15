# JavaScript Testing with Jest

A beginner-friendly practice project for learning JavaScript testing using Jest, part of [The Odin Project's JavaScript Path - Testing Practice](https://www.theodinproject.com/lessons/node-path-javascript-testing-practice).

## 📚 What This Project Does

This project demonstrates how to write and run tests for common JavaScript functions using the Jest testing framework. It includes five different functions with comprehensive test coverage:

1. **capitalize** - Capitalizes the first character of a string
2. **reverseString** - Reverses a given string
3. **calculator** - Provides basic arithmetic operations (add, subtract, divide, multiply)
4. **caesarCipher** - Shifts characters by a given factor (encryption technique)
5. **analyseArray** - Analyzes an array and returns average, min, max, and sum

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) installed on your computer
- Basic knowledge of JavaScript

### Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/whatisaProCoder/js-testing-using-jest.git
   ```

2. Navigate to the project folder:

   ```bash
   cd js-testing-using-jest
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

### Running Tests

To run all tests:

```bash
npm test
```

You should see output showing all tests passing ✓

## 📖 Understanding the Code

### Functions (`functions.js`)

#### 1. capitalize(string)

```javascript
capitalize("hello world"); // Returns: 'Hello world'
```

#### 2. reverseString(string)

```javascript
reverseString("Hello"); // Returns: 'olleH'
```

#### 3. calculator()

Returns an object with four methods:

```javascript
const calc = calculator();
calc.add(2, 4); // Returns: 6
calc.subtract(5, 3); // Returns: 2
calc.divide(10, 2); // Returns: 5
calc.multiply(3, 4); // Returns: 12
```

#### 4. caesarCipher(string, shiftFactor)

Shifts each letter by the shift factor while preserving:

- Letter case (uppercase stays uppercase)
- Non-alphabetical characters (spaces, punctuation)
- Wraps from 'z' to 'a'

```javascript
caesarCipher("Hello, World!", 3); // Returns: 'Khoor, Zruog!'
```

#### 5. analyseArray(array)

Returns an object with statistics:

```javascript
analyseArray([1, 2, 3, 4, 5]);
// Returns: { average: 3, sum: 15, max: 5, min: 1 }
```

### Tests (`functions.test.js`)

Each function has multiple test cases to ensure it works correctly in different scenarios. Tests use Jest's `expect()` and `toBe()` matchers.

**Example test:**

```javascript
test("capitalize the first character of a string", () => {
  expect(capitalize("hello world")).toBe("Hello world");
});
```

## 🛠️ Technologies Used

- **Jest** - JavaScript testing framework
- **Babel** - JavaScript compiler (for ES6 module support)
- **Node.js** - JavaScript runtime

## 📝 What I Learned

- How to set up Jest in a JavaScript project
- Writing test cases using Jest's syntax
- Test-Driven Development (TDD) principles
- Using ES6 modules with Jest and Babel
- Testing different types of functions (pure functions, factory functions)

## 👤 Author

**Pritam Debnath**

---

_Part of The Odin Project's JavaScript curriculum - [Testing Practice Lesson](https://www.theodinproject.com/lessons/node-path-javascript-testing-practice)_
