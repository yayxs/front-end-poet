var myPay = function () {
    // 实现接口中的pay()
    doSomething: (function () {
        console.log("\u5B9E\u73B0\u652F\u4ED8\u52A8\u4F5C");
    });
};
// 定义不同的类来实现接口
var WxPay = /** @class */ (function () {
    function WxPay() {
    }
    WxPay.prototype.doSomething = function () {
        console.log("\u6211\u662F\u5FAE\u4FE1\u652F\u4ED8");
    };
    return WxPay;
}());
var AlPay = /** @class */ (function () {
    function AlPay() {
    }
    AlPay.prototype.doSomething = function () {
        console.log("\u6211\u662F\u652F\u4ED8\u5B9D\u652F\u4ED8");
    };
    return AlPay;
}());
var weixin_pay = new WxPay();
var Ali_pay = new AlPay();
