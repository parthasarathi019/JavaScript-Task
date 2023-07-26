function findSecondSmallest(arr) {
    if (arr.length < 2) {
      return "Array should have at least two elements.";
    }
  
    let smallest = Infinity;
    let secondSmallest = Infinity;
  
    for (let num of arr) {
      if (num < smallest) {
        secondSmallest = smallest;
        smallest = num;
      } else if (num < secondSmallest && num !== smallest) {
        secondSmallest = num;
      }
    }
  
    return secondSmallest;
  }
  
  // Test the function
  let array = [5, 2 , 1, 8, 1, 9, 4, 3];
  let result = findSecondSmallest(array);
  console.log(`Second smallest element: ${result}`); 
  