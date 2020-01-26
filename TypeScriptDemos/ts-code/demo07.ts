// 可索引类型
interface Istr {
    [index: string]: string
}

let myStr: Istr;
myStr = {
    'name': `yayxs`
}
interface Inum {
    [index: number]: string
}
let myNum: Inum
myNum = [`12`]
// console.log(myNum.length) err