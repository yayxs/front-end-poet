// function show(con) {
// }
const show = (con)=>{
  let dom = document.getElementById('app')
  console.log(dom)
  window.document.getElementById("app").innerText = con;
  console.log(`show函数执行`)
}
module.exports = show;
