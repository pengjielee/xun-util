导入

```javascript
import { average, distance, randomInt, randomRange, sum } from "xun-util";
```


### average(array)

计算一个number数组的平均值。

```javascript
average([1,1,1]); //1
```

### distance({x1,y1},{x2,y2})

计算两点间的距离。

```
distance({ x1: 1, y1: 1 }, { x2: 4, y2: 5 }); //5
```

### randomInt(min,[max])

生成随机整数。

```javascript
randomInt(3); //生成[1,3]的随机整数

randomInt(2,5);//生成[2,5]的随机整数
```

### randomRange(min,max)

生成指定范围的随机整数。

```javascript
randomRange(2,5);//生成[2,5]的随机整数
```

### sum(array)

计算数组中元素的和。

```javascript
sum([1,2,3]); // 6
```