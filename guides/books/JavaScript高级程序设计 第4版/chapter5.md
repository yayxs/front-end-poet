---
title: 第 5 章　基本引用类型
---

# 第 5 章　基本引用类型

```js
 let now = new Date() //  Wed Nov 25 2020 10:13:13 GMT+0800 (中国标准时间)
      let result1 = Date.parse("November 25, 2020") //1606233600000
      let result2 = Date.parse("11/25/2020") //1606233600000
      let today = new Date(Date.parse("November 25, 2020")) // Wed Nov 25 2020 00:00:00 GMT+0800 (中国标准时间)
      let today1 = new Date("November 25, 2020") // Wed Nov 25 2020 00:00:00 GMT+0800 (中国标准时间)
      let someDay = Date.UTC(2020,10,11,25) //  1605142800000
      let startTime = Date.now() // 1606271306722
      for(let i=0;i<1000;i++){

      }
      let endTime = Date.now()//  1606271306723
      // toLocaleString()和toString()可能只对调试有用，不能用于显示
      let date1 = new Date(2020,10,1) // 2020年11月1
      let date2 = new Date(2020,11,1) // 2020年12月1

      console.log(date1.valueOf()); //  1604160000000
      console.log(date2.valueOf()); //  1604160000000
      console.log(date2>date1); // true
      console.log(now.toDateString()); // Wed Nov 25 2020
      console.log(now.toTimeString()); // 10:35:03 GMT+0800 (中国标准时间)
      console.log(now.toLocaleDateString()); // 2020/11/25
      console.log(now.toLocaleTimeString()); // 上午10:36:07
      console.log(now.toUTCString()); // Wed, 25 Nov 2020 02:36:33 GMT
      // ---------------------------------
      console.log(now.getTime()); // index.vue?6ced:40 1606271916449 和valueof相同
      console.log(now.getFullYear()); // 2020
      console.log(now.getUTCFullYear()); // 2020
      console.log(now.getMonth()); // 10
      console.log(now.getDate()); // 25
      console.log(now.getDay()); // 3
      console.log(now.getHours()); // 10
      console.log(now.getMinutes()); // 42
      console.log(now.getSeconds());// 13
      console.log(now.getMilliseconds());// 266
```

```js
export function parseTime(time, cFormat) {
  if (arguments.length === 0 || !time) {
    return null;
  }
  // 格式化形式
  const format = cFormat || "{y}-{m}-{d} {h}:{i}:{s}";
  console.log(format);
  console.log(cFormat);
  let date;
  if (typeof time === "object") {
    date = time;
  } else {
    if (typeof time === "string") {
      console.log("传进来的是string");
      if (/^[0,9]+$/.test(time)) {
        console.log("走进来", time);
      } else {
        console.log("兼容safari");
        time = time.replace(new RegExp(/-/gm), "/");
      }
    }
    if (typeof time === "number" && time.toString().length === 10) {
      console.log("走进了数值");
      console.log(time * 1000);
    }
    console.log("最终的time", time);
    date = new Date(time);
  }
  date = new Date()
  
  const formatObj = {
      y:date.getFullYear(),
      m:date.getMonth() +1,
      d:date.getDate(),
      h:date.getHours(),
      i:date.getMinutes(),
      s:date.getSeconds(),
      a:date.getDay(),
  };
  console.log(formatObj)
  const time_str = format.replace(/{([ymdhisa])+}/g,(res,key)=>{
    console.log(res)
    const val = formatObj[key]
    if(key === 'a'){
        return ['日','一','二','三','四','五','六'][val]
    }
    return val.toString().padStart(2,'0')
  })

  return time_str
}

```