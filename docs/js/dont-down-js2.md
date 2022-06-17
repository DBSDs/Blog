---
sidebar_position: 6
draft: true
---
# 你不知道的 Javascript（中）

快速的总结一本经典的书

:::note 通常是我的一家之言
将我觉得重点的东西快速的抄写或者简写下来
:::
## 1.类型

JavaScript 有7中内置类型

* 空值(null）
* 未定义(undefined)
* 布尔值(boolean)
* 数字(number)
* 字符串(string)
* 对象(object)
* 符号(symbol)

## 2. 值

数组(Array)、字符串(string)、数字(number)


## 3. 原生函数

* String()
* Number()
* Boolean()
* Array()
* Object()
* Function()
* RegExp()
* Date()
* Error()
* Symbol()

使用常量和使用构造函数的效果是一样的（创建的值都是通过封装对象来包装)。应该尽量避免使用构造函数。

## 4. 强制类型转换

强制类型转换分为隐式类型转换和显式类型转换

```js
var a = 42

var b = a + ''    // 隐式

var c = String(a) // 显式
```