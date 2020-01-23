// 定义对象
var obj = {
    name: "yayxs",
    printName: function (name) {
        console.log(name);
    }
};
// 定义方法
var sayName = function (o) {
    console.log("my name is " + o.name);
    o.printName(o.name);
};
sayName(obj);
