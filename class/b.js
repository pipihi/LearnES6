import {ClassA} from './a.js'

class ClassB extends ClassA{

    constructor() {
        super("Super Man")
    }

    sayHi() {
        alert(this.name + ":Hello!");
    }
}


export  {ClassB};