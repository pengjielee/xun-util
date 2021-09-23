导入

```javascript
import { average, randomInt,randomRange, sum  } from 'xun-util';
```


### average(array)

计算一个number数组的平均值。

```javascript
average([1,1,1]); //output: 1
```

### randomInt(min,[max])

生成随机整数。

```javascript
randomInt(2);

randomInt(2,5);
```

### randomRange(min,max)

生成指定范围的随机整数。

```javascript
randomRange(2,5);
```

### sum(array)

计算数组中元素的和。

```javascript
sum([1,2,3]); // output: 6
```