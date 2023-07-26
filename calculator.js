function calculator(num1, num2, operator) {
    switch (operator) {
      case '+':
        return num1 + num2;
      case '-':
        return num1 - num2;
      case '*':
        return num1 * num2;
      case '/':
        if (num2 === 0) {
          return "Error: Cannot divide by zero.";
        }
        return num1 / num2;
      default:
        return "Error: Invalid operator.";
    }
  }
  
  // Test the calculator function
  let number1 = 10;
  let number2 = 5;

  
  let operation = '+';
  let result = calculator(number1, number2, operation);
  console.log("Result:", result); // Output: 15
  
  operation = '-';
  result = calculator(number1, number2, operation);
  console.log("Result:", result); // Output: 5
  
  operation = '*';
  result = calculator(number1, number2, operation);
  console.log("Result:", result); // Output: 50
  
  operation = '/';
  result = calculator(number1, number2, operation);
  console.log("Result:", result); // Output: 2
  
  operation = '/';
  number2 = 0;
  result = calculator(number1, number2, operation);
  console.log(result); // Output: Error: Cannot divide by zero.
  
  operation = '%';
  result = calculator(number1, number2, operation);
  console.log(result); // Output: Error: Invalid operator.
  