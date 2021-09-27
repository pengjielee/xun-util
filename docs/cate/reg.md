导入

```javascript
import { reg } from 'xun-util';
```

### reg.isEnglish()

是否是英文字母。

```javascript
reg.isEnglish('要'); //false
reg.isEnglish('12'); //false
reg.isEnglish('abc'); //true
```

### reg.isChinese()

是否是中文。

```javascript
reg.isChinese('要'); //true
reg.isChinese('12'); //false
reg.isChinese('abc'); //false
```

### reg.isEmail()

是否是邮箱。

```javascript
reg.isEmail('1@qq.com'); //true
```

### reg.isNumber()

是否是数字。

```javascript
reg.isNumber('12'); //true
reg.isNumber('12.1'); //false
reg.isNumber('12a'); //false
```

### reg.isDecimal()

是否是小数。

```javascript
reg.isDecimal('10.1'); //true
reg.isDecimal('10'); //false
```

### reg.isUppercase()

是否是大写字母。

```javascript
reg.isUppercase('12'); //false
reg.isUppercase('afa');// false
reg.isUppercase('afA'); //false
reg.isUppercase('AFA'); //true
```

### reg.isLowercase()

是否是小写字母。

```javascript
reg.isLowercase('12'); //false
reg.isLowercase('afa');// true
reg.isLowercase('afA'); //false
```

### reg.isIDCard()

是否是身份证号。

```javascript
u.reg.isIDCard('110101199003079331'); //true，18位身份证号
u.reg.isIDCard('11010119900307933x'); //true，最后一位是字母
```

### reg.isChineseName()

是否是中文姓名。

```
reg.isChineseName('林要'); //true
reg.isChineseName('林'); //fasle
reg.isChineseName('12'); //false
```

### reg.isEnglishName()

是否是英文姓名。

```javascript
reg.isEnglishName('lip'); //true
reg.isEnglishName('lip2'); // false
```

### reg.isLandlineTelephone()

是否是座机电话。（3位区号-8位数字，4位区号-7位数字）

```javascript
reg.isLandlineTelephone('0371-6568128'); //true
reg.isLandlineTelephone('010-65681282'); //true
```

### reg.isMobile()

是否是手机号。(以1开头的11位数字)

```javascript
reg.isMobile('18613023234'); //true
reg.isMobile('28613023234'); //false
reg.isMobile('1861302323'); //false
```


