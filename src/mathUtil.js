/**
 * 乘法
 * @param arg1
 * @param arg2
 * @param decimals 保留小数的位数
 * @returns {number|*}
 */
function accMul(arg1, arg2, decimals) {
	let m = 0, s1 = arg1.toString(), s2 = arg2.toString();
	try {
		m += s1.split(".")[1].length;
	} catch (e) {
	}
	try {
		m += s2.split(".")[1].length;
	} catch (e) {
	}
	
	let num = Number(s1.replace(".", "")) * Number(s2.replace(".", "")) / Math.pow(10, m);
	
	return decimalsFormat(num, decimals);
}

/**
 * 除法
 * @param arg1
 * @param arg2
 * @param decimals 保留小数的位数
 * @returns {number|*}
 */
function accDiv(arg1, arg2, decimals) {
	let t1 = 0, t2 = 0, r1, r2;
	try {
		t1 = arg1.toString().split(".")[1].length;
	} catch (e) {
	}
	try {
		t2 = arg2.toString().split(".")[1].length;
	} catch (e) {
	}

	r1 = Number(arg1.toString().replace(".", ""));
	r2 = Number(arg2.toString().replace(".", ""));

	let num = Number((r1 / r2) * Math.pow(10, t2 - t1));

	return decimalsFormat(num, decimals);
}

//保留小数位
function decimalsFormat(num, decimals) {
	if (decimals != undefined && decimals >= 0) {
		num = Math.round(num * Math.pow(10, decimals)) / Math.pow(10, decimals);
	}
	return num;
}

/**
 * 加法
 * @param arg1
 * @param arg2
 * @returns {number|*}
 */
function accAdd(arg1, arg2) {
	var r1, r2, m;
	try {
		r1 = arg1.toString().split(".")[1].length;
	} catch (e) {
		r1 = 0;
	}
	try {
		r2 = arg2.toString().split(".")[1].length;
	} catch (e) {
		r2 = 0;
	}
	m = Math.pow(10, Math.max(r1, r2));
	return accDiv((accMul(arg1, m) + accMul(arg2, m)) , m, 2);
}

/**
 * 减法
 * @param arg1
 * @param arg2
 * @returns {number|*}
 */
function accSub(arg1, arg2) {
	var r1, r2, m;
	try {
		r1 = arg1.toString().split(".")[1].length;
	} catch (e) {
		r1 = 0;
	}
	try {
		r2 = arg2.toString().split(".")[1].length;
	} catch (e) {
		r2 = 0;
	}
	m = Math.pow(10, Math.max(r1, r2));
	return accDiv((arg1 * m - arg2 * m) , m, 2);
}

/**
 *  Number 四舍五入为指定小数位数的数字
 */
function toFixed(num, length){
	let times = Math.pow(10, length);
	let des = accMul(num, times) + 0.5
		des = parseInt(des, 10) / times
	return des
}

/**
 * 将二进制小数部分转换为十进制数
 * @param binaryFloatPartArr 二进制小数部分中由小数各位组成的数组
 * @param radix binaryNum对应的进制数，默认为2,如果binaryNum是8进制,则需要传8,其他进制类似
 */
function eachBinaryFloatPartToDecimal(binaryFloatPartArr, radix) {
	return binaryFloatPartArr.map((currentValue, index) => {
		return Number(currentValue) * Math.pow(radix, (-(index + 1)))
	})
}

/**
 * 将二进制小数（包含整数部分和小数部分）转换为十进制数
 * @param binaryNum 进制数（可能是整数，也可能是小数，默认是二进制）
 * @param radix binaryNum对应的进制数，默认为2,如果binaryNum是8进制,则需要传8,其他进制类似
 */
function binaryFloatToDecimal(binaryNum, radix) {
	radix = radix || 2
	// 如果该二进制只有整数部分则直接用 parseInt(string, radix) 处理
	if (Number.isInteger(binaryNum)) {
		return parseInt(binaryNum, radix)
	}

	const binaryFloatNumArr = binaryNum.toString().split(".")
	// 将二进制整数转换为十进制数
	const binaryIntParStr = binaryFloatNumArr[0]
	const decimalIntPartNum = parseInt(binaryIntParStr, radix)

	// 将二进制小数部分转换为十进制数
	const binaryFloatPartArr = binaryFloatNumArr[1].split("")
	const eachDecimalFloatPartNum = eachBinaryFloatPartToDecimal(binaryFloatPartArr, radix)
	const deciamlFloatPartNum = eachDecimalFloatPartNum.reduce((accumulator, currentValue) => { return accumulator + currentValue }, 0)
	return decimalIntPartNum + deciamlFloatPartNum
}

export default {
	accMul, //乘法
	accDiv, //除法
	accAdd, //加法
	accSub, //减法
	toFixed, //四舍五入指定小数位
	binaryFloatToDecimal //进制转换,主要是二进制转换成十进制
}