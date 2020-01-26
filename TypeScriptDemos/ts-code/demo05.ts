// 类型断言
let x: any = `hello`
let res = (<string>x).substring(0, 1)
console.log(res)
// 接口

interface Person {
    name: string
    age: number
}

let me = {} as Person
me.name = `yayxs`
me.age = 18

let you = <Person>{
    name: `xuehua`,
    age: 17
}