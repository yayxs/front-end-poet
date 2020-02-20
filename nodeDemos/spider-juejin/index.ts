// 引入axios
import axios from "axios";

// 异步获取数据
async function getEntryBySelf(): Promise<any> {
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
async function handleData(entrylist: Array<object>) {
  const res = await getEntryBySelf();
  // 循环处理数据
  res.forEach((item, index) => {
    // 收藏量
    let collectionCount: number = item.collectionCount;
    // 评论数
    let commentsCount: number = item.commentsCount;
    // 文章的主页地址
    let originalUrl:string = item.originalUrl
    // 创建时间
    let createdAt:string = item.createdAt
    // 封面图
    let screenshot:string = item.screenshot
    // 文章的内容
    let content:string
  });
}
