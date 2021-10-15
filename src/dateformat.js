/**
 * 日期格式
 * y(Y):年份,m(M):月份,d(D):日
 */
const DATE_FORMAT = {
    SDF_DATE:'yyyy-MM-dd', //只有年月日
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
        "H+": this.getHours(),                       //小时
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
        if (new RegExp("(" + k + ")").test(fmt)) {
            fmt = fmt.replace(
                RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        }
    }
    return fmt;
}

/**
 * 日期转成指定格式，默认为SDF_DATE
 * @param timestamp 1614049156378
 * @returns {string|void}
 */
function dateFormat(date, format) {
    format = format || DATE_FORMAT.SDF_DATE;
    if (!date) {
        date = new Date();
    }
    return date.format(format);
}

/**
 * 时间戳转日期
 * @param timestamp 1614049156378
 * @returns {Date}
 */
function timestampDate(timestamp){
    let date = new Date();
    if (timestamp) {
        //检查传入的timestamp格式是否正常
        if (typeof timestamp !== 'number' || timestamp.toString().length !== 13) {
            throw `timestamp格式不对,必须为13位的数字，类似1614049156378,当前参数为${timestamp}`;
        }
        date = new Date(timestamp);
    }
    return date;
}

/**
 * 时间戳格式转换
 * @param timestamp 1614049156378
 * @param format 没传默认成DATE_FORMAT.SDF_DATE_SECOND
 */
function timestampFormat(timestamp, format) {
    format = format || DATE_FORMAT.SDF_DATE_SECOND;
    let date = timestampDate(timestamp);
    return dateFormat(date, format);
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

/**
 * 时间戳转成指定格式.支持进行月份计算,month:正数:增加月份;负数：减少月份
 * @param timestamp
 * @param month
 * @param format
 * @returns {Date}
 */
function timestampAddMonth(timestamp, month, format) {
    let date = timestampDate(timestamp);
    return dateAddMonth(date, month, format)
}

/**
 * 时间戳转成指定格式.支持进行天数计算,day:正数:增加天数;负数：减少天数
 * @param timestamp
 * @param month
 * @param format
 * @returns {string|void}
 */
function timestampAddDay(timestamp, day, format) {
    let date = timestampDate(timestamp);
    return dateAddDay(date, day, format);
}

/**
 * 时间字符串转日期
 * @param time 20210106101605570
 * @returns {Date}
 */
function timeDate(time){
    let date = new Date();
    if (time) {
        try {
            time = time.toString();
            let year = time.substring(0, 4);
            let month = time.substring(4, 6)
            let day = time.substring(6, 8)
            let hour = time.substring(8, 10)
            let minute = time.substring(10, 12)
            let second = time.substring(12, 14)
            date = new Date(year,month-1,day,hour,minute,second);
        } catch(e){
            throw `time格式不对,时间格式类似:20210106101605570,当前参数为${time}`
        }
    }
    return date;
}

/**
 * @param time 20210106101605570
 * @param format 没传默认成DATE_FORMAT.SDF_DATE_SECOND
 * @returns {string|void}
 */
function timeFormat(time, format) {
    format = format || DATE_FORMAT.SDF_DATE_SECOND;
    let date = timeDate(time);
    return dateFormat(date, format);
}

/**
 * 时间字符串转成年月日
 * @aram time 20210106101605570
 * return:2021-02-23
 */
function timeToDate(time) {
    return timeFormat(time, DATE_FORMAT.SDF_DATE)
}

/**
 * 时间字符串转成年 月日 时 分 秒
 * @aram time 20210106101605570
 * return:2021-02-23 10:59:16
 */
function timeToDateTime(time) {
    return timeFormat(time, DATE_FORMAT.SDF_DATE_SECOND)
}

/**
 * 时间字符串转成指定格式.支持进行月份计算,month:正数:增加月份;负数：减少月份
 * @param timestamp
 * @param month
 * @param format
 * @returns {Date}
 */
function timeAddMonth(time, month, format) {
    let date = timeDate(time);
    return dateAddMonth(date, month, format)
}

/**
 * 时间字符串转成指定格式.支持进行天数计算,day:正数:增加天数;负数：减少天数
 * @param timestamp
 * @param month
 * @param format
 * @returns {string|void}
 */
function timeAddDay(time, day, format) {
    let date = timeDate(time);
    return dateAddDay(date, day, format);
}

/**
 * 日期格式转换成指定格式.支持进行月份计算,month:正数:增加月份;负数：减少月份
 * @param timestamp
 * @param month
 * @param format
 * @returns {string|void}
 */
function dateAddMonth(date, month, format) {
    if (month) {
        date.setMonth(date.getMonth() + month)
    }
    return dateFormat(date, format);
}

/**
 * 日期格式转换成指定格式.支持进行天数计算,day:正数:增加天数;负数：减少天数
 * @param timestamp
 * @param day
 * @param format
 * @returns {string|void}
 */
function dateAddDay(date, day, format) {
    if (day) {
        date.setDate(date.getDate() + day)
    }
    return dateFormat(date, format);
}

export default {
    DATE_FORMAT,
    dateFormat,
    dateAddMonth,
    dateAddDay,
    timestampDate,
    timestampFormat,
    timestampToDate,
    timestampToDateTime,
    timestampAddMonth,
    timestampAddDay,
    timeDate,
    timeFormat,
    timeToDate,
    timeToDateTime,
    timeAddMonth,
    timeAddDay
}

// var now = new Date();
// console.log(dateFormat())
// console.log(dateFormat(new Date()))
// console.log(dateFormat(new Date(), DATE_FORMAT.SDF_HOUR_TIME))
// console.log(timeDate())
// console.log(timeDate(20210106101605570))
// console.log(timeFormat(20210106101605570))
// console.log(timeAddMonth(20210106101605570, -2))
// console.log(timeAddDay(20210106101605570,-3))
// console.log(timeToDate('20210106101605570'))
// // console.log(timestampAddMonth('20210106101605570', 3))
// console.log(timeToDateTime())
// console.log(timestampToDateTime(1614049156378))
// console.log(timestampAddMonth(1614049156378, 11))
// console.log(timestampAddMonth(1614049156378, 11, DATE_FORMAT.SDF_DATE_SECOND))
// console.log(timestampAddMonth())
// console.log(timestampAddDay(1614049156378, -6, DATE_FORMAT.SDF_DATE_SECOND))
// console.log(timeAddDay()) //2021-01-06 10:16:05
// console.log(timeAddDay(20210106101605570)) //2021-01-06 10:16:05
// console.log(timeAddDay(20210106101605570, 3)) //2021-01-06 10:16:05
// console.log(timeAddDay(20210106101605570, -3)) //2021-01-06 10:16:05
// console.log(timeAddDay(20210106101605570, -3, DATE_FORMAT.SDF_DATE_SECOND))
// console.log(timeFormat(20210419203306147, DATE_FORMAT.SDF_DATE_MINUTE))