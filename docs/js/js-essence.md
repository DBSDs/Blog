---
sidebar_position: 4
---

# JavaScirpt语言精粹

快速的总结一本经典的书

:::note 通常是我的一家之言
将我觉得重点的东西快速的抄写或者简写下来
:::
## 1.精华

### 优秀的想法

**函数、弱类型、动态对象**和富有表现力的**对象字面量表示法**。

### 糟糕的想法

**全局变量的编程模型**

:::note 强类型并不会让测试工作更轻松
实践中，在工作中类型检查找到的错误并不是让人头疼的地方。

所以我认为 **typescript** 的主要作用其实是在代码里写注释（提高可读性和可维护性)，编译检查并不能算是优点
:::

## 2.语法

### 空白 

### 注释

使用 // 代替 /* */，因为后者在正则中可能出现 

### 标志符

不允许在对象字面量中

### 数字

避免了短整型的溢出

### 字符串

### 语句

typeof 产生的值有'number'、'string'、'boolean'、'undefined'、'function'和'object'

## 3.对象

### 数据类型

javascript 的简单数据类型包括 数字、字符串、布尔值、null和undefined，其他都是对象。对象是无类型的。他对新类型的属性没有限制

### 字面量

### 检索

可使用.或[]，优先使用.，因为更紧凑且可读性更好。如果尝试检索一个不存在的值，将会返回undefined

### 更新

### 引用

### 原型

每个对象都连接到一个原型对象。并且可以从中继承属性。原型无法被更新，但可以被检索出来。

给object增加一个create方法，这个方法创建一个使用原对象作为其原型的新对象。

```js
if (typeof Object.beget !== 'function') {
  Object.create = function (o) {
    var F = function () { }
    F.prototype = o
    return new F()
  }
}
var another = Object.create(stooge)
```

原型连接只有在检索的时候才可以被用到。如果我们尝试获取对象的某个值，但对象没有该属性名，那么 javaScript 会从原型对象中获取属性值。如果这个原型对象中也没有，那么他会从原型对象的原型对象中获取。以此类推，最终会返回到Object.prototype。如果该属性完全不存在在原型链中，那么结果就是 undefined。这个过程被称作委托。

原型关系是动态的，在链中添加一个属性，那么立刻在所有基于该原型创建的对象均可见

### 反射

使用typeof 检查该属性是否为函数；使用hasOwnPrototype()检查，该函数不会返回原型链


### 枚举

for in 会包含不需要的原型链。

### 删除

### 全局变量

只创建一个对象，所有的变量都在该对象下

## 4.函数

在 javaScript 中，函数就是对象，函数对象连接到Function.prototype。该原型对象本身连接到Object.prototype。函数的与众不同就在于他可以被调用。

### 函数字面量

函数字面量可以出现在任何表达式出现的地方。函数也可被定义到其他函数中。一个函数除了可以访问自己的参数和变量，也可以自由访问把他嵌套在其中的副函数的变量和参数。通过函数字面量创建的对象包含一个连到外部上下文的连接。这被称为闭包（closure)。它是 javascript 强大表现力的来源。

### 调用

调用一个函数会暂停当前函数的执行，传递控制权和参数给新函数。除了声明时定义的形式参数，每个函数额外接收两个参数：this和arguments。参数this在面向对象编程中十分重要。它的值取决于调用的模式。javaScript 中一共有4种调用模式：方法调用模式、函数调用模式、构造器调用模式和apply调用模式。如果函数穿参的参数过少，则其与形式参数为undefined。过多的传参会被忽略。

#### 方法调用模式

当一个函数被保存为对象的一个属性时，我们称他为一个方法。当一个方法被调用时，this被绑定到该对象。

```js
var myObject = {
  value: 0,
  increament: function (inc) {
    this.value += typeof inc === 'number' ? inc : 1
  }
}
```

#### 函数调用模式

当一个函数并非一个对象的属性时，那么他就是被当作一个函数来调用的。
```js
var sum = add(3, 4)
```

此模式调用函数时，this被绑定到全局对象，不能利用内部函数来帮助他工作。不过有一个很容易的解决方案

```js
myObject.double = function () {
  var that = this // 解决方案
  var helper = function () {
    that.value = add(that.value, that.value)
  }
  helper()
}
```

#### 构造器调用模式

如果在一个函数前面带上new来调用，那么背地里将会创建一个连接到该函数的 prototyp 成员的新对象，同时this会被绑定到那个新对象上。

```js
// 创建一个名为 Quo 的构造器函数，它构造一个带有 status 属性的对象
var Quo = function (string) {
  this.suatus = string;
}
// 给 Quo的所有实例提供一个名为get_status 的公共方法
Quo.prototype.get_status = function () {
  return this.status
}

// 构造一个Quo实例
var myQuo = new Quo("confused")
document.writeln(myQuo.get_status()) // 打印显示”confused”
```
#### apply调用模式

因为 javaScript 是一门函数式的面向对象编程语言，所有函数可以拥有方法。

apply方法让我们构建一个参数数组传递给调用函数。它也允许我们选择this的值。

