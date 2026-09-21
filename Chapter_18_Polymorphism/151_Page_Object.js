class BasePage {
    verify() {
        console.log("Verifying base page");
    }
}

class LoginPage extends BasePage {
    verify() {
        console.log("Verify: username field exists");
        console.log("Verify: password field exists");
        console.log("Verify: login button is visible");
    }
}

class DashboardPage extends BasePage {
    verify() {
        console.log("Verify: navigation menu is loaded");
        console.log("Verify: user profile details are visible");
        console.log("Verify: main metrics charts are displayed");
    }
}

class CartPage extends BasePage {
    verify() {
        console.log("Verify: items list is displayed");
        console.log("Verify: price breakdown is accurate");
        console.log("Verify: proceed to checkout button is enabled");
    }
}

// Store page objects inside an array
let pages = [new LoginPage(), new DashboardPage(), new CartPage()];

// Execute the verifications using a standard for loop
for (let i = 0; i < pages.length; i++) {
    pages[i].verify(); // Polymorphism - same function name, different implementation

    console.log("--------------------------------------------------");
}