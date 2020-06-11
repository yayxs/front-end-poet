// 接口
interface HasName {
    name: string
    printName(name: string): void
}
// 定义对象
const obj = {
    name: `yayxs`,
    printName: (name: string) => {
        console.log(name)
    }
}
// 定义方法

const sayName = (o: HasName) => {
    console.log(`my name is ${o.name}`)
    o.printName(o.name)
}

sayName(obj)