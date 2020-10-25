var Beauty = (function () {
    function Beauty(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = "" + firstName + lastName;
    }
    return Beauty;
}());
function genGirl(person) {
    return "hi " + person.firstName + person.lastName;
}
var beautyGirl = new Beauty("赵", "铁柱子");
document.body.textContent = genGirl(beautyGirl);
//# sourceMappingURL=file-one.js.map