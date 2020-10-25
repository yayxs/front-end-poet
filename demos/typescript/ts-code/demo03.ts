/// 可选参数
type PerInfo = string
interface Person {
    name: PerInfo
    age?: number
    sex: PerInfo
    printName(): void
    printAge?(): void
}
// 我实现人类接口
class Me implements Person {
    printName(): void {
        console.log(`xxx`)
    }
    name: string
    sex: string
}

let m = new Me()