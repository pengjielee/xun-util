导入

```javascript
import {
  pubsub,
  isEmptyObject,
  deepClone,
  extend,
  flatObject,
  hexToRgba,
  format,
  splitNumber,
  uuid,
} from "xun-util";
```

### pubsub

发布订阅模式。

```javascript
//订阅登录成功的事件
pubsub.subscribe("loginSuccess", function () {
  console.log("login success");
});

//发布登录成功
pubsub.publish("loginSuccess");
```

### isEmptyObject(object)

判断对象是否空对象。

```javascript
isEmptyObject({}); //true

isEmptyObject({ name: 'p'}); //false
```

### deepClone()

深拷贝。

```javascript
const from = { name: "p", age: 20, colors: ["red", "green", "blue"], date: new Date(), numberReg: /\d+/ };
//循环引用
from.target = from;

const to = deepClone(from);
```

### extend(from, to)

将属性拷贝到目标对象。

```javascript
const to = {};
const from = { name: "p", age: 20, colors: ["red", "green", "blue"] };
extend(from, to);
console.log(to); //{ name: "p", age: 20, colors: ["red", "green", "blue"] }
```

### flatObject(object)

扁平化对象。

```javascript
flatObject({ a: { b: { c: { d: "e" } } } }); //{a.b.c.d: 'e'}
```

### hexToRgba(hex, number)

16进制颜色值转为rgba。

```javascript
hexToRgba('FFFFFF',1); //'rgba(255, 255, 255, 1)'
```

### format

格式化。

```javascript

format.number(1); //'01'

format.date();//'2021/09/27 10:27:01'

format.money(1000);//'1,000'

format.money(1000.02); //'1,000.02
```

### splitNumber(number)

使用逗号三位分割数字。

```javascript
splitNumber(10000); //10,000

//小数部分会忽略
splitNumber(10000.01);//10,000
```

### uuid()

生成唯一ID

```javascript
uuid(); // output: 'f09cd145-df5d-43cf-ad49-91a5cababec5'
```