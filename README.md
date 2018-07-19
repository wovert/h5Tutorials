# HTML5

## HTML5 语义化标签

### 结构化标签

header 页头、元数据

footer 页脚

nav  导航

section 页面板块

article 结构完整且独立的内容部分

asice 相关引用、侧边栏

hgroup 标题组


### 语义化标签

figure 媒体元素组合

time 时间  <time datetime="2008-02-14">发布</time>


### 功能标签

datalist 列表

```
<input type="text" list="vaList">
<datalist id="vaList">
  <option value="javascript">Javascript</option>
  <option value="html">html</option>
  <option value="css">css</option>
</datalist>
```

detail 详情信息

```
<details>
  <summary>信息</summary>
  <p>详细信息</p>
</details>
```

定义一段对方

```
<dialog>
  <dt>老师</dt>
  <dd>2+2等于?</dd>
  <dt>学生</dt>
  <dd>4</dd>
  <dt>老师</dt>
  <dd>答对了!</dd>
</dialog>
```

address 定义文章或页面作者的详细联系信息

mark 标记的词或句子

keygen 给表单添加一个公钥

```
<form action="" method="">
username:<input type="text" name="username" />
公钥：<keygen name="security" />
<input type="submit" />
</form>
```

progress

```
max最大值，value当前值,span为了向下兼容
<progress max="100" value="76">
  <span>76</span>%
</progress>
```

## 低版本兼容

``` HTML

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

- email: 当输入不是邮箱格式的时候，验证不通过；移动端的键盘会有变化
- tel: 电话号码
- url: 网页的URL
- search: 搜索引擎；chrome 下输入文字后，会多出一个关闭的 X
- range: 特定范围内的数值选择器
  - min、max、step(步数)
  - 用 JS 来显示当前数值

```
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

```
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

```
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

```
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