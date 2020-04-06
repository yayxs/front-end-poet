// 公共，私有与受保护的修饰符
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.getName = function () {
        console.log(this.name);
    };
    Person.prototype.setName = function (name) {
        this.name = name;
    };
    Person.prototype.sayName = function () {
        console.log("my name is " + this.name);
    };
    Person.prototype.sayAge = function () {
        console.log("my age is " + this.age);
    };
    return Person;
}());
var p = new Person();
p.setName("yayxs");
p.getName();
