// Ex - API Testing
// Basic function
function validateStatusCode (status)
{
    if (status >= 200 && status < 300)
    {
        console.log("Req is Fine");
    }
}
// validateStatusCode(200);
// validateStatusCode(400);

// Fun as expression
const validateStatusCode_Exp = function (status)
{
    if (status >= 200 && status < 300)
    {
        console.log("Req is Fine");
    }
}
// validateStatusCode_Exp(200);
// validateStatusCode_Exp(400);

// Arrow Fun

const validateStatusCode_Arrow = (status) => { 
    if (status >= 200 && status < 300)
    {
        console.log("Req is Fine");
    }
};

validateStatusCode(200);  
validateStatusCode_Exp(200);
validateStatusCode_Arrow(200);