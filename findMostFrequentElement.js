function findMostFrequentElement(arr) {
    // Create an empty object to store the frequency of each element
    const frequencyCounter = {};
  
    // Iterate through the array and update the frequency counter
    for (let element of arr) {
      frequencyCounter[element] = (frequencyCounter[element] || 0) + 1;
    }
  
    // Find the element with the highest frequency
    let mostFrequentElement;
    let maxFrequency = 0;
    for (let element in frequencyCounter) {
      if (frequencyCounter[element] > maxFrequency) {
        maxFrequency = frequencyCounter[element];
        mostFrequentElement = element;
      }
    }
  
    return mostFrequentElement;
  }
  
  // Test the function
  let inputArray = [5, 2, 5, , 3, 1, 4, 5];
  let result = findMostFrequentElement(inputArray);
  console.log("Most frequent element:", result);
  