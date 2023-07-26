function romanToInteger(roman) {
    const romanNumerals = {
      'I': 1,
      'V': 5,
      'X': 10,
      'L': 50,
      'C': 100,
      'D': 500,
      'M': 1000
    };
  
    let integerValue = 0;
  
    for (let i = 0; i < roman.length; i++) {
      const currentSymbolValue = romanNumerals[roman[i]];
      const nextSymbolValue = romanNumerals[roman[i + 1]];
  
      if (nextSymbolValue > currentSymbolValue) {
        integerValue += (nextSymbolValue - currentSymbolValue);
        i++; // Skip the next symbol as it is already accounted for
      } else {
        integerValue += currentSymbolValue;
      }
    }
  
    return integerValue;
  }
  
  // Test the function
  let romanNumeral1 = "IV";
  console.log(romanToInteger(romanNumeral1)); 
  