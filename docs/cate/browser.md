导入

```javascript
import {
  fullscreen,
  getCurrentUrl,
  getLocation,
  getStyle,
  hasClass,
  hideTag,
  htmlUtil,
  isBrowserTabFocused,
  redirectHttps,
  scrollToElement,
  scrollToTop,
  stripHTMLTags,
  timeTaken,
} from "xun-util";
```

### fullscreen

开启全屏/退出全屏。

```javascript
fullscreen.open();

fullscreen.exit();

fullscreen.open(document.querySelector('textarea'));
```

### getCurrentUrl()

获取当前页面URL。

### getLocation()

获取地理位置。

```javascript
getLocation().then((res) => console.log(res)); 

//output: { "latitude": 40.020915, "longitude": 116.459092 }
```

### getStyle(element, ruleName)

获取指定元素的生效样式。

```javascript
h2 {
	font-weight: 300;
	font-style: 'italic';
}

getStyle(document.querySelector('h2'), 'fontWeight'); //'300'
getStyle(document.querySelector('h2'), 'fontStyle'); //'italic'
```

### hasClass(element)

判断一个元素是否有某个类名。

```javascript
<h2 class="hello">Hello</h2>

hasClass(document.querySelector('h2'),'hello'); //true
hasClass(document.querySelector('h2'),'world'); //false
```

### hideTag()

隐藏所有标签。

### htmlUtil

```javascript
htmlUtil.encode(html);//HTML转码
htmlUtil.decode(text);//HTML解码
htmlUtil.encodeByReg(string);//正则实现HTML转码
htmlUtil.decodeByReg(string);//正则实现HTML解码

htmlUtil.encode('<h1>hello world</h1>'); //output: '&lt;h1&gt;hello world&lt;/h1&gt;'

htmlUtil.decocde(htmlUtil.encode('<h1>hello world</h1>')); //output: '<h1>hello world</h1>'

htmlUtil.encodeByReg('<h1>hello world</h1>');//output: '&lt;h1&gt;hello&nbsp;world&lt;/h1&gt;'

htmlUtil.decodeByReg(htmlUtil.encodeByReg('<h1>hello world</h1>'));//output: '<h1>hello world</h1>'
```

### isBrowserTabFocused()

浏览器页面是否显示。

### redirectHttps()

http跳转https。


### scrollToElement(selector)

平滑滚动到指定元素。

```javascript
scrollToElement('h2')
```

### scrollToTop()

滚动到顶部。

### stripHTMLTags(html)

去除所有html标签。

```javascript
stripHTMLTags('<h1>hello</h1>'); //'hello'
```

### timeTaken(fn)

计算一个函数执行时间。

```javascript
timeTaken(() => Math.pow(2, 10));
```