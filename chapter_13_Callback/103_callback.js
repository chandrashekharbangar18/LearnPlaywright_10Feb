// Callback
// Ex1
function placeOrder(item, callback)
{
    console.log(".......Placing the order");
    callback();                                 // fun call
}
 function print()       // fun defn.
 {
    console.log("Normal Fun --> Done with the order...");
 }

 // First way
// placeOrder("Pizza", print); 


// second way - anonymous fun
  placeOrder("Pizza", function(){
    console.log("I am also a fun without name...");
  }); 

  // third way - arrow fun
  placeOrder("Pizza", () => {
    console.log("I am arrow function...");
  }); 
