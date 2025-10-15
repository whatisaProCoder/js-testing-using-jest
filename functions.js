export function capitalize(string) {
  return string.at(0).toUpperCase() + string.slice(1)
}

export function reverseString(string) {
  string = string.split('')
  for (let i = 0; i < string.length / 2; i++) {
    const temp = string[i]
    string[i] = string[string.length - i - 1]
    string[string.length - i - 1] = temp
  }
  return string.join('')
}

export function calculator() {
  const add = (a, b) => {
    return a + b
  }
  const subtract = (a, b) => {
    return a - b
  }
  const divide = (a, b) => {
    return a / b
  }
  const multiply = (a, b) => {
    return a * b
  }
  return { add, subtract, divide, multiply }
}

function shiftedCharacter(ch, factor) {
  if (ch >= 'A' && ch <= 'Z') {
    const code = ((ch.charCodeAt(0) - 65 + factor) % 26) + 65;
    return String.fromCharCode(code);
  } else if (ch >= 'a' && ch <= 'z') {
    const code = ((ch.charCodeAt(0) - 97 + factor) % 26) + 97;
    return String.fromCharCode(code);
  }
  return ch;
}


export function caesarCipher(string, shiftFactor) {
  let cipheredString = ''
  for (const ch of string) {
    cipheredString += shiftedCharacter(ch, shiftFactor)
  }
  return cipheredString
}

export function analyseArray(array) {
  let average, min = array[0], max = array[0], length = 0

  let sum = 0

  for (const item of array) {
    sum += item
    length += 1
    if (item < min) {
      min = item
    }
    if (item > max) {
      max = item
    }
  }

  average = sum / length

  return { average, sum, max, min }
}