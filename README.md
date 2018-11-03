# HTML5

## 移动互联网

- 跨平台
  - PC/Mac/iPhone/Android等主流平台的跨平台语言

- 快速迭代
- 降低成本:H5开发比原生APP开发成本降低一倍
- 导流入口多: H5应用导流非常容易
- 分发效率高：

## Web 改变趋势

- Native APP(开发成本高) -> WebAPP(性能问题) -> Hybrid APP
- PC -> 移动 -> 智慧互联
- AR / VR / 智能硬件

## HTML5 语义化标签

### 结构化标签

- `article` 结构完整且独立的内容部分容器
- `header` 页头、元数据容器
- `nav`  导航链接容器
- `section` 页面板块，定义区域容器
- `asice` 定义页面内容的侧边栏或相关引用容器
- `hgroup` 定义一个区块的相关信息，多个标题容器
- `figure` 定义一组媒体内容以及它们的标题
  - `figcaption` 定义 figure 元素的标题
- `footer` 定义页面附加信息或页脚容器
- `dialog` 定义一个对话框（会话框）类似微信

### 优先级别

1. header/section/aside/article/footer
2. header/section/footer > aside/article/figure/hgroup/nav > div/figcaption

### 多媒体标签

- `video` 定义一个视频
  - `src`
  - `autoplay="autoplay"`
  - `loop="-1"`
  - `controls="controls"`
- `audio` 定义音频内容
- `source` 定义媒体资源
- `canvas` 定义图片
- `embed` 定义外部的可交互的内部或插件，比如 flash

``` html
<audio src="x.mp3" autoplay="autoplay" loop="-1" controls="controls">您的浏览器不支持此标签</audio>

<audio autoplay="autoplay" loop="-1" controls="controls">
  <source src="x.mp3" type="audio/mpeg" />
</audio>

<video  controls="controls" width="1024" height="768">
  <source src="x.mp4" type="video/mp4" />
</video>

<embed src="x.swf" width="1024" height="768">
```

- 定义一段对方

``` html
<dialog>
  <dt>老师</dt>
  <dd>2+2等于?</dd>
  <dt>学生</dt>
  <dd>4</dd>
  <dt>老师</dt>
  <dd>答对了!</dd>
</dialog>
```

### Web 应用标签

- `meter` 状态标签(实时状态显示：气压、气温)
  - 兼容性：Chrome, Opera
- `progres` 状态标签(任务过程：安装、加载)
  - 兼容性：Chrome, Firefox, Opera
- `datalist` input标记定义一个下拉列表，配合 Option
  - 兼容性: Firefox, Opera
- `details` 定义一个元素详细内容，配置 summary
  - 兼容性：Chrome
- `menu` 命令列表（目前所有主流浏览器都不支持）
  - `menuitem` menu命令列表标签(Firefox8.0+支持)
  - `command` 定义一个命令按钮（IE9支持）

``` html
<!-- low 和 high 是安全范围 -->
<meter value="220" min="20" max="380" low="200" high="240" optimum="220"></meter>

<meter value="0.75">75%</meter>

<!-- max最大值，value当前值,span为了向下兼容 -->
<progress max="100" value="76">
  <span>76</span>%
</progress>

<input type="text" list="vaList">
<datalist id="vaList">
  <option value="javascript">Javascript</option>
  <option value="html">html</option>
  <option value="css">css</option>
</datalist>

<details>
  <summary>信息</summary>
  <p>详细信息</p>
</details>


<menu type="toolbar">
  <li>
    <menu lable="File">
      <button type="button">New ...</button>
      <button type="button">Open ...</button>
      <button type="button">Save ...</button>
    </menu>
  </li>
  <li>
    <menu lable="Edit">
      <button type="button">Cut ...</button>
      <button type="button">Copy ...</button>
      <button type="button">Paste ...</button>
    </menu>
  </li>  
</menu>
```

### 其他标签

- `ruby` 定义注释或音标
- `rt` 定义对 ruby 的注释内容文本
- `rp` 告诉那些不支持 ruby 元素的浏览器如何去显示

