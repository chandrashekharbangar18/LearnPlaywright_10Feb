class BaseTest {
    setup() {
        console.log("Base: open browser");
    }

    teardown() 
    {
        console.log("Base: close browser");
    }
}

class uTest extends BaseTest {
    
    setup() 
    {
        super.setup();  // uTest will help you to call your parent fun .super() - constructor
                        // super.fName() - call the function
      
        console.log("UI: Maximize window");
    }

    teardown()
    {
        console.log("UI: Take screenshot");
        super.teardown();
    }
}
 
let test = new uTest();
test.setup();
console.log("-----------");
test.teardown();