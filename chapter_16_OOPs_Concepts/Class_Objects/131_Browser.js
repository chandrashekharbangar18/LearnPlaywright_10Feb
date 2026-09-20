class Browser {

    constructor(name) {
        this.name = name;
        this.isOpen = true;
        console.log(name, "Browser is Opened !!!");
    }

    startBrowser()
    {
        console.log(this.name, " --> ", "Browser is Starting");
    }  

    closeBrowser()
    {
        console.log(this.name, "--> ",  "Browser is Closed");
    }

    startBrowser(b_Name)  // polymorphism --> same method name but different parameters
    {
        console.log(b_Name, "Browser is Starting");
    }
}

let chrome = new Browser("Chrome");
//let firefox = new Browser("Firefox");

console.log(chrome.name, "is Opened -->", chrome.isOpen);
// console.log(firefox.name, "is Opened -->", firefox.isOpen);
 
chrome.startBrowser();
chrome.startBrowser("chrome");
chrome.closeBrowser();