``` html
<p>我们来
<ruby>夼
  <rt>
    <rp>(</rp>
    Kuang
    <rp>)<rp>
  </rt>
</ruby>
一个话题
</p>
```

- `address` 定义文章或页面作者的详细联系信息
- `mark` 标记的词或句子
- `output` 输出内容
- `keygen` 给表单添加一个公钥
- `time` 定义一个日期/时间，目前所有主流浏览器都不支持
  - `<time datetime="2008-02-14">发布</time>`

``` html

<p>我要吃<mark>牛奶</mark></p>

<!-- oninput事件实时监听文本框的输入变化 -->
<form action="" method=" oninput="totalPrice.value=parseInt(price.value)*parseInt(number.value)">

<input type="range" name="price" id="price" value="" value="5000" />

*<input type="number" id="number" value="1">

=<output name="totalPrice" for="price number"></output>

公钥：<keygen name="security" />
<input type="submit" />
</form>
```

### 删除的标签

- 纯表现的元素：`basefont, big, center, font, s, strike, tt,u`
- 对可用性产生负面影响的元素：`frame, frameset, noframes`
- 产生混淆的元素：`acronym, appplet, isindex, dir`

### 重定义标签

- b : 通常是粗体，没有传递表示重要的意思
- i : 通常是斜体，没有传递表示重要的意思
- dd(标题) : 可以同 detail 与 figure 一同使用，定义包含文本，dialog 也可用
- dd(描述): 可以同 details 与 figure 一同使用，汇总细节，dialog 也可用
- hr : 表示主题结束，而不是水平线，虽然显示相同
- menu : 重新定义用户界面的菜单，配合 command 或者 menuitem 使用
- small : 表示小字体，例如打印注释或者法律条款
- strong : 表示**重要性**而不是强调符号

## 低版本兼容

``` js
<script>
  var cgTag = document.createElement('cg');
  var header = document.createElement('header');
  var article = document.createElement('article');
  var aside = document.createElement('aside');
  var section = document.createElement('section');
  var footer = document.createElement('footer');
</scrpt>
<style>
cg {
  /*自定义标签*/
  header,article,section,aside,footer {display:block}
}
</style>
<header>
</header>
<article>
  <aside></aside>
  <section></section>
</article>
<footer></footer>
<cg></cg>
```

[h5向后兼容插件](./plugin/html5shiv.js)

## Form 新标签

### 新的输入型空间

- `email`: 当输入不是邮箱格式的时候，验证不通过；移动端的键盘会有变化
- `tel`: 电话号码
- `url`: 网页的URL
- `search`: 搜索引擎；chrome 下输入文字后，会多出一个关闭的 X
- `range`: 特定范围内的数值选择器
  - `min、max、step`(步数)
  - 用 JS 来显示当前数值

``` html
<input type="range" step="1" min="0" max="10" value="2" />
```

### 新的输入型空间2

- number: 只能包含数字的输入框
- color: 颜色选择器
- datetime: 显示完整日期
- datetime-local: 显示完整日期，不含时区
- time: 显示时间，不含时区
- date: 显示日期
- week: 显示周
- month: 显示月

### 新的表单特性和函数

- placeholder: 输入框提示信息；密码提示框提示
- autocomplete: 是否保存用户输入值；默认为0，关闭提示选择 off
- autofocus: 指定表单后去输入焦点
- list 和 datalist: 为输入框构造一个选择列表；list 值为 datalist 标签的 id
- required: 此项必填，不能为空
- pattern: 正则验证 pattern="\d{1,5}"
- formaction 在 submit 里定义提交地址

``` html
<form action="http://fqdn.org">
  <input type="submit" value="submit">
  <input type="submit" vlaue="temp" formaction="http://fqdn.com">
</form>
```

### 表单验证

