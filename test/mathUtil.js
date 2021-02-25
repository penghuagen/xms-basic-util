import mathUtil from '../src/mathUtil'
console.log('--------除法---------')
console.log(0.121/0.11)
console.log(mathUtil.accDiv(0.121, 1.1))
console.log(mathUtil.accDiv(0.121, 0.11, 2))

console.log('---------乘法----------')
console.log(19.9 * 100)
console.log(mathUtil.accMul(19.9, 100))
console.log(mathUtil.accMul(19.9, 100, 2))
console.log(0.11*1.1)
console.log(11*100*0.11)
console.log((0.11*100*1.1*100)/10000)
console.log(((0.11*100)*(1.1*100))/10000)
console.log((Number(0.11*100)*Number(1.1*10))/1000)
console.log(mathUtil.accMul(0.11, 1.1))

console.log('-----------加法-----------')
console.log(0.1 + 0.2)
console.log(mathUtil.accAdd(0.1, 0.2))

console.log('-----------减法------------')
console.log(0.3 - 0.1)
console.log(mathUtil.accSub(0.3, 0.1))

console.log('----------toFixed-----------')
console.log(1.335.toFixed(2))
console.log(mathUtil.toFixed(1.335, 2))


console.log('----------进制转换-----------')
console.log(mathUtil.binaryFloatToDecimal(1010))
console.log(mathUtil.binaryFloatToDecimal(1010.1))
console.log(mathUtil.binaryFloatToDecimal(1010, 2))
console.log(mathUtil.binaryFloatToDecimal(1010.1, 2))
console.log(mathUtil.binaryFloatToDecimal(1010, 8))
console.log(mathUtil.binaryFloatToDecimal(1010.1, 8))
console.log(mathUtil.binaryFloatToDecimal(1010.1001))

