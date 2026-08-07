function retry(testName, maxRetry = 3, delay = 1000)
{
    console.log(`Retry ${testName} upto ${maxRetry} times, ${delay} ms apart`);
}
 retry("Login");
 retry("Checkin", 5);
 retry("Logout", 50, 2000);