- validity 对象，通过下面的 valid 可以查看验证是否通过，如果 8 种验证都通过返回 true， 1 种验证失败返回 false
  - oText.addEventListener('invalid', function(){}, false);
  - ev.preventDeafult();
  - valueMissing: 输入值为空时
  - typeMismatch: 控件值不满足 pattern 正则
  - patternMismatch: 输入值不满足 pattern 正则
  - tooLong: 超过 maxLength 最大限制
  - rangeUnderflow: 验证的 range 最小值
  - rangeOverflow: 验证的 range 最大值
  - stepMismatch: 验证 range 的当前值是否符合 min、max 及 step 的规则
  - customError 不符合自定义验证
    - setCustomValidity(); 自定义验证

``` html
<form action="http://fqdn.org">
  <input type="text" required id="text" />
  <input type="submit" />
</form>

<script>
var oText = document.getElementById('text');

// 自定义验证
oText.oninput = function(){
  if (this.value == '敏感词') {
    this.setCustomValidity("请不要输入敏感词");
  }
}
oText.addEventListener('invalid', function(){
  
  // false 代表不通过验证
  console.log(this.validity.valid); // false

  console.log(this.validity.valueMissing); // required 时，验证是为空返回 true，否则返回 false
  
  console.log(this.validity.typeMismatch); // 输入的内容与输入类型为不一致时返回 true，否则返回 false

  console.log(this.validity.patternMismatch); // 输入的内容与预期的正则要求不匹配时返回 true，否则返回 false

  console.log(this.validity.tooLong); // 输入的内容超出 maxlength 值配时返回 true，否则返回 false

  console.log(this.validity.customError); // 输入“敏感词”是返回 true, 不符合自定义验证

  ev.preventDefault(); // 阻止提交

}, false);
</script>
```

## HTMl 5 新的选择器

