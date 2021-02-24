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

export default {
	accMul, //乘法
	accDiv, //除法
	accAdd, //加法
	accSub, //减法
	toFixed //四舍五入指定小数位
}

// console.log(`原始乘法:${19.9 * 100}`)
// console.log(`改造后乘法:${accMul(19.9, 100, 2)}`)
// console.log(accDiv(32.34, 3, 2))
// console.log(`原始加法:${0.1 + 0.2}`)
// console.log(`改造后加法:${accAdd(0.1, 0.2)}`)
// console.log(accSub(32.34676768, 3))
// console.log(`原始四舍五入指定小数位:${1.335.toFixed(2)}`)
// console.log(`改造后:${toFixed(1.335, 2)}`)