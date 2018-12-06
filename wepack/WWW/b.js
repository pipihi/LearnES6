// 依赖导入
import {ClassA} from './a.js'

// 继承
class ClassB extends ClassA{

    constructor() {
        // 调用父类的构造函数
        super("Super Man")
    }
    
    // 方法重写
    sayHi() {
        alert(this.name + ":Hello!");
    }
}

export  {ClassB};


// npm install 