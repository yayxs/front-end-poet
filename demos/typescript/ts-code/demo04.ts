// 匿名函数接口

interface Person {
    (num: number): void
}

let printNum: Person;

printNum = (num: number) => {
    console.log(num)
}