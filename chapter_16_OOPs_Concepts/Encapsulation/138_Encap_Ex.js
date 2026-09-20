class Car{
    #engine;

    constructor(name, engineName)
    {
        this.name = name;
        this.#engine = engineName;
    }

    getEngine()
    {
        return this.#engine;
    }

    setEngine(newEngineName)
    {
        this.#engine = newEngineName;
    }
}

let tesla = new Car("Tesla", "VB_8");
console.log(tesla.getEngine());

tesla.setEngine("VB_9");
console.log(tesla.getEngine());
