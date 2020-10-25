var btn = document.querySelector("#btn");
var number1Dom = document.querySelector("#number1");
var number2Dom = document.querySelector("#number2");
var sum = function(a, b) {
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  } else {
    return +a + +b;
  }
};
var evtHandler = function() {
  var val1 = number1Dom.value;
  var val2 = number2Dom.value;
  console.log(sum(+val1, +val2));
};
btn.addEventListener("click", evtHandler);
