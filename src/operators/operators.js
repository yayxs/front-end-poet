// // 数值分割
// let num = 100_00000
// console.log(num) // 10000000

// let num1 = 0x11_1
// console.log(num1) // 273

// 逻辑操作符-零合并操作符

console.log(null ?? 1) // 1
console.log(undefined ?? 2) // 2
console.log(false ?? 3) // false
console.log(0 ?? 4) // 0
console.log('' ?? 5) // ''

// #
class Person {
  #sex = 0
  printSex() {
    console.log(this.#sex)
  }
}
const vast = new Person()

vast.printSex()
// vast.#sex // not to do

// 位运算符 >>
// 位运算符 >>>
// 位运算符 |
// 位运算符 &
// 双位运算符 ~~


let x = 0

console.log(++x) // 1
console.log(x) // 1

console.log(x++) // 0

console.log(x) // 1

console.log(2 ** 2)

let num = 10

console.log(num % 3) // 10 / 3 = 3 …… 1

let list = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

list.forEach((curr, index) => {
  console.log(2 ** curr)
})

console.log(~9)
console.log(~15)

// 1001
console.log(9 << 2) // 36

console.log(9 >> 2) // 2
console.log(-9 >> 2) // -3

console.log(Math.abs(-3) % 2)

console.log(!true)
