let order = new Promise( function (resolve, reject)
{
    let foodReady = true;
    if(foodReady)
    {
        resolve("Food is Delivered");
    }
    else
    {
        reject("Food is Not Delivered");
    }
})
console.log(order);