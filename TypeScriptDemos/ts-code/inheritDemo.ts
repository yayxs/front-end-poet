/// 继承Demo
class Person {
    // 数据-属性
    name: string
    age: number
    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }
    // 行为-方法
    sayHi() {
        console.log(`HI`)
    }
}

// 继承Person
class Programmer extends Person {
    sayNo() {
        console.log(`NO`)
    }
    sayHi() {
        // console.log(`en~~~`)
        super.sayHi()
    }
}

let p = new Programmer(`yayxs`, 18)

p.sayHi()