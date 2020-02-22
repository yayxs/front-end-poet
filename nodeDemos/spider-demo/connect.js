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
  if(err){
    console.log(`数据库建立失败`)
  }
});

// 查询user_admin表

const sql = `select * from user_admin`



con.query(sql,(err,res,info)=>{
    if(err){

    }else{
        console.log(res)
    }
})

// 创建用户test003

// let iuserSql = "INSERT INTO user_admin (username, password) VALUES ('test003', 'test003')";
// con.query(iuserSql,(err)=>{
//   if(err){
//     console.log(`创建测试用户失败`)
//   }else{
//     console.log(`test003插入成功`)
//   }
// })