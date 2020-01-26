interface Person {
    name: string
}
interface Coder {
    age: number
}

class Per implements Person, Coder {
    name: string
    age: number
} 