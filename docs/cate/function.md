导入

```javascript
import { debounce, defer, once, throttle } from 'xun-util';
```

### debounce(fn,wait)

函数防抖。防抖函数的作用就是控制函数在一定时间内的执行次数。防抖意味着N秒内函数只会被执行一次，如果N秒内再次被触发，则重新计算延迟时间。

应用：
1. 搜索框输入查询，如果用户一直在输入中，没有必要不停地调用去请求服务端接口，等用户停止输入的时候，再调用，设置一个合适的时间间隔，有效减轻服务端压力。
2. 浏览器窗口缩放，resize事件（如窗口停止改变大小之后重新计算布局）等。

```javascript
window.onresize = function () {
  console.log("resize");
};

window.onresize = debounce(function () {
  console.log("resize");
}, 1000);
```

### defer(fn)

函数延迟执行。

```javascript
defer(()=> console.log('hello'));
console.log('1');

//output: '1' 'hello'
```

### once(fn)

函数只运行一次。

```javascript
const sayHello = once(()=> console.log('hello'));
sayHello(); //hello
sayHello(); //什么都没有
```

### throttle(fn, wait, mustRun)

函数节流。节流函数的作用是规定一个单位时间，在这个单位时间内最多只能触发一次函数执行，如果这个单位时间内多次触发函数，只能有一次生效。

防抖函数确实不错，但是也存在问题，譬如图片的懒加载，我希望在下滑过程中图片不断的被加载出来，而不是只有当我停止下滑时候，图片才被加载出来。又或者下滑时数据的 ajax 请求加载也是同理。

这个时候，我们希望即使页面在不断被滚动，但是滚动 handler 也可以以一定的频率被触发（譬如 250ms 触发一次），这类场景，就要用到另一种技巧，称为节流函数（throttling）。

节流函数，只允许一个函数在 X 毫秒内执行一次。

与防抖相比，节流函数最主要的不同在于它保证在 X 毫秒内至少执行一次我们希望触发的事件 handler。

与防抖相比，节流函数多了一个 mustRun 属性，代表 mustRun 毫秒内，必然会触发一次 handler ，同样是利用定时器

```javascript
window.onscroll = function () {
  console.log("scroll");
};

window.onscroll = throttle(function () {
  console.log("request img");
}, 2000, 1000);
```