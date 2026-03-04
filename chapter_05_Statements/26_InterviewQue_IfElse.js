// True results in JavaScript: Any non-empty string, any non-zero number, true, and any object.

if("hello")  console.log("String is truthy");  // This is true

if(22)  console.log("Number is truthy");  // This is true

if(true)  console.log("Boolean is truthy");  // This is true

if({})  console.log("Empty object is truthy");  // This is true

if([])  console.log("Empty array is truthy");  // This is true


// False values in JavaScript: "", 0, null, undefined, NaN

if("")  console.log("Won't print : String is false");  // No output

if(0)  console.log("Won't print : Number is false");  // No output

if(1)  console.log("Print number : Number is truthy");  // This is true

if(-1)  console.log("Print number : Number is truthy");  // This is true

if(null)  console.log("Won't print: Null is false");  // No output

if(undefined)  console.log("Won't print: Undefined is false");  // No output

if(NaN)  console.log("Won't print: NaN is false");  // No output

