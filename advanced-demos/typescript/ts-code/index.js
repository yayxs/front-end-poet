var _name = "zhangsan";
// console.log(_name)
var a;
a = 123;
var arrString1 = ["yayxs"];
var arrNum = [1, 2, 3];
var tuple;
tuple = ["yayxs", 18, "\u7537\u751F"];
// console.log(`${tuple[0]}是${tuple[2]}，今年${tuple[1]}`)
var addFn = function (a, b) {
    if (b === void 0) { b = 10; }
    return a + b;
};
// const addCon = (a: number, b: number): void => console.log(a + b)
var addABC = function (a, b, c) {
    if (c) {
        return a + b + c;
    }
    else {
        return a + b;
    }
};
var arrList = [1, 2, 3, 4];
// 其中acc为累加器；cur当前值
var reducer = function (acc, cur) { return acc + cur; };
var res = arrList.reduce(reducer, 5);
// console.log(res) // 15
var addFun = function (a) {
    var nums = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        nums[_i - 1] = arguments[_i];
    }
    return nums.reduce(reducer, a);
};
// console.log(addFun(1, 2, 3, 4))
var myInfo;
myInfo = "yayxs";
myInfo = 18;
var myInfoFn = function (info) {
    switch (typeof info) {
        case "number":
            console.log("\u6211\u4ECA\u5E74" + info);
        case "string":
            console.log("\u6211\u7684\u540D\u5B57" + info);
        default:
    }
};
myInfoFn("yayxs");
