# 日期转换工具使用说明
## dateFormat对像
### 常量
在`dateFormat`对象中，有一个`DATE_FORMAT`常量对像，该常量列举了一些常用的日期格式，可以通过`dateFormat.DATE_FORMAT`来获取，在调用方法时，可以传入对应的日期格式；

| 名称              | 格式                           | 转换后日期格式                  |
| ----------------- | ------------------------------ | ------------------------ |
| `SDF_DATE`         | `yyyy-MM-DD`     | 2021-02-23 |
| `SDF_DATE_SECOND`       | `yyyy-MM-dd HH:mm:ss`                       | 2021-02-23 14:42:15 |
| `SDF_DATE_MINUTE` | `yyyy-MM-dd HH:mm`                   | 2021-02-23 14:42 |
| `SDF_DATE_MONTH_MINUTE`      | `MM-dd HH:mm`                  | 02-23 14:42 |
| `SDF_HOUR_TIME`        | `HH:mm:ss`                 | 14:02:15            |
| `SDF_DATE_CN`        | `yyyy年MM月dd日`           | 2021年02月23日   |
### 方法

#### 日期转换成指定的日期格式
- dateFormat(date, format)

通过日期转换成对应的格式

| 参数              | 描述                           |
| ----------------- | ------------------------------ | 
| `date`         | 可选 默认为当前时间   |
| `format`         | 可选  默认为`yyyy-MM-DD`  |

示例:
```
dateFormat.dateFormat() // 2021-04-07
dateFormat.dateFormat(new Date()) // 2021-04-07
dateFormat.dateFormat(new Date(), dateFormat.DATE_FORMAT.SDF_DATE_CN) // 2021年04月07日
```

- dateAddMonth(date, month, format)

通过日期转换成指定格式,支持月份加减;

| 参数              | 描述                      |
| ----------------- | -------------------------| 
| `date`       | 必选,日期格式，当前日期为new Date()     |
| `month`       | 可选、正数增加，负数减少      |
| `format`       | 可选、默认返回SDF_DATE格式     |

示例:
```
dateFormat.dateAddMonth() //time没有传默认当天，也没有做月份增减处理 2021-04-06
dateFormat.dateAddMonth(20210106101605570) //指定时间字符串 2021-01-06
dateFormat.dateAddMonth(20210106101605570, 3) //指定时间字符串并且month为正数 2021-04-06
dateFormat.dateAddMonth(20210106101605570, -3) //指定时间字符串并且month为负数 2020-10-06
dateFormat.dateAddMonth(20210106101605570, -3, dateFormat.DATE_FORMAT.SDF_DATE_SECOND) //计算后并指定返回的格式 2020-10-06 10:16:05
```
- dateAddDay(date, day, format)

通过日期转换成指定格式,支持天数加减;

| 参数              | 描述                      |
| ----------------- | -------------------------| 
| `date`       | 必选,日期格式，当前日期为new Date()     |
| `day`       | 可选、正数增加，负数减少      |
| `format`       | 可选、默认返回SDF_DATE格式     |

示例:
```
dateFormat.dateAddDay(new Date()) //time没有传默认当天，也没有做天数增减处理 2021-04-06
dateFormat.dateAddDay(new Date(1614049156378)) //指定时间字符串 2021-01-06
dateFormat.dateAddDay(new Date(1614049156378), 3) //指定时间戳并且day为正数 2021-01-09
dateFormat.dateAddDay(new Date(1614049156378), -3) //指定时间戳并且day为负数 2021-01-03
dateFormat.dateAddDay(new Date(1614049156378), -3, dateFormat.DATE_FORMAT.SDF_DATE_SECOND) //计算后并指定返回的格式 2021-01-03 10:16:05
```

#### 时间戳转换成指定的日期格式
- timestampDate(timestamp)

通过时间戳转换成日期，返回的数据格式相当于new Date()

| 参数              | 描述                           |
| ----------------- | ------------------------------ | 
| `timestamp`         | 必选、默认为当前时间    |

示例:
```
dateFormat.timestampDate() // 2021-04-07T01:39:25.882Z
dateFormat.timestampDate(1614049156378) // 2021-02-23T02:59:16.378Z
```
>如果`timestamp`传入的格式不对，会抛异常，请注意参数格式</font>

