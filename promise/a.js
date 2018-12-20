class ClassA {
    
    constructor(name) {
        // 属性
        this.name = name
    }

    // 不支持真正的私有，可以加_等前缀以区分
    private_Fun() {

    }

    // 实例方法
    sayHi() {
        alert(this.name + ":Hi!");
    }

    // 静态方法
    static aStaticFun() {
        alert("AStaticFun...")
    }
}
export  {ClassA};

