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

class MyGirlFriend {
    // 定义数据内容
    name: string;
    age: number;
    height: string


    constructor(name: string, age: number, height: string) {
        this.name = name
        this.age = age
        this.height = height
    }
    formatHeight() {
        return `${this.height} cm`
    }
}
// new 对象
let xuehua = new MyGirlFriend(`xuehua`, 20, `172`)

console.log(xuehua.name)
console.log(xuehua.age)
console.log(xuehua.formatHeight())