- timestampFormat(timestamp, format)

通过时间戳转换成指定的日期格式

| 参数              | 描述                           |
| ----------------- | ------------------------------ | 
| `timestamp`         | 可选、默认为当前时间    |
| `format`       | 可选、默认为`DATE_FORMAT.SDF_DATE_SECOND`,支持传多种日期格式,可以从常量里选择,也可以自定义  |

示例:
```
dateFormat.timestampFormat() //2021-02-23 15:21:03
dateFormat.timestampFormat(1614049156378) //2021-02-23 10:59:16
dateFormat.timestampFormat(1614049156378, dateFormat.DATE_FORMAT.SDF_DATE_CN) //2021年02月23日
```
>如果`timestamp`传入的格式不对，会抛异常，请注意参数格式</font>

- timestampToDate(timestamp)

通过时间戳转换成年月日(2021-02-23)格式,该方法把返回的日期格式是固定的;

| 参数              | 描述                           |
| ----------------- | ------------------------------ | 
| `timestamp`         | 可选、默认为当前时间    |

示例:
```
dateFormat.timestampToDate() //2021-02-23
dateFormat.timestampToDate(1614049156378) //2021-02-23
//相当于
dateFormat.timestampFormat(1614049156378, dateFormat.DATE_FORMAT.SDF_DATE) //2021-02-23
```

- timestampToDateTime(timestamp)

通过时间戳转换成年月日时分秒(2021-01-06 10:16:05)格式,该方法把返回的日期格式是固定的;

| 参数              | 描述                      |
| ----------------- | -------------------------| 
| `timestamp`       | 可选、默认为当前时间      |

示例:
```
dateFormat.timestampToDateTime() //2021-01-06 10:16:05
dateFormat.timestampToDateTime(1614049156378) //2021-01-06 10:16:05
//相当于
dateFormat.timestampFormat(1614049156378, dateFormat.DATE_FORMAT.SDF_DATE_SECOND) //2021-01-06 10:16:05
```
- timestampAddMonth(timestamp, month, format)

通过时间戳转换成指定格式,支持月份加减;

| 参数              | 描述                      |
| ----------------- | -------------------------| 
| `timestamp`       | 可选、默认为当前时间      |
| `month`       | 可选、正数增加，负数减少      |
| `format`       | 可选、默认返回SDF_DATE格式     |

示例:
```
dateFormat.timestampAddMonth() //timestamp没有传默认当天，也没有做月份增减处理 2021-04-06
dateFormat.timestampAddMonth(1614049156378) //指定时间戳 2021-02-23
dateFormat.timestampAddMonth(1614049156378, 3) //指定时间戳并且month为正数 2021-05-23
dateFormat.timestampAddMonth(1614049156378, -3) //指定时间戳并且month为负数 2020-11-23
dateFormat.timestampAddMonth(1614049156378, -3, dateFormat.DATE_FORMAT.SDF_DATE_SECOND) //计算后并指定返回的格式 2020-11-23 10:59:16
```
- timestampAddDay(timestamp, day, format)

通过时间戳转换成指定格式,支持天数加减;

| 参数              | 描述                      |
| ----------------- | -------------------------| 
| `timestamp`       | 可选、默认为当前时间      |
| `day`       | 可选、正数增加，负数减少      |
| `format`       | 可选、默认返回SDF_DATE格式     |

示例:
```
dateFormat.timestampAddDay() //timestamp没有传默认当天，也没有做天数增减处理 2021-04-06
dateFormat.timestampAddDay(1614049156378) //指定时间戳 2021-02-23
dateFormat.timestampAddDay(1614049156378, 3) //指定时间戳并且day为正数 2021-02-26
dateFormat.timestampAddDay(1614049156378, -3) //指定时间戳并且day为负数 2021-02-20
dateFormat.timestampAddDay(1614049156378, -3, dateFormat.DATE_FORMAT.SDF_DATE_SECOND) //计算后并指定返回的格式 2020-11-23 10:59:16
```
#### 时间字符串转换成指定的日期格式
- timeDate(time)
通过时间字符串转换成日期，返回的数据格式date相当于new Date()

