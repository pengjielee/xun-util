导入

```javascript
import {
  capitalize,
  encryptIDNumber,
  encryptPhoneNumber,
  lowerFirst,
  splitLines,
  truncateText,
  turncase,
  upperEveryWord,
  upperFist,
} from "xun-util";
```

### capitalize(string)

字符串首位大写。

```javascript
xUtil.capitalize('hello world');//'Hello world'
```

### encryptIDNumber(string)

加密身份证号，只显示前4位和后4位。


```javascript
xUtil.encryptIDNumber('445302199003077211'); //'4453**********7211'
```

### encryptPhoneNumber(string)

加密手机号，中间4位用*号替换。


```javascript
xUtil.encryptPhoneNumber('18614023232'); //'186****3232'
```

### lowerFirst(string)

首字母小写。


```javascript
xUtil.lowerFirst('HELLO WORLD'); //'hELLO WORLD'
```

### splitLines(string)

将字符串按行拆分。


```javascript
xUtil.splitLines('hello\nworld'); //['hello', 'world']
```

### truncateText(string, length)

字符串截取。


```javascript
xUtil.truncateText('hello world',2); //'he...'
```

### turncase(string, type)

字符串大小写转换。


```javascript
xUtil.turncase('hello world', 1); //全大写，'HELLO WORLD'
xUtil.turncase('hellO World', 2); //全小写，
xUtil.turncase('hello world', 3); //首字母大写，
```

### upperEveryWord(string)

每个单词首字母大写。


```javascript
xUtil.upperEveryWord('hello world'); //'Hello World'
```

### upperFist(string)

首字母大写。


```javascript
xUtil.upperFirst('hello'); //'Hello'
```



