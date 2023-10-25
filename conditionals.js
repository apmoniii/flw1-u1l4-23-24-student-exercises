// Scenario:
// You're building an application for an ice cream shop. They want a feature that 
// recommends an ice cream flavor based on the current temperature in Fahrenheit.

// 1. Create a variable named temperature any value between 32 and 68.
let temperature = 40;

// 2. Create a variable named recommendedFlavor. Do not assign a value.
let reccomendedflavor;

// 3. Implement the recommendation logic
// - If the temperature is less than 50, recommend "Hot Chocolate Fudge".
// - If the temperature is between 50 and 68 (inclusive), recommend "Caramel Crunch".
// - If the temperature is greater than 68, recommend "Lemon Sorbet".
if (temperature < 50) {
reccomendedflavor= "hot chocloate fudge";
} else if (temperature >= 50 && temperature <= 68){
  reccomendedflavor= "ribbon crunch";
} else {
  reccomendedflavor= "lemon sorbet";
}

// 4. Console log the recommended flavor.


