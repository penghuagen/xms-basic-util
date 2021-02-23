# 日期转换工具使用说明
## dateFormat对像
### 常量
在`dateFormat`对象中，有一个`DATE_FORMAT`常量对像，该常量列举了一些常用的日期格式，可以通过`dateFormat.DATE_FORMAT`来获取，在调用方法时，可以传入对应的常用获取指定的日期格式，常量说明

| 名称              | 格式                           | 转换后日期格式                  |
| ----------------- | ------------------------------ | ------------------------ |
| `SDF_DATE`         | `yyyy-MM-DD`     | 2021-02-23 |
| `SDF_DATE_SECOND`       | `yyyy-MM-dd HH:mm:ss`                       | 2021-02-23 14:42:15 |
| `SDF_DATE_MINUTE` | `yyyy-MM-dd HH:mm`                   | 2021-02-23 14:42 |
| `SDF_DATE_MONTH_MINUTE`      | `MM-dd HH:mm`                  | 02-23 14:42 |
| `SDF_HOUR_TIME`        | `HH:mm:ss`                 | 14:02:15            |
| `SDF_DATE_CN`        | `yyyy年MM月dd日`           | 2021年02月23日   |
### 方法
#### 时间戳转换成指定的日期格式
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
#### 时间字符串转换成指定的日期格式
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