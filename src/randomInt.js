/**
 * 生成随机整数
 *
 * @param  {[Number]}
 * @param  {[Number]}
 * @return {[Number]}
 */

// function randomInt(min, max) {
//   //arguments对象是所有（非箭头）函数中都可用的局部变量。
//   switch (arguments.length) {
//     case 1:
//       return parseInt(Math.random() * min + 1, 10);
//     case 2:
//       return parseInt(Math.random() * (max - min + 1) + min, 10);
//     default:
//       return 0;
//   }
// }

const randomInt = (min, max) => {
  //console.log(arguments); //Uncaught ReferenceError: arguments is not defined
  if (max) {
    //Math.random()伪随机数范围在[0,1)
    //假如要生成[5,10]，即 min = 5，max = 10，max-min就是5。
    //[0,1) * (max - min + 1) + min = [0,1) * 6 + 5 = [5,11)
    return parseInt(Math.random() * (max - min + 1) + min, 10);
  } else if (min) {
    //Math.random()伪随机数范围在[0,1)
    //[0,1) * min = [0,min)
    //[0,1) * min + 1 = [1,min+1)
    //所以生成的随机数范围为[1,min]
    return parseInt(Math.random() * min + 1, 10);
  }
  return 0;
};

export default randomInt;
