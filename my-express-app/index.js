const express = require("express");
const app = express();

//引入multer
const multer = require("multer");
// 引入path和fs模块

const path = require("path");
const fs = require("fs");
//注册一个对象，dest里放的是上传的文件存储的位置，可以在当前目录下，建立一个static目录，上传的文件都放在这里
const upload = multer({ dest: "./static/" });

//使用中间件，没有挂载路径，应用的每个请求都会执行该中间件。any表示接受一切，具体参考文档。
app.use(upload.any());

//在req.files中获取文件数据
app.post("/", function(req, res) {
  console.log(req.files);
  let tempFiles = req.files;
  let newPaths = format2StaticPath(tempFiles);
  console.log(newPaths);
  //重命名
  fs.rename(req.files[0].path, newPaths[0], function(err) {
    if (err) {
      res.send("上传失败");
    } else {
      res.send("上传成功");
    }
  });
});

/**
 *
 * @param {*} files
 */
function format2StaticPath(files) {
  return files.map(item => {
    return `${item.path}${path.extname(item.originalname)}`;
  });
}


app.listen(3000);
