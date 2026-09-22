// 1. Define interfaces for user data

// Define the interface
interface User {
    id: number;
    username: string;
    email: string;
}

// Use the interface
const alice: User = {
    id: 1,
    username: "alice_dev",
    email: "alice@example.com"
};

console.log(alice.username); // Output: alice_dev

console.log("-------------------------------------------------");

// 2. Create interfaces with optional properties

interface UserWithProfile {
    id: number;
    username: string;
    phoneNumber?: string; // Optional property
    age?: number;         // Optional property
}

// Valid object without optional properties
const bob: UserWithProfile = {
    id: 2,
    username: "bob_coder"
};

// Valid object with optional properties
const charlie: UserWithProfile = {
    id: 3,
    username: "charlie_pro",
    age: 25
};

console.log("-------------------------------------------------");

// 3. Extend interfaces for inheritance

interface BasicUser {
    id: number;
    username: string;
}

// AdminUser inherits everything from BasicUser and adds an extra field
interface AdminUser extends BasicUser {
    adminRole: string;
}

const superUser: AdminUser = {
    id: 99,
    username: "system_admin",
    adminRole: "SuperAdmin" // Added property
};

console.log("-------------------------------------------------");

// 4. Implement interfaces in classes

interface Loggable {
    login(): void;
}

// Class must contain the login method to satisfy the interface
class Member implements Loggable {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    login(): void {
        console.log(this.name + " has successfully logged in!");
    }
}

const newMember = new Member("Diana");
newMember.login(); // Output: Diana has successfully logged in!