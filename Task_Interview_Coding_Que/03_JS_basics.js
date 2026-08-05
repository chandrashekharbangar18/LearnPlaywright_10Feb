// Ex1 API valiadation code

let responses = [200, 201, 404, 500, 404, 204, 503];
 let successResCode = responses.filter((value) => value>=200 && value<300);
 console.log(successResCode);

// Ex2 Find the first non-successful response codes
 let firstNonSuccessful = responses.find((value) => value < 200 || value >= 300);
 console.log(firstNonSuccessful);

 // Ex3 Return all unique error codes
 let uniqueErrorCodes = [...new Set(responses.filter((value) => value >= 400))];
 console.log(uniqueErrorCodes);