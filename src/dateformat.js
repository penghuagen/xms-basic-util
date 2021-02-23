/**
 * 日期格式
 * y(Y):年份,m(M):月份,d(D):日
 */
const DATE_FORMAT = {
    SDF_DATE:'yyyy-MM-DD', //只有年月日
    SDF_DATE_SECOND:'yyyy-MM-dd HH:mm:ss',
    SDF_DATE_MINUTE:'yyyy-MM-dd HH:mm',
    SDF_DATE_MONTH_MINUTE:'MM-dd HH:mm',
    SDF_HOUR_TIME:'HH:mm:ss', //只有时分秒
    SDF_DATE_CN:'yyyy年MM月dd日' //中文年月日
}

/**
 * 给日期原型增加格式化方法
 * @param fmt
 * @returns {string|void}
 */
Date.prototype.format = function (fmt){
    let o = {
        "M+": this.getMonth() + 1,                   //月份
        "d+": this.getDate(),                        //日
        "h+": this.getHours(),                       //小时
        "m+": this.getMinutes(),                     //分
        "s+": this.getSeconds(),                     //秒
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度
        "S": this.getMilliseconds()                  //毫秒
    };

    //  获取年份
    if (/(y+)/i.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    }

    for (let k in o) {
        if (new RegExp("(" + k + ")", "i").test(fmt)) {
            fmt = fmt.replace(
                RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        }
    }
    return fmt;
}

/**
 * 时间戳格式转换,不传默认为当前时间
 * @param timestamp
 * @param format
 * @returns {string|void}
 */
function timestampFormat(timestamp, format) {
    let date = new Date();
    if (timestamp) {
        date = new Date(timestamp);
    }
    return date.format(format);
}

/**
 * 时间戳转成年月日
 * @aram timestamp 1614049156378
 * return:2021-02-23
 */
function timestampToDate(timestamp) {
    return timestampFormat(timestamp, DATE_FORMAT.SDF_DATE)
}

/**
 * 时间戳转成年 月日 时 分 秒
 * @aram timestamp 1614049156378
 * return:2021-02-23 10:59:16
 */
function timestampToDateTime(timestamp) {
    return timestampFormat(timestamp, DATE_FORMAT.SDF_DATE_SECOND)
}

export default {
    DATE_FORMAT,
    timestampFormat,
    timestampToDate,
    timestampToDateTime
}


var now = new Date();
var nowStr = now.format(DATE_FORMAT.SDF_DATE);
var nowStr1 = now.format(DATE_FORMAT.SDF_DATE_CN);
var nowStr2 = now.format(DATE_FORMAT.SDF_DATE_MINUTE);
var nowStr5 = now.format(DATE_FORMAT.SDF_DATE_MONTH_MINUTE);
var nowStr3 = now.format(DATE_FORMAT.SDF_DATE_SECOND);
var nowStr4 = now.format(DATE_FORMAT.SDF_HOUR_TIME);
console.log(timestampToDate())
console.log(timestampToDateTime(1614049156378))