| 参数              | 描述                           |
| ----------------- | ------------------------------ | 
| `time`         | 可选、默认为当前时间    |

示例:
```
dateFormat.timeDate() // 2021-04-07T01:43:43.397Z
dateFormat.timeDate(20210106101605570) // 2021-01-06T02:16:05.000Z
```

- timeFormat(time, format)
通过时间字符串转换成指定的格式

| 参数              | 描述                           |
| ----------------- | ------------------------------ | 
| `time`         | 可选、默认为当前时间    |
| `format`       | 可选、默认为`DATE_FORMAT.SDF_DATE_SECOND`,支持传多种日期格式,可以从常量里选择,也可以自定义  |

示例:
```
dateFormat.timeFormat() //2021-02-23 15:21:03
dateFormat.timeFormat(20210106101605570) //2021-01-06 10:16:05
dateFormat.timeFormat(20210106101605570, dateFormat.DATE_FORMAT.SDF_DATE_CN) //2021年01月06日
```

- timeToDate(time)
通过时间戳转换成年月日格式,该方法把返回的日期格式是固定的

| 参数              | 描述                           |
| ----------------- | ------------------------------ | 
| `time`         | 可选、默认为当前时间    |

示例:
```
dateFormat.timeToDate() //2021-02-23
dateFormat.timeToDate(20210106101605570) //2021-01-16
//相当于
dateFormat.timeToDate(20210106101605570, dateFormat.DATE_FORMAT.SDF_DATE) //2021-01-16
```

- timeToDateTime(time)
通过时间戳转换成年月日时分秒格式,该方法把返回的日期格式是固定的

| 参数              | 描述                           |
| ----------------- | ------------------------------ | 
| `time`         | 可选、默认为当前时间    |

示例:
```
dateFormat.timeToDateTime() //2021-01-06 10:16:05
dateFormat.timeToDateTime(20210106101605570) //2021-01-06 10:16:05
//相当于
dateFormat.timeToDateTime(20210106101605570, dateFormat.DATE_FORMAT.SDF_DATE_SECOND) //2021-01-06 10:16:05
```
- timeAddMonth(time, month, format)

通过时间字符串转换成指定格式,支持月份加减;

| 参数              | 描述                      |
| ----------------- | -------------------------| 
| `time`       | 可选、默认为当前时间      |
| `month`       | 可选、正数增加，负数减少      |
| `format`       | 可选、默认返回SDF_DATE格式     |

示例:
```
dateFormat.timeAddMonth() //time没有传默认当天，也没有做月份增减处理 2021-04-06
dateFormat.timeAddMonth(20210106101605570) //指定时间字符串 2021-01-06
dateFormat.timeAddMonth(20210106101605570, 3) //指定时间字符串并且month为正数 2021-04-06
dateFormat.timeAddMonth(20210106101605570, -3) //指定时间字符串并且month为负数 2020-10-06
dateFormat.timeAddMonth(20210106101605570, -3, dateFormat.DATE_FORMAT.SDF_DATE_SECOND) //计算后并指定返回的格式 2020-10-06 10:16:05
```
- timeAddDay(time, day, format)

通过时间字符串转换成指定格式,支持天数加减;

| 参数              | 描述                      |
| ----------------- | -------------------------| 
| `time`       | 可选、默认为当前时间      |
| `day`       | 可选、正数增加，负数减少      |
| `format`       | 可选、默认返回SDF_DATE格式     |

示例:
```
dateFormat.timeAddDay() //time没有传默认当天，也没有做天数增减处理 2021-04-06
dateFormat.timeAddDay(20210106101605570) //指定时间字符串 2021-01-06
dateFormat.timeAddDay(20210106101605570, 3) //指定时间戳并且day为正数 2021-01-09
dateFormat.timeAddDay(20210106101605570, -3) //指定时间戳并且day为负数 2021-01-03
dateFormat.timeAddDay(20210106101605570, -3, dateFormat.DATE_FORMAT.SDF_DATE_SECOND) //计算后并指定返回的格式 2021-01-03 10:16:05
```