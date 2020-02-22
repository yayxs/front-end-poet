let mysql = require('mysql')
// 配置对象
const config = {
  host: "localhost",
  user: "root",
  password: "123456",
  database: "blog"
};
// 建立连接
let con = mysql.createConnection(config);
con.connect(err=>{
  console.log(err)
});

// 查询user表

const sql = `select * from user`

// 进行查询

con.query(sql,(err,res,info)=>{
    if(err){

    }else{
        console.log(res)
        console.log(info)
    }
})