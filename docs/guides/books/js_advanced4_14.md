---
title: DOM
---

```javascript
// 获取html
function fetchDom() {
  // 其中document 是文档对象
  const html = document.documentElement;
  const html1 = document.childNodes[0];
  const html2 = document.firstChild;
  console.log(html);
  console.log(html1);
  console.log(document.body);
  console.log(document.doctype);
}
```

```javascript
 <section
      id="box_id"
      class="box_clas"
      title="box_title"
      lang="en"
      dir="box_dir"
      style="width:20px;height:20px;border:1px solid red"
    ></section>
    <script>
      let dom = document.getElementById("box_id");
      console.log(dom);
      console.log(dom.getAttribute("style"));
    </script>
```

## 创建元素

```javascript
const dom = document.createElement("div");
document.body.appendChild(dom);
```

### 文本节点

```javascript
const dom = document.createElement("div");
document.body.appendChild(dom);
const textNode = document.createTextNode("Showe");
dom.appendChild(textNode);
```

```java
 for (let i = 0; i < 1000; i++) {
        const div = document.createElement("div");
        const text = document.createTextNode("${i}");
        div.appendChild(text);
        document.body.appendChild(div);
      }
```

```javascript
const fg = document.createDocumentFragment();
const ul = document.getElementById("ul_id");
for (let i = 0; i < 3; i++) {
  let li = document.createElement("li");
  li.appendChild(document.createTextNode(`${i}`));
  fg.appendChild(li);
}
ul.appendChild(fg);
```
