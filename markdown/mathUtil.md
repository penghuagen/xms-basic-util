# 数字工具使用说明

## mathUtil
`mathUtil`提供了数字的运算方法,解决数字精度丢失(浮点数精度问题)的一些典型问题;

下面示例中有列举一些使用简单运算符精度丢失与调用`mathUtil`方法不丢失的对比，基本上能解决因浮点数精度丢失的问题;

### 方法

#### 乘法

- 语法
```
accMul(arg1, arg2, decimals) 
```
数字之间的乘法,支持设置保留小数的位数，默认为2位

| 参数              | 描述                      |
| ----------------- | -------------------------| 
| `arg1`       | 必需    数字|
| `arg2`       | 必需    数字 |
| `decimals`       | 可选、保留小数位数，正整数，如果没有传，保留原始位数      |

- 示例
```$xslt
19.9 * 100  // 1989.9999999999998
mathUtil.accMul(19.9, 100) // 1990
mathUtil.accMul(19.9, 100, 2) // 1990

0.11*1.1 // 0.12100000000000001
mathUtil.accMul(0.11, 1.1)// 0.121
```

#### 除法

- 语法
```$xslt
accDiv(arg1, arg2, decimals)
```
数字之间的除法,支持设置保留小数的位数，默认为2位

| 参数              | 描述                      |
| ----------------- | -------------------------| 
| `arg1`       | 必需    数字|
| `arg2`       | 必需    数字 |
| `decimals`       | 可选、保留小数位数，正整数，如果没有传，保留原始位数      |

- 示例
```$xslt
0.121/0.11 // 1.0999999999999999
mathUtil.accDiv(0.121, 0.11) // 1.1
```
#### 加法

- 语法
```$xslt
accAdd(arg1, arg2)
```
数字之间的加法

| 参数              | 描述                      |
| ----------------- | -------------------------| 
| `arg1`       | 必需    数字|
| `arg2`       | 必需    数字|

- 示例
```$xslt
0.1 + 0.2  // 0.30000000000000004
mathUtil.accAdd(0.1, 0.2) // 0.3
```
#### 减法

- 语法
```$xslt
accSub(arg1, arg2)
```
数字之间的减法

| 参数              | 描述                      |
| ----------------- | -------------------------| 
| `arg1`       | 必需    数字|
| `arg2`       | 必需    数字 |

- 示例
```$xslt
0.3 - 0.1 // 0.19999999999999998
mathUtil.accSub(0.3, 0.1) // 0.2
```

#### 四舍五入指定小数位

- 语法
```$xslt
toFixed(num, length)
```

toFixed 指定小数位进行四舍五入,跟`Math.toFixed`作用类似，解决浮点数字精度失真的问题

| 参数              | 描述                      |
| ----------------- | -------------------------| 
| `num`       | 必需    数字|
| `length`     | 必需    保留小数位数，正整数 |

- 示例
```$xslt
1.335.toFixed(2) // 1.33
mathUtil.toFixed(1.335, 2) //1.34
```
#### 二进制转换成十进制
- 语法
```$xslt
binaryFloatToDecimal(binaryNum, radix)
```

该方法主要是解决`二进制`带小数转`十进制`的问题，`八进制`或`十六进制`也支持。

十进制转换成二进制，可以使用toString()来实现;只有整数的二进制转十进制，可以使用parseInt()来实现,
具体的转换，可以查看[JS实现十进制与二进制的互相转换](binaryToDecimal.md)

| 参数              | 描述                      |
| ----------------- | -------------------------| 
| `binaryNum`       | 必需    默认是二进制|
| `radix`     | 可选   binaryNum对应的进制数，默认为2,如果binaryNum是8进制,则需要传8,其他进制类似 |

- 示例
```$xslt
mathUtil.binaryFloatToDecimal(1010) // 10
mathUtil.binaryFloatToDecimal(1010.1) // 10.5
mathUtil.binaryFloatToDecimal(1010,2) // 10
mathUtil.binaryFloatToDecimal(1010.1,2) // 10.5
mathUtil.binaryFloatToDecimal(1010, 8) // 520
mathUtil.binaryFloatToDecimal(1010.1, 8) // 520.125
mathUtil.binaryFloatToDecimal(1010.1001) // 10.5625
```

**[测试用例地址](../test/mathUtil.js)**

npm install 依赖包安装完后，进入到项目路径中，执行以下命令可以运行测试脚本
```$xslt
babel-node test/mathUtil.js
```
>为什么要使用`babel-node`?而不是使用`nodejs`直接运行，
>`nodejs`采用的是`CommonJS`的模块化规范，使用`require`引入模块；
>而`import`是ES6的模块化规范关键字。想要使用`import`，必须引入`babel`转义支持，
>通过`babel`进行编译，使其变成node的模块化代码。
 
**[JS数字丢失精度的原因](precision.md)**

**[JS实现十进制与二进制的互相转换](binaryToDecimal.md)**
