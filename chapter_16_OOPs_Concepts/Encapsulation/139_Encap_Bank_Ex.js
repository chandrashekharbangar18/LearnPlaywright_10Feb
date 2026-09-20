class ICICI{
    #balance;

    constructor(name, balance)
    {
        this.name = name;
        this.#balance = balance;
    }

    getBalance()
    {
        return this.#balance;
    }

    setBalance(balance, isCashier)
    {
        if(isCashier)
        {
            this.#balance = balance;
        }
        else
        {
            console.log("Not Allowed");       
        }
    }
}

let cs = new ICICI("Chandrashekhar", 100);
console.log(cs.getBalance());

cs.setBalance(200, false);
console.log(cs.getBalance());
console.log("--------------------");
let bankMgr = new ICICI("Chandrashekhar", 300);
console.log(bankMgr.getBalance());

bankMgr.setBalance(5000, true);
console.log(bankMgr.getBalance());