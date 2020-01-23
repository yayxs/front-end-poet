// class Person {
//     protected name: string
//     protected age: number
//     protected constructor(name: string, age: number) {
//         console.log(`${name}----${age}`)
//     }
// }

// let p = new Person()

class Person {

    public static _name: string;

    public static getName(): string {
        return Person._name
    }
}

console.log(Person.getName())