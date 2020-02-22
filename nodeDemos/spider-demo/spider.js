/**
 * @description 爬取自我发表的文章
 * @author yayxs
 * @github https://github.com/yayxs
 */
// 引入axios
let axios = require("axios");
// 引入mysql
let mysql = require("mysql");
// 引入爬虫辅助
// const cheerio = require("cheerio"); 暂时先不用

// 连接数据库
// 配置对象
const config = {
  host: "localhost",
  user: "root",
  password: "123456",
  database: "blog"
};
// 建立连接
let con = mysql.createConnection(config);
con.connect(err => {
  if (err) {
    console.log(`数据库建立失败`);
  }
});

// 异步获取数据
async function getEntryBySelf() {
  let reqUrl = `https://timeline-merger-ms.juejin.im/v1/get_entry_by_self?src=web&uid=5cf00b7c6fb9a07eba2c226f&device_id=1580692913721&token=eyJhY2Nlc3NfdG9rZW4iOiJqa3FzYTJaUzB3cTY3VVBoIiwicmVmcmVzaF90b2tlbiI6ImJrcG9LMnAyaUlSUFRvSFUiLCJ0b2tlbl90eXBlIjoibWFjIiwiZXhwaXJlX2luIjoyNTkyMDAwfQ%3D%3D&targetUid=5cf00b7c6fb9a07eba2c226f&type=post&limit=20&order=createdAt`;
  const res = await axios.get(reqUrl);
  const {
    s,
    m,
    d: { total, entrylist }
  } = res.data;
  if (s === 1 && m === "ok") {
    // 请求成功
    return entrylist;
  } else {
    return `reqErr`;
  }
}

// getEntryBySelf();

// 循环处理数据
(async function handleData() {
  const res = await getEntryBySelf();
  // 循环处理数据

  res.forEach((item, index) => {
    // 收藏量
    let collectionCount = item.collectionCount;
    // 评论数
    let commentsCount = item.commentsCount;
    // 文章的主页地址
    let originalUrl = item.originalUrl;
    // 创建时间
    let createdAt = item.createdAt;
    // 封面图
    let screenshot = item.screenshot;
    // 文章的内容
    let content = item.content;
    // 文章的标题
    let title = item.title;
    // 文章的分类
    let category = item.category.name;
    // 文章的浏览量
    let viewsCount = item.viewsCount;
    // 其他信息
    let summaryInfo = item.summaryInfo;
    // 数据入数组
    let arrData = [
      collectionCount,
      commentsCount,
      originalUrl,
      createdAt,
      screenshot,
      content,
      title,
      category,
      viewsCount,
      summaryInfo
    ];
    console.log(arrData)
    // 数据插入数据库
    // let testSql = "INSERT INTO zhuan_lan (collectionCount,commentsCount,originalUrl,createdAt,screenshot,content,titlte,category,viewsCount,summaryInfo) VALUES (21,2121,'212','212','212','212','212','221','2121','212')";
    let iblogSql = 
      "INSERT INTO zhuan_lan (collectionCount,commentsCount,originalUrl,createdAt,screenshot,content,titlte,category,viewsCount,summaryInfo) VALUES (?,?,?,?,?,?,?,?,?,?)";
    // 插入数据
    con.query(iblogSql, arrData, (err, res) => {
      if (err) {
        console.log(err);
      } else {
        console.log(`插入成功`);
      }
    });

    // // 清空测试数据
    // let delSql = "truncate table zhuan_lan"
    // con.query(delSql,(err)=>{
    //   if(err){
    //     console.log(err)
    //   }else{
    //     console.log(`清空数据成功`)
    //   }
    // })
  });
})();
