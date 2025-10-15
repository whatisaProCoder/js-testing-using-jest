import { capitalize, reverseString, calculator, caesarCipher, analyseArray } from './functions'

test('capitalize the first character of a string', () => {
  expect(capitalize('hello world')).toBe('Hello world')
  expect(capitalize('javascript')).toBe('Javascript')
  expect(capitalize('linux')).toBe('Linux')
})

test('reverse the given string', () => {
  expect(reverseString('Hello')).toBe('olleH')
  expect(reverseString('World')).toBe('dlroW')
  expect(reverseString('Linux')).toBe('xuniL')
})

calc = calculator()

test('add function working correctly', () => {
  expect(calc.add(2, 4)).toBe(6)
  expect(calc.add(5, 4)).toBe(9)
  expect(calc.add(1, 2)).toBe(3)
})

test('subtract function working correctly', () => {
  expect(calc.subtract(4, 2)).toBe(2)
  expect(calc.subtract(5, 4)).toBe(1)
  expect(calc.subtract(1, 2)).toBe(-1)
})


test('divide function working correctly', () => {
  expect(calc.divide(4, 2)).toBe(2)
  expect(calc.divide(5, 1)).toBe(5)
  expect(calc.divide(1, 2)).toBe(0.5)
})


test('multiply function working correctly', () => {
  expect(calc.multiply(4, 2)).toBe(8)
  expect(calc.multiply(5, 4)).toBe(20)
  expect(calc.multiply(1, 2)).toBe(2)
})

test('caesarCipher -> shift from z to a', () => {
  expect(caesarCipher('xyz', 3)).toBe('abc')
})


test('caesarCipher -> shifted lettercase should follow the original lettercase', () => {
  expect(caesarCipher('HeLLo', 3)).toBe('KhOOr')
})

test('caesarCipher -> punctuation, spaces, and other non-alphabetical characters should remain unchanged', () => {
  expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!')
})

test('analyseArray -> checking average of array', () => {
  expect(analyseArray([1, 2, 3, 4, 5]).average).toBe(3)
})

test('analyseArray -> checking max of array', () => {
  expect(analyseArray([2, 7, 4, 2, 5]).max).toBe(7)
})


test('analyseArray -> checking min of array', () => {
  expect(analyseArray([2, 7, 4, 2, 5]).min).toBe(2)
})


test('analyseArray -> checking sum of array', () => {
  expect(analyseArray([2, 7, 4, 2, 5]).sum).toBe(20)
})
