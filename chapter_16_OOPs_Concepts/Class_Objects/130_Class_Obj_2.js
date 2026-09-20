class testName {

    constructor(name, status, priority)
    {
        this.name = name;
        this.status = status;
        this.priority = priority;
    }

    display()
    {
        console.log(this.name, "-->", this.status, "-->", this.priority);
    }
}

let loginTest = new testName("Login Test", "Pass", "High");
loginTest.display();