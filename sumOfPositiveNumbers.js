function sumOfPositiveNumbers(arr) {
    let sum = 0;
    for (let num of arr) {
      if (num > 0) {
        sum += num;
      }
    }
    return sum;
  }
  
  // Test the function
  let inputArray = [2, -5, 10, -3, 7];
  let result = sumOfPositiveNumbers(inputArray);
  console.log("Sum of positive numbers:", result); 
  