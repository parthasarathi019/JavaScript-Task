function reverseString(inputString) {
  let reversedString = '';
  for (let i = inputString.length - 1; i >= 0; i--) {
    reversedString += inputString[i];
  }
  return reversedString;
}

// Test the function
let inputString = 'Hello, World!';
let reversedString = reverseString(inputString);
console.log(reversedString);
