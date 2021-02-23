# 日期转换工具使用说明

## 使用
### es6使用方法
- 安装
```
npm install xms-basic-util
```
- 导入
```
import xmsBasicUtil from 'xms-basic-util'
//获取日期转换工具
const dateformat = xmsBasicUtil.dateformat
```
>注意:因为导入后把库赋值给`xmsBasicUtil`变量,以下使用`xms-basic-util`都通过变量`xmsBasicUtil`
>因为xms-basic-util库里有多个工具类，通过`xmsBasicUtil.dateformat`使用日期转换工具类，我刚才把该对像赋值给了`dateformat`，所有跟日期相关的常量及方法都在这个对象里;
>下面是该对象的详细说明

## dateformat对像
### 常量
在`dateformat`对象中，有一个`DATE_FORMAT`常量对像，可以通过`dateformat.DATE_FORMAT`来获取，在调用方法时，可以传入对应的常用获取指定的日期格式，常量说明

| 名称              | 格式                           | 转换后日期格式                  |
| ----------------- | ------------------------------ | ------------------------ |
| `SDF_DATE`         | `yyyy-MM-DD`     | 2021-02-23 |
| `SDF_DATE_SECOND`       | `yyyy-MM-dd HH:mm:ss`                       | 2021-02-23 14:42:15 |
| `SDF_DATE_MINUTE` | `yyyy-MM-dd HH:mm`                   | 2021-02-23 14:42 |
| `SDF_DATE_MONTH_MINUTE`      | `MM-dd HH:mm`                  | 02-23 14:42 |
| `SDF_HOUR_TIME`        | `HH:mm:ss`                 | 14:02:15            |
| `SDF_DATE_CN`        | `yyyy年MM月dd日`           | 2021年02月23日   |
### 方法
主要分两大类，1、通过时间戳转对应的格式，2、通过日期字符串转对应的格式。
#### 时间戳转换成指定的日期格式
- timestampFormat(timestamp, format)

通过时间戳转换成指定的格式,需要两个参数:timestamp和format，<br/>
如果 timestamp没有传，默认为当前时间;<br/> 
format是要指定返回的日期格式，默认为`DATE_FORMAT.SDF_DATE_SECOND`
```
dateformat.timestampFormat() //2021-02-23 15:21:03
dateformat.timestampFormat(1614049156378) //2021-02-23 10:59:16
dateformat.timestampFormat(1614049156378, dateformat.DATE_FORMAT.SDF_DATE_CN) //2021年02月23日
```
<font color=red>如果timestamp传入的格式不对，会抛异常，请注意参数格式</font>

- timestampToDate(timestamp)

通过时间戳转换成年月日格式,该方法把返回的日期格式是固定的，只需要一个参数:timestamp，<br/>
如果 timestamp没有传，默认为当前时间;
```
dateformat.timestampToDate() //2021-02-23
dateformat.timestampToDate(1614049156378) //2021-02-23
//相当于
dateformat.timestampFormat(1614049156378, dateformat.DATE_FORMAT.SDF_DATE) //2021-02-23
```

- timestampToDateTime(timestamp)

通过时间戳转换成年月日时分秒格式,该方法把返回的日期格式是固定的，只需要一个参数:timestamp，<br/>
如果 timestamp没有传，默认为当前时间;
```
dateformat.timestampToDateTime() //2021-01-06 10:16:05
dateformat.timestampToDateTime(1614049156378) //2021-01-06 10:16:05
//相当于
dateformat.timestampFormat(1614049156378, dateformat.DATE_FORMAT.SDF_DATE_SECOND) //2021-01-06 10:16:05
```

#### 时间字符串转换成指定的日期格式
- timeFormat(time, format)

通过时间字符串转换成指定的格式,需要两个参数:time和format，<br/>
如果 time没有传，默认为当前时间;<br/> 
format为要指定返回的日期格式，默认为DATE_FORMAT.SDF_DATE_SECOND
```
dateformat.timeFormat() //2021-02-23 15:21:03
dateformat.timeFormat(20210106101605570) //2021-01-06 10:16:05
dateformat.timeFormat(20210106101605570, dateformat.DATE_FORMAT.SDF_DATE_CN) //2021年01月06日
```

- timeToDate(time)

通过时间戳转换成年月日格式,该方法把返回的日期格式是固定的，只需要一个参数:time，<br/>
如果 time没有传，默认为当前时间;
```
dateformat.timeToDate() //2021-02-23
dateformat.timeToDate(20210106101605570) //2021-01-16
//相当于
dateformat.timeToDate(20210106101605570, dateformat.DATE_FORMAT.SDF_DATE) //2021-01-16
```

- timeToDateTime(time)

通过时间戳转换成年月日时分秒格式,该方法把返回的日期格式是固定的，只需要一个参数:time，<br/>
如果 time没有传，默认为当前时间;
```
dateformat.timeToDateTime() //2021-01-06 10:16:05
dateformat.timeToDateTime(20210106101605570) //2021-01-06 10:16:05
//相当于
dateformat.timeToDateTime(20210106101605570, dateformat.DATE_FORMAT.SDF_DATE_SECOND) //2021-01-06 10:16:05
```