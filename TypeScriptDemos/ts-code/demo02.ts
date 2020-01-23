// 定义支付接口
interface Pay {
    doSomething(): void // 支付接口方法
}

const myPay = () => {
    // 实现接口中的pay()
    doSomething: () => {
        console.log(`实现支付动作`)
    }
}

// 定义不同的类来实现接口
class WxPay implements Pay {
    doSomething() {
        console.log(`我是微信支付`)
    }
}
class AlPay implements Pay {
    doSomething() {
        console.log(`我是支付宝支付`)
    }
}

let weixin_pay: Pay = new WxPay()
let Ali_pay: Pay = new AlPay()