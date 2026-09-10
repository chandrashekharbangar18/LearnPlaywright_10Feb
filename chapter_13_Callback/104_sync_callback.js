// 1. Define the callback function
function greet(name) {
  console.log(`Hello, ${name}!`);
}

// 2. Define the main function that accepts a callback
function processUser(callback) {
  const name = "Alice";
  
  console.log("Processing start...");
  callback(name); // The callback runs synchronously right here
  console.log("Processing end.");
}

// 3. Pass 'greet' into 'processUser'
processUser(greet);

console.log("---------------");

// ex2
// 1. Define the callback function (what to do with the food)
function eatFood(foodItem) {
  console.log(`🍔 Eating the ${foodItem}! Yum!`);
}

// 2. Define the main function that accepts the callback
function orderFoodAtCounter(foodItem, successCallback) {
  console.log("1. Ordering food at the counter...");
  
  // The program pauses here until this callback finishes executing
  successCallback(foodItem); 
  
  console.log("3. Finally walking away from the counter.");
}

// 3. Run the code
orderFoodAtCounter("Burger", eatFood);