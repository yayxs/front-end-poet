// class MyGirlFriend {
//     // 定义数据内容
//     name: string;
//     age: number;
//     height: string
// }
// // new 对象
// let xuehua = new MyGirlFriend()
// // set 内容
// xuehua.name = `xuehua` // 雪花
// // get 内容
// console.log(xuehua.name)
var MyGirlFriend = /** @class */ (function () {
    function MyGirlFriend(name, age, height) {
        this.name = name;
        this.age = age;
        this.height = height;
    }
    MyGirlFriend.prototype.formatHeight = function () {
        return this.height + " cm";
    };
    return MyGirlFriend;
}());
// new 对象
var xuehua = new MyGirlFriend("xuehua", 20, "172");
console.log(xuehua.name);
console.log(xuehua.age);
console.log(xuehua.formatHeight());
