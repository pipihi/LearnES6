class ClassA {
    
    constructor(name) {
        this.name = name
    }

    sayHi() {
        alert(this.name + ":Hi!");
    }

    static aStaticFun() {
        alert("AStaticFun...")
    }
}
export  {ClassA};

