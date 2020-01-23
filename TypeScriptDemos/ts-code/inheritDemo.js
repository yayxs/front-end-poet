var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/// 继承Demo
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    // 行为-方法
    Person.prototype.sayHi = function () {
        console.log("HI");
    };
    return Person;
}());
// 继承Person
var Programmer = /** @class */ (function (_super) {
    __extends(Programmer, _super);
    function Programmer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Programmer.prototype.sayNo = function () {
        console.log("NO");
    };
    Programmer.prototype.sayHi = function () {
        // console.log(`en~~~`)
        _super.prototype.sayHi.call(this);
    };
    return Programmer;
}(Person));
var p = new Programmer("yayxs", 18);
p.sayHi();
