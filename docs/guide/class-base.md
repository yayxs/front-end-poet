```js
class Vast {
  constructor() {
    this.sayName = this.sayName.bind(this) // 绑定this
  }
  sayName(name = `vast`) {
    this.doName(name)
  }
  doName(name) {
    console.log(name)
  }
  static foo() {
    this.bar()
  }
  static bar() {
    console.log('hello')
  }
  bar() {
    console.log('world')
  }
}

const { sayName } = new Vast()
sayName()
Vast.foo() // hello

class Yayxs extends Vast {
  static classMethod() {
    super.foo()
  }
}
Yayxs.foo()
Yayxs.classMethod()
```
