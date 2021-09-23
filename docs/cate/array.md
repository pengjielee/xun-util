导入

```javascript
import { arrayAllEqual } from 'xun-util';
```

### arrayAllEqual(array)

判断数组中的所有元素是否相等。

```javascript
arrayAllEqual([1,1,1]);
//output: true

arrayAllEqual([1,1,2]);
//output: false
```

### castArray(value)

转为数组。

```javascript
castArray(1);
//output: [1]

castArray(true);
//ouput: [true]
```

### countInArray(array, target)

目标值在数组中出现次数。

```javascript
countInArray([1,1,2],1);
//output: 2
```

### difference(array1,array2)

返回第一个数组独有的元素。

```javascript
difference([1,2,3],[2]);
//output: [1,3]
```

### flatArray(array)

数组扁平化。

```javascript
flatArray([1,2,3,[1,2]]);
//output: [1,2,3,1,2]
```

### objectToArray(object)

对象转为数组。

```javascript
objectToArray({ name: 'jim', age: 20 });
//output: [ {key: 'name', value: 'jim'},{key: 'age', value: 20}, ]
```

### intersection(array1,array2)

返回两个数组的交集。

```javascript
intersection([1,2],[2,3]);
//output: [2]
```

### uniqueArray(array)

数组去除重复元素。

```javascript
uniqueArray([1,2,3,2]);
//output: [1,2,3]
```