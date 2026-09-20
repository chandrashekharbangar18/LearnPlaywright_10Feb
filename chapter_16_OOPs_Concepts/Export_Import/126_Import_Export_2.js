import { BASE_URL, formatTestName } from "./utils.js";
import { BASEURL, formatUpperCaseString } from "./testutil.js";

//  same variable cannot be imported from two different files, it will throw an error

//console.log(BASEURL);  // error --> because which BASEURL to use, from utils.js or testutil.js

// to overcome this issue, we can use aliasing while importing the variable
import { BASE_URL as STAGING_BASE_URL } from "./utils.js";
import { BASEURL as VWO_BASE_URL } from "./testutil.js";

console.log(STAGING_BASE_URL);
console.log(VWO_BASE_URL);

let res = formatTestName("Login");
console.log(res);