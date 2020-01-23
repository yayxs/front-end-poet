let _name: string = `zhangsan`
// console.log(_name)
var a: number
a = 123
let arrString1: string[] = [`yayxs`]
let arrNum: Array<number> = [1, 2, 3]

let tuple: [string, number, string]
tuple = [`yayxs`, 18, `男生`]
// console.log(`${tuple[0]}是${tuple[2]}，今年${tuple[1]}`)

const addFn = (a: number, b: number = 10): number => a + b
// const addCon = (a: number, b: number): void => console.log(a + b)

const addABC = (a: number, b: number, c?: number): number => {
    if (c) {
        return a + b + c
    } else {
        return a + b
    }
}

const arrList: Array<number> = [1, 2, 3, 4];
// 其中acc为累加器；cur当前值
const reducer = (acc, cur): number => acc + cur;
let res: number = arrList.reduce(reducer, 5)
// console.log(res) // 15


const addFun = (a: number, ...nums: number[]) => nums.reduce(reducer, a)
// console.log(addFun(1, 2, 3, 4))

let myInfo: any
myInfo = `yayxs`
myInfo = 18

const myInfoFn = (info: any) => {
    switch (typeof info) {
        case `number`:
            console.log(`我今年${info}`)
        case `string`:
            console.log(`我的名字${info}`)
        default:
    }

}

myInfoFn(`yayxs`)