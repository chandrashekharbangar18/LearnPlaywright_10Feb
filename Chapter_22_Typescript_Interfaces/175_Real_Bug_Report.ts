interface BugReport {
    id: number;
    title: string;
    severity: string;
    stepsToReproduce: string[];
}

function logBug(bug: BugReport): void {
    console.log("BUG Report -->" + bug.id + " [" + bug.severity + "] " + bug.title);
    
    // Using a normal for loop
    for (let i = 0; i < bug.stepsToReproduce.length; i++) {
        let step = bug.stepsToReproduce[i];
        console.log(" " + (i + 1) + ". " + step);
    }
}

logBug({
    id : 1,
    title : "VWO login is not working",
    severity : "High",
    stepsToReproduce : ["Step 1 : Open the app.vwo.com", 
                        "Step 2 : Enter Invalid Credentials",
                        "Step 3 : Verify the error msg"] 
});

logBug({
    id : 2,
    title : "VWO login is not working with valid ID but pwd is invalid",
    severity : "High",
    stepsToReproduce : ["Step 1 : Open the app.vwo.com", 
                        "Step 2 : Enter Invalid Credentials",
                        "Step 3 : Verify the error msg"] 
});