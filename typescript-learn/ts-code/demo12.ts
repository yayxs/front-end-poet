// 泛型

function getArr<T>(params: T[]): T[] {
    return params
}
console.log(getArr<number>([22, 1]))

class Person<S, N> {
    private _name: S
    private _age: N
    constructor(name: S, age: N) {
        this._name = name
        this._age = age
    }
    get name(): S {
        return this._name
    }
    get age(): N {
        return this._age
    }
}
let p = new Person<string, number>(`yaxs`, 18)

console.log(p.name)