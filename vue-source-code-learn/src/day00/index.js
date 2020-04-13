// import axios from 'axios'

const axios = require("axios");
class Test {
  str = "";
  constructor() {
    this.getList();
  }
  // get 请求

  async getList() {
    const {
      data: { userId },
    } = await 1
    this.str = userId;
    console.log(`sadadsa`,this.str);
  }
}

let t = new Test();
const res  = t.str
console.log(typeof res)