[HTML5 新特性](https://www.caniuse.com/#index)

- querySelector
- querySelectorAll
- getElementsByClassName

``` html
<div id="div1" class="box" title="hello"></div>
<div id="div2" class="box" title="world"></div>
<div id="part" class="box1 box2 box3" title="world"></div>

var oDiv1 = document.querySelector('#div1');

// oDiv2 不是数组集合，只能选择一组中的第一个元素
var oDiv2 = document.querySelector('.box');

// 选择一组元素
var oDiv2 = document.querySelectorAll('.box');

var oDiv3 = document.querySelector('[title=hello]');


// 选择一组元素
var oDiv2 = document.getElementsByClassName('box');

var oPart = document.getElementById('part')
oPart.classList; // 返回类似于数组对象
oPart.classList.add('box4'); // 追加
oPart.classList.remove('box2'); // 删除

oPart.classList.toggle('box2'); // 存在 box2 类名就删除 box2, 否则添加 box2

oDiv.style.background = 'red';

```

### JSOn 的新方法

- parse() 字符串转成 json; 字符串中的属性要严格加上双引号（只能解析 JSON 形式的字符串）
- stringify() 把json转化成字符串；自动把双引号加上
- 新方法与 eval 的区别(可以解析任何字符串变成 JS)
- 新方法的应用；深度克隆新对象
- 如何其他浏览器做到兼容 [json2.js](http://www.json.org)

``` js
var str = 'function show(){console.log(123);}';
eval(str);
show();

var str = 'function show(){console.log(123);}';
JSON.parse(str); // Error

var str = '{name:"hello"}'
var json = JSON.parse(str); // Error, name不是字符串

var str = '{"name":"hello"}'
var json = JSON.parse(str); // OK


var json = {name:'hello'};
var str = JSON.stringify(json);

```

## data 自定义数据

- dataset
  - data-name: dataset.name
  - data-name-first: dataset.nameFirst
- data 数据在 jquery mobile 中有着重要作用

··· js
<div id="part" data-wovert="zan" data-first-name="cg">contnet</div>

var oDiv = document.getElementById('part');
console.log(oDiv.dataset.wovert); // zan
console.log(oDiv.dataset.firstName); // cg
···

## 延迟加载 JS

- JS 的加载会影响后面的内容加载
  - 很多 Browser 采用了并行加载 JS, 但还是会影响其他内容
- HTML 5 的 defer 和 async
  - defer: 延迟加载，会按顺序执行，在 onload 执行前被处罚
  - async: 异步加载，加载完就触发，有顺序问题

- [Labjs 库](https://github.com/getify/LABjs)

``` html
<script src="a.js"></script>
<script src="b.js"></script>
<script src="c.js"></script>

<img src="photo.jpg">
```

所有的 js 代码加载完成之后才能显示内容图片

### 解决方案 1

``` html
<img src="photo.jpg">
<script src="a.js"></script>
<script src="b.js"></script>
<script src="c.js"></script>
</body>
```

### 解决方案 2

``` html
<script src="a.js" defer="defer"></script>
<script src="b.js"  defer="defer"></script>
<script src="c.js"  defer="defer"></script>
<img src="photo.jpg">

```

#### defer

> 延迟脚本的执行

- 定义和用法
  - defer 属性规定是否对脚本执行进行延迟，直到页面加载为止。
  - 有的 javascript 脚本 document.write 方法来创建当前的文档内容，其他脚本就不一定是了。
  - 如果您的脚本不会改变文档的内容，可将 defer 属性加入到 `<script>` 标签中，以便加快处理文档的速度。因为浏览器知道它将能够安全地读取文档的剩余部分而不用执行脚本，它将推迟对脚本的解释，直到文档已经显示给用户为止。

浏览器支持: 只有 `Internet Explorer` 支持 defer 属性

语法: `<script defer="value">`

### 解决方案 3

``` html
<script src="a.js" async="async" defer="defer"></script>
<script src="b.js"  async="async" defer="defer"></script>
<script src="c.js" async="async" defer="defer"></script>
<img src="photo.jpg">
```

async 会与 img 并排加载文件

## 历史管理

- 触发历史管理
  - 通过跳转页面
  - hash
  - pushStates

- onhashchange: 改变 hash 值来管理
- history
  - 服务器下运行
  - pushState: 三个参数；数据标题（都没实现）地址（可选）
  - popstate 事件：读取数据 event.state
  - 注意：网址是虚假的，虚在服务器指定对应页面，不然刷新找不到页面

## 拖放

> draggable: 设置为ture, 元素就可以拖拽了(在 Chrome/Opera 可以拖拽)

### 拖放事件

- 拖拽元素事件：
  - 拖拽元素事件：事件对象为被拖拽元素
    - dragstart: 拖拽钱触发
    - drag 拖拽前、拖拽结束之间，连续触发
    - dragend: 拖拽结束触发

- 目标元素事件：事件对象为目标元素
  - dragenter: 进入目标元素触发，相当于 mouseover
  - dragover: 进入目标、离开目标之间，连续触发
  - dragleave: 离开目标元素触发，相当于 mouseout
  - drop: 在目标元素上释放鼠标触发

- 事件的执行顺序：drop 不触发的时候
  - dragstart -> drag > dragenter > dragover > dragleave > dragend

- 事件的执行顺序：drop 触发的时候(dragover 的时候阻止默认事件)
  - dragstart > drag > dragenter > dragover > drop > dragend

- 不能释放的光标和能释放的光标不一样

- [解决firefox 不能拖放问题](./demo/dragdrop-firefox.html)
  - 必须设置 dataTrasfer对象的 setData 方法才可以拖拽除图片外的其他标签

- dataTrasfer 对象
  - setData() 设置数据 key 和 value（必须是字符串）
  - getData() 获取数据，根据key 值，获取对应的 value

  - effectAllowed
    - effectAllowed: 设置光标样式(none,copy,copyLink, copyMove, link, linkMove, move, all 和 uninitialized)
  - setDragImage(对象，坐标，坐标) 拖拽图标
    - 三个参数：指定的元素，坐标X，坐标Y
  - files
    - 获取外部拖拽的文件，返回一个 filesList 列表
    - fileList 下有个 type 属性，返回文件的类型

  - FileREader(读取文件信息)
    - readAsDataURL: 参数为要读取的文件对象，将文件读取为 DataUrl
  
    - onload
      - 当读取文件成功完成的时候触发此事件
      - this.result, 来获取读取的文件数据，如果是图片，将返回 base64 格式的图片数据
    - 实例
      - 拖拽删除列表
      - 拖拽购物车
      - 上传图片预览功能
  
[拖拽购物车](./demo/cart.html)

`//`表示**同协议**，一般现在用在https跨域名地址情况下。比如第三方统计代码的引入，用//就不用很麻烦地区分https还是http，也不用担心https下降到http出问题`

## optgroup 标签

``` HTML
<select name="from" id="s2">
<optgroup label="北京">
  <option value="">朝阳</option>
  ....
</optgroup>
<optgroup label="上海">
  <option value="">浦东</option>
  ....
</optgroup>
</select>
```

## canvas

> 绘制图像：canvas元素没有绘图能力，所有绘制工作必须在 JavaScript 内部完成

绘制图片

``` js
var img = new Image();
img.onload = function(){
  context.drawImage(img, 0, 0);
}
```

## H5移动开发中的准则

- 尽量使用单页面开发（SPA）
- 慎重选择前段UI框架
- 动画、特效使用准则（60fps）
- 长度单位使用 rem

### 浏览器消耗最小的CSS属性

- 位置：`transform: translate(x,x,y)`
- 大小：`transform: scale(n)`
- 旋转：`transform: ratate(ndeg)`
- 透明度：`opacity: 0~1`

- [CSS消耗性能表](http://csstriggers.com/)

## 页面基本布局构成

- 流式布局-适合内容型应用
- 绝对定位布局-适合交互类应用
- flexbox布局-适合局部使用（Android4.1+ iOS 7+）
- CSS Grid layout(2015-3 WD chrome)

## 收集点击事件

- 屏幕按下：`touchsart`
- 触碰离开：`touchend`
- 触碰移动：`touchmove`

- 一次完整的点击：`touchstart+touchend`

## 构建详细的内容列表

- 使用[iscrolljs滚动条插件](http://iscrolljs.com)构建平滑列表
- 注意：iscrolljs 内部不能含有 box-shadow,opacity, text-shadow, alpha

## 应用缓存

- 离线浏览：用户可在应用离线时使用缓存
- 速度：已缓存资源加载得更快
- 减少服务器负载：浏览器将只从服务器下载更新过或更改的过的资源

- 实现缓存：
  - 需要应用程序缓存，在文档的<html>标签中包含 manifest 属性。manifest文件的建议的文件扩展名是：'.appcache'

### Manifest 文件

1. CACHE MANIFEST: 在此标题下列出的文件将在首次下载后进行缓存
2. NETWORK : 在此标题下的文件需要与服务器的连接，且不会被缓存
3. FALLBACK : 在此标题下列出的文件规定当页面无法访问时的回退页面（比如404页面）

注意：文件资源必须Web服务器上

## Web Workers

> 运行在后台的 JavaScript，独立于其他脚本，不会影响页面的性能

### 方法

- postMessage() 用于向 HTML 页面传回一段消息
- terminate() 终止 web worker,并释放浏览器/计算机资源

### 事件

- onmessage

## 服务器推送事件

- HTML5 规范中的一个组成部分，可以用来从服务端实时推送数据到浏览器端
- 传统的服务器端推送数据技术
  - WebSocket: WebSocket 规范是H5中的一个重要组成部分，已经被很多主流浏览器所支持，也有不少基于 WebSocket开发的应用。正如名称所表示的一样，WebSocket 使用的是套接字连接，基于 TCP 协议。使用 WebSocket 之后，实际上在服务器端和浏览器端之间建立一个套接字连接，可以进行双向的数据传输。WebSocket 的功能是很强大的，使用起来也灵活，可以适用于不同的场景。不过 WebSocket 技术也比较复杂，包括服务器和浏览器的实现都不同于一般的 Web 应用
  - http 协议：简易轮询，即浏览器定时向服务器端发出请求，来查询是否有数据更新。轮询间隔间隔过长，会导致用户不能及时接收到更新的数据；轮询的间隔过短，会导致查询请求过多，增加服务器端负担。

### 实现

- 服务器代码头；`header('Content-Type: text/event-stream');`

- EventSource 事件
- onopen 服务器的连接被打开
- onmessage 接受消息
- onerror 错误发生

