
/**
 * @description 爬取自我发表的文章
 * @author yayxs
 */
// 引入axios
let axios = require('axios')
// 引入mysql
let mysql = require(mysql)
// 引入爬虫辅助
const cheerio = require('cheerio');
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
async function handleData() {
  const res = await getEntryBySelf();
  console.log(res)
  // 循环处理数据
  res.forEach((item, index) => {
    // 收藏量
    let collectionCount = item.collectionCount;
    // 评论数
    let commentsCount = item.commentsCount;
    // 文章的主页地址
    let originalUrl = item.originalUrl
    // 创建时间
    let createdAt = item.createdAt
    // 封面图
    let screenshot = item.screenshot
    // 文章的内容
    let content = item.content;
    // 文章的标题
    let titlte = item.titlte;
    // 文章的分类
    let category = item.category;
    // 文章的浏览量
    let viewsCount = item.viewsCount
    // 其他信息
    let summaryInfo = item.summaryInfo
  });
}

handleData()