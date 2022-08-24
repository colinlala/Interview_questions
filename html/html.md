## html5新特性

- 语义化更好的标签元素
    - article、aside、header、footer、figure、section、nav
    - video、audio、canvas...
- 新增的API
    - **Canvas**：首先获取canvas元素的上下文对象，然后使用该上下文对象中的绘图功能进行绘制。
    - **SVG**：SVG是html5的另一项图形功能，是一种标准的矢量图形
    - **音频和视频**：2大好处,一是作为浏览器原生支持的功能，新的audio和video元素无需安装；二是媒体元素向web页面提供了通用、集成和可脚本化控制的API。
    - **Geolocation**：可以请求用户共享他们的位置
    - **XMLHttpRequest Level2**：改进了跨源XMLHttpRequest和进度事件，XMLHttpRequest Level2通过CORS实现了跨源XMLHttpRequest。
    - **WebSockets**：要连接远程主机，只需新建一个WebSocket实例，提供希望连接的对端URL。
    - **Web Storage API**：sessionStorage(保存在session中，浏览器关闭，数据消失)、localStorage(保存在客户端本地，除非手动删除，否则一直保存)

## disabled 和 readonly 的区别？

- readonly：元素的只读属性，可以**防止用户对值进行修改**。 但用户仍然可以使用 tab 键切换到该字段，还可以选中或拷贝其文本。 在表单组件 input 中使用 readonly，内容会随着表单提交。

- disabled：禁用属性，**使元素无法使用和无法操作**，无法被选中。 在表单组件 input 中使用 disabled，内容不会再随着表单提交。

- **二者都可以通过 js 修改其值，从而恢复编辑状态和被选中能力。**

## 常用的 meta 标签有哪些？

- 搜索引擎，用于禁止搜索引擎索引本页内容，谷歌、必应、雅虎都支持的 meta robots 标签
    - noindex：不索引本页面。
    - nofollow：不跟踪本页面上的链接。
    - nosnippet：不在搜索结果中显示说明文字。
    - noarchive：不显示快照。
    - noodp：不使用开放目录中的标题和说明。
    ```html
    <meta name="robots" content="noindex,nofollow"/>
    ```

```html
<!-- 关键词，填写网页关键词，优化SEO的重要标签 -->
<meta name="keywords" content="请输入网页关键字，例如：程序员;写代码;高薪;加班严重"/>

<!-- 声明优先使用的浏览器，例如下面是优先使用的是edge和chrome -->
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>

<!-- 网页概述，优化SEO的重要标签 -->
<meta name="description" content="请输入网页概述，例如：知识社区，前端技术"/>
```

## 手写获取日期
```js
function getDateTime() {
    let data = new Date(),
        year = data.getFullYear(),
        month = data.getMonth() + 1,
        day = data.getDate(),
        hour = data.getHours(),
        min = data.getMinutes(),
        second = data.getSeconds();

    // 当月、日、时、分、秒数字小于10时，补0。
    if (month < 10) {
        month = "0" + month;
    }
    if (day < 10) {
        day = "0" + day;
    }
    if (hour < 10) {
        hour = "0" + hour;
    }
    if (min < 10) {
        min = "0" + min;
    }
    if (second < 10) {
        second = "0" + second;
    }

    return (
        year + "-" + month + "-" + day + " " + hour + ":" + min + ":" + second
    );
}
```

## html5新增元素

- header、footer、video、audio、aside、article、section
- progress。 HTML中的 progress 元素用来显示一项任务的完成进度。
- dialog。 HTML dialog 元素表示一个对话框或其他交互式组件
- canvas。 canvas 元素可被用来通过 JavaScript绘制图形及图形动画。

## 如何优化重绘、重排

- 减少不必要的 DOM，嵌套
- 动画降帧数（优化动画）
- 避免使用不必要且复杂的 CSS 选择器（尤其是后代选择器），耗用更多的 CPU 
- 分离读写操作
- 样式集中改变
- position属性为absolute或fixed
- 不要使用table布局，table中某个元素旦触发了reflow，那么整个table的元素都会触发reflow

## 网页生成过程

1. HTML被HTML解析器解析成DOM 树
2. css则被css解析器解析成CSSOM 树
3. 结合DOM树和CSSOM树，生成一棵渲染树(Render Tree)
- （这两步合起来，就是我们通常所说的**渲染**）：
4. 生成布局（flow），即将所有渲染树的所有节点进行平面合成
5. 将布局绘制（paint）在屏幕上