```js
// 构建一个包含两个数字的数组，并将它们相加。
var arrray  = [3, 4]
var sum = add.apply(null, array)  // sum值为 7

// 构造一个包含status 成员的对象
var statusObject = {
  status: 'A-OK'
}

// statusObject 并没有继承自Quo.prototype,但我们可以在statusObject 上
// 调用get_status 方法，尽管statusObject 并没有一个名为get_status的方法
var status = Quo.prototype.get_status.apply(statusObject)
// status 值为 'A-Ok'
```

### 参数

### 返回

如果函数调用时，且返回值不是一个对象，则返回 this

### 异常

### 扩充类型的功能

### 递归

javascript 没有提供尾递归的优化

### 作用域

尽管 javscript 貌似支持块级作用域，但是实际上并不支持

不过 javascript 拥有函数作用域。

::: note
目前javascript 在 es 标准的推动下已经支持，let 和 const 都是受限于块级作用域的
:::

### 闭包

通过调用一个方法的形式去初始化myObject
```js
var myObject = (function () {
  var value = 0
  
  return {
    increament: function (inc) {
      value += typeof inc === 'number' ? inc : 1
    }
    getValue: function () {
      return value
    }
  }
}())
```

可以通过这种形式设计一个私有变量

```js
// 创建一个名为quo的构造函数
// 它构造出带有 get_status 方法和 status 私有属性的一个变量
var quo = function (status) {
  return {
    get_status: function () {
      return status
    }
  }
}

var myQuo = quo("amazed")
```
因为 get_status 方法并不是访问该参数的一个副本，它访问的是该参数本身。因为该函数可以访问它被创建时的上下文环境，这被称为是闭包

有个更有用的例子：
```js
// 定义一个函数，它设置一个DOM节点为黄色，然后把它渐变为白色
var fade = function (node) {
  var level = 1
  var step = function () {
    var hex = level.toString(16)
    node.style.backgroundColor = '#FFFF' + hex + hex
    if (level < 15) {
      level += 1
      setTimeout(step, 100)
    }
  }
  setTimeout(step, 100)
}
fade(document.body)
```

### 回调

需要响应的函数

### 模块

### 级联

返回this，可以使用下面的代码
```js
getElement('myDiv')
.move(350, 150)
```

### 柯里化

### 记忆

## 5.继承

在基于类的语言中，对象是类的实例，并且类可以从另一个类中继承。javaScript 是一门基于原型的语言，这也意味着对象可以其他对象继承

### 伪类

### 对象说明符

### 原型

摒弃类，专注于对象

```js
// 我们先用字面量构建一个有用的对象
var myMammal = {
  name: 'Herb the Mammal',
  get_name: function () {
    return this.name
  }
  says: function () {
    return this.saying || ''
  }
}
// 可以通过之前的 Object.create() 快速构造出更多实例
var myCat = Object.create(myMammal)
myCat.name = 'Henrietta'
myCat.saying = 'meow'
myCat.purr = function (n) {
  var i, s = ''
  for (i = 0; i < n; i += 1) {
    if (s) {
      s += '-'
    }
    s += 'r'
  }
  return s
}
```
这是一种差异化继承

### 函数化

### 部件

## 6.数组

### 数组字面量

```js
var numbers = ['zero', 'one', 'two', 'three', 'four']
var numbers_object = { 0: 'zero', 1: 'one', 2: 'two', 3: 'three', 4: 'four'}
```
### 长度

### 删除

### 枚举

### 方法

### 指定初始值

## 7.正则表达式

javascript 的正则表达式特性借鉴自 perl

### 例子

### 结构

### 元素

### 正则表达式序列

### 正则表达式因子

### 正则表达式转义

### 正则表达式分组

### 正则表达式字符集

### 正则表达式量词

## 8.方法

### Array

#### Array.concat(...item)

#### Array.join(separator)

#### Array.pop()

#### Array.push(...item)

#### Array.reverse()

#### Array.shift()

移除数组中的的一个元素

#### Array.slice(start, end)

#### Array.soft()

#### Array.splice()

#### Array.unshift(item)

### Function

#### Function.apply(thisArg. ArgArray)

### Number

#### number.toExponential(fractionDigits)

#### number.toFixed(fractionDigits)

#### number.toPrecision(fractionDigits)

控制数字精度

#### number.toString(radix)

radix 位数

### Object

#### object.hasOwnProperty(name)

### Regexp

#### regexp.exec(string)

#### regexp.test(string)

### String

#### string.charAt(pos)

#### string.charCodeAt(pos)

#### string.concat(string...)

#### string.indexOf(searchString, positoin)

#### string.lastIndexOf(searchString, positoin)

#### string.localeCompare(that)

#### string.match(regexp)

#### string.replace(searchValue, replaceValue)

#### string.search(regexp)

#### string.slice(start, end)

#### string.split(separator, limit)

#### string.subString(start, end)

#### string.tolocaleLowerCase()

#### string.tolocaleUpperCase()

#### string.toLowerCase()

#### string.toUpperCase()

#### string.fromCharCode()

## 9.代码风格

## 10.优美的特性

## 附1:毒瘤

### 浮点数

二进制的浮点数不能正确地处理十进制的小数，因此0.1 + 0.2 不等于 0.3。可以通过指定精度来避免

### NaN

（完）