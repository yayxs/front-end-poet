// class Person {
//     protected name: string
//     protected age: number
//     protected constructor(name: string, age: number) {
//         console.log(`${name}----${age}`)
//     }
// }
// let p = new Person()
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.getName = function () {
        return Person._name;
    };
    return Person;
}());
console.log(Person.getName());
