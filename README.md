# xms-basic-util
js基础工具类集合,集成方便后期调用，通过webpack编译，支持多种平台，如es6、node、浏览器引入等
## 使用
### es6方法
- 安装
```
npm install xms-basic-util
```
- 导入
```
import xmsBasicUtil from 'xms-basic-util'
//日期转换工具对象
const dateFormat = xmsBasicUtil.dateFormat;
//数字处理工具对象
const mathUtil = xmsBasicUtil.mathUtil;
```
>因为导入后把库赋值给`xmsBasicUtil`变量,所以使用`xms-basic-util`都通过变量`xmsBasicUtil`
>因为xms-basic-util库里有多个工具类集合，通过`xmsBasicUtil.dateFormat`获取日期转换工具类;其它工具类使用类似的方法获取。

下面是各工具类对象的详细说明
- #### [日期转换工具](markdown/dateFormat.md)
- #### [数字处理工具](markdown/mathUtil.md)
