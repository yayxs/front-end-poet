const path = require("path");
const Koa = require("koa");

const app = new Koa();

app.listen(2022, () => {
  console.log(`[demo] starting at  http://127.0.0.1:2222 `);
});
