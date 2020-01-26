// setter and getter
class Person {
    private name: string
    private age: number
    constructor(age: number, name: string) {
        this.name = name
        this.age = age
    }
    get getName(): string {
        return this.name
    }
    set setName(name: string) {
        this.name = name
    }
}

let p = new Person(18, `yayxs`)
// console.log(p.name)
