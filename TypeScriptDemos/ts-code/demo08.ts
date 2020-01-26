// 抽象类

abstract class Person {
    name: string
    constructor(name: string) {
        this.name = name
    }
    sayHi(name: string): void {
        console.log(`hi`)
    }
    // 抽象方法 没有方法体
    abstract work(): void
}

// let p = new Person() err
class Coder extends Person {
    sayHi() {
        console.log(`12131`)
    }
    work() {
        console.log(`i am working`)
    }
}