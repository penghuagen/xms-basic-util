## JS实现十进制与二进制的互相转换
#### 1. 十进制转换为二进制

`toString()` 方法可把一个`Number`对象转换为一个字符串，并返回结果。

- 语法

```
NumberObject.toString(radix)
```

参数 | 描述
---|---
radix | 可选。规定表示数字的基数，使 2 ~ 36 之间的整数。若省略该参数，则使用基数 10

- 返回值

数字的字符串表示。例如，当 radix 为 2 时，NumberObject 会被转换为二进制值表示的字符串。

- 示例

```
var number = new Number(1337);
console.log(number.toString()) // 1337
console.log(number.toString(2)) // 10100111001
console.log(number.toString(8)) // 2471
console.log(number.toString(16)) // 539

var dot = 1.1
console.log(dot.toString(2)) // 1.000110011001100110011001100110011001100110011001101
console.log(dot.toString(8)) // 1.06314631463146315
console.log(dot.toString(16)) // 1.199999999999a
```

#### 2. 二进制转换为十进制

> 如果使用parseInt(string, radix)，返回的是整数，但如果二进制数有小数部分，那小数部分的数值会被直接舍去，不符合一些场景的需求设定

**只有整数的二进制**

如果二进制只有整数，可以使用parseInt，把二进制转十进制

- 语法

```
parseInt(string, radix)
```

参数 | 描述
---|---
string | 必需。要被解析的字符串
radix |	可选。表示要解析的数字的基数

> 当参数 radix 的值为 0，或没有设置该参数时，parseInt() 会根据 string
来判断数字的基数

1. 如果 string 以 "0x" 开头，parseInt() 会把 string 的其余部分解析为十六进制的整数。
2. 如果 string 以 0 开头，那么 ECMAScript v3 允许 parseInt() 的一个实现把其后的字符解析为八进制或十六进制的数字。新浏览器都解析成十进制
3. 如果 string 以 1 ~ 9 的数字开头，parseInt() 将把它解析为十进制的整数。

- 示例
```
var max = 10100111001
console.log(parseInt(max,2)); // 1337
var num = 1100100;
console.log(parseInt(num,2)); // 100
```

**包含小数的二进制**

将二进制数的整数部分和小数部分分别转换，再加起来。

- 整数部分

转换如上。

- 小数部分

根据转换原则，将小数点后的每位二进制数都转换成十进制数，然后将各个位的十进制数加起来，就是完整的小数部分的十进制数了

以0.111为例

小数部分 | 1 | 1 | 1
---|---|---|---
基数的多少次幂 |2^(-1)| 2^(-2)| 2^(-3)
每位数字转换过程 | 1*2^(-1)| 1*2^(-2)| 1*2^(-3)
十进制表示 | 0.5| 0.25| 0.125

- 将二进制数的整数部分和小数部分拆分

```
const binaryFloatNum = 1111011.111
const binaryFloatNumStr = binaryFloatNum.toString()
console.log(binaryFloatNumStr)  // "1111011.111"
const binaryFloatNumArr = binaryFloatNumStr.split(".")
console.log(binaryFloatNumArr)  // ["1111011", "111"]
```

- 将整个二进制小数转换为十进制数的程序为

```
/**
* 将二进制小数部分转换为十进制数
* @param binaryFloatPartArr 二进制小数部分中由小数各位组成的数组
*/
function eachBinaryFloatPartToDecimal(binaryFloatPartArr) {
    return binaryFloatPartArr.map((currentValue, index) => {
        return Number(currentValue) * Math.pow(2, (-(index + 1)))
    })
}

/**
* 将二进制小数（包含整数部分和小数部分）转换为十进制数
* @param binaryNum 二进制数（可能是整数，也可能是小数）
*/
function binaryFloatToDecimal(binaryNum) {
    // 如果该二进制只有整数部分则直接用 parseInt(string, radix) 处理
    if (Number.isInteger(binaryNum)) {
        return parseInt(binaryNum, 2)
    } else {
        const binaryFloatNumArr = binaryNum.toString().split(".")

        // 将二进制整数转换为十进制数
        const binaryIntParStr = binaryFloatNumArr[0]
        const decimalIntPartNum = parseInt(binaryIntParStr, 2)

        // 将二进制小数部分转换为十进制数
        const binaryFloatPartArr = binaryFloatNumArr[1].split("")
        const eachDecimalFloatPartNum = eachBinaryFloatPartToDecimal(binaryFloatPartArr)
        const deciamlFloatPartNum = eachDecimalFloatPartNum.reduce((accumulator, currentValue) => { return accumulator + currentValue })
        return decimalIntPartNum + deciamlFloatPartNum
    }
}

console.log(binaryFloatToDecimal(1111011.111))  // 123.875
console.log(binaryFloatToDecimal(1111011))  // 123
console.log(binaryFloatToDecimal(0.111))  // 0.875
```

>其他进制转换成十进制的实现思路也类似

**[数字工具使用说明](mathUtil.md)**