// 公共，私有与受保护的修饰符
class Person {
    public name: string
    private age: string
    getName() {
        console.log(this.name)
    }
    setName(name: string) {
        this.name = name
    }
    public sayName() {
        console.log(`my name is ${this.name}`)
    }
    private sayAge() {
        console.log(`my age is ${this.age}`)
    }
}

let p = new Person()
p.setName(`yayxs`)
p.getName()