---
sidebar_position: 5
---

# 你不知道的 Javascript（上）

快速的总结一本经典的书

:::note 通常是我的一家之言
将我觉得重点的东西快速的抄写或者简写下来
:::
## 1.作用域

### 1.1 编译原理

尽管通常将Javascript归类为“动态”或“解释执行”语言，但事实上他是一门编译语言

编译流程大致如下：

* 分词/词法分析（Tokenizing/Lexing）
* 解析/语法分析（Parsing）
* 代码生成

### 1.2 理解作用域

* RHS查询：赋值表达式右侧查询，例： 1. = a 2. console.log(a) 

* LHS查询：赋值表达式左侧查询


### 1.3 作用域链

### 1.4 异常

* RenfenceError：作用域链上没有找到

* TypeError：类型错误调用
## 2.词法作用域

编译器的第一阶段叫做词法化

### 2.2 欺骗词法

* eval 

非严格模式下
```js
function foo(str, a) {
  eval(str)
  console.log(a, b)
}

var b = 2

console.log('var b = 3', 1) // 1, 3
```

* with
```js
var obj = {
  a: 1,
  b: 2,
  c: 3
}
with(obj) {
  a = 3;
  b = 4;
  c = 5;
}
```

### 2.3 性能
使用with和eval的性能是拉胯的。
原因在于： javaScript引擎会在编译阶段进行数项的性能优化。其中有些优化依赖于能够根据代码词法进行静态分析，并预先确定所有变量和函数的定义位置，才能在执行过程中快速找到标志符。

## 3.函数作用域和块作用域

### 3.1 函数作用域

### 3.2 隐藏内部实现

```js
function doSomething (a) {
  b = a + doSomethinElse( a * 2)

  console.log( b * 3)
}

function doSomethinElse(a) {
  return a - 1
}

var b

dosomething(2) // 15
```

### 3.3 规避冲突

* 全局命名空间
* 模块管理

### 3.4 函数作用域

* 匿名和具名

```js
setTimeout(function () {
  console.log('wait a second')
},1000)
```

* 立即执行函数
```js
var a = 2
(funtion() {
  var a = 3;
  console.log(a) // 3
})()

console.log(a) // 2
```

### 3.5 块作用域

## 4.提升

```js
console.log(a) 

var a = 2
```
输出 undefined

### 4.1 编译器

编译分为两个阶段 
1. 编译
2. 执行

var a = 2 被编译成 var a; a = 2

### 4.2 函数优先

函数声明和变量声明都会被提升。但是一个值得注意的细节是函数首先会被提升，然后才是变量

```js
foo()

var foo()

function foo () {
  console.log(1)
}

foo = function () {
  console.log(2)
}
```
foo() 会输出 1

重复出现的声明，后面会覆盖掉前面的

## 5.作用域闭包

### 5.1 实质问题
闭包直截了当的定义：

当函数可以记住并访问所在的词法作用域的时候，就产生了闭包，即使函数实在当前词法作用域外执行的

```js
function foo() {
  var a = 2;

  function bar () {
    console.log(a)
  }
  
  bar()
}

foo()
```

```js
function foo() {
  var a = 2

  function bar() {
    console.log(a)
  }

  return bar
}

var baz = foo()

baz()
```

闭包会使内部作用域一直在被使用

### 5.3 循环和闭包

要说明闭包，for循环是最常见的例子
```js
for(var i = 1; i <= 5; i++) {
  setTimeout(function timer() {
    console.log(i)
  },1000)
}
```

会输出六次5

### 5.4 模块

```js

function foo() {
  var something = 'cool'
  var anthor = [1,2,3]

  function doSomething() {
    console.log(something)
  }

  function doAnthor () {
    console.log(anthor.join('|'))
  }
}
```

### 5.5 现代模块机制

```js
var MyModules = (function () {
  var modules = {}

  function define(name, deps, impl) {
    for(var i = 0; i < deps.length; i++) {
      deps[i] = modules[deps[i]]
    }
    modules[name] = impl.apply(impl, deps)
  }
  
  function get(name) {
    return modules[name]
  }

  return {
    define,
    get
  }
}) 
```
代码核心是modules[name] = impl.apply(impl, deps)

### 5.6 未来的模块机制

## 6 块作用域的代替方案

```js
try{throw 2}catch(e){console.log(e)}
console.log(e)
```

# 第二部分

## 1 关于 this

### 1.1 this
```js
function identify() {
  return this.name.toUpperCase()
}

function speak() {
  var greeting = "Hello, I',m" + identify.call(this)
  console.log(greeting)
}

var me = {
  name: "Kyle"
}

var you = {
  name: "Reader"
}

identify.call(me)  // KYLE
identify.call(you) // REEADER

speak.call(me) // Hello,我是KYLE
speak.call(you) // Hello,我是REANDER
```

如果不使用this，这需要显式传递上下文
```js
function identify(context) {
  return context.name.toUpperCase()
}
function speak(context) {
  var greeting = "Hello, I',m" + identify(context)
  console.log(greeting)
}
identify(you) // REANDER
speak(me) // hello,我是KYLE
```

### 1.2 两个误解

1. 误解1：指向自身

```js
function foo(num) {
  console.log('foo:' + num)
  this.count++
}

foo.count = 0

for(i = 0; i < 10; i++) {
  if(i > 5) {
    foo(5)
  }
}

console.log(foo.count) // 0

```
2. 误解2: 它的作用域

this并不指向函数的作用域

```js
function foo() {
  var a =2
  this.bar()
}
function bar() {
  console.log(this.a)
}
foo() // RefenrenceError: a is not defined
```

### 1.3 this 到底是什么

this实在运行时绑定的，并不是在编写时绑定的。它的上下文取决于函数调用的各种条件。this的绑定和函数的声明的位置没有任何关系，只取决于函数的调用方式。

## 2 this的全面解析

### 2.1 调用位置

* 调用栈
* 调用位置

```js
function baz() {
  // 当前的调用栈是： baz
  // 因此当前调用位置是全局作用域
  console.log('baz')
  bar()
}

function bar() {
  // 当前的调用栈是 baz --> bar
  // 当前的调用位置是baz
  console.log('bar')
  foo()
}

function foo() {
  // 当前的调用栈是 baz --> bar --> foo
  // 当前的调用位置是bar
  console.log('foo')
}
baz()
```
### 2.2 绑定规则

函数的执行过程中的调用位置根据4条规则来决定this的绑定对象

四条规则有优先级排序

1. 默认绑定
```js
function foo() {
  console.log(this.a)
}
var a = 2 
foo() // 2
```
this的默认绑定对象是全局作用域

2. 隐式绑定

调用位置是否有上下文对象
```js
function foo() {
  console.log(this.a)
}
var obj = {
  a: 2,
  foo: foo
}
obj.foo() // 2
```

3. 显式绑定

```js
function foo() {
  console.log(this.a)
}
var obj = {
  a: 2
}
foo.call(obj)
```

如果你传入了一个原始值来当作this的绑定对象。这个行为叫装箱。

4. new 绑定

new会执行下面的操作

1.创建一个全新的对象
2.这个新对象会被执行[[原型]]连接
3.这个新对象会被绑定到函数调用的this
4.如果函数中没有返回其他的对象，那么new表达式中的函数调用会自动返回该对象


### 2.3 判断顺序

1. 函数是否在new中调用（new绑定）?如果是的话this绑定的新创建的对象。
var bar = new foo()

2. 函数是否通过call、apply（显式绑定）或者硬绑定调用？如果是的话，this绑定的是指定的对象。
var bar = foo.call(obj2)

3. 函数是否在某个上下文对象中调用（隐式绑定）？如果是的话，this绑定的是那个上下文对象。
var bar = obj1.foo()

4. 如果都不是的话，使用默认绑定。如果在严格模式下，就绑定到undefined，否则绑定到全局对象。
var bar = foo()

### 2.4 绑定例外

#### 被忽略的this
foo.call(null)

```js
function foo(a,b) {
  console.log('a': + a ,'b:' + b)
}
// apply可以将参数变成数组
foo.apply(null, [2, 3])
// 使用bind(...)进行柯里化
var bar = foo.bind(null, 2)
bar(3) // a:2, b:3
```
这两种方案都需要传入一个参数来当作this的绑定对象，如果你不关心this的话，可以传入null作为占位符。
#### 更安全的this
```js
function foo(a,b) {
  console.log('a': + a ,'b:' + b)
}
var 🀄️ = Object.create(null)
// apply可以将参数变成数组
foo.apply(🀄️, [2, 3])
// 使用bind(...)进行柯里化
var bar = foo.bind(🀄️, 2)
bar(3) // a:2, b:3
```

#### 间接引用

```js
function foo() {
  console.log(this.a)
}
var a = 2;
var o = { a: 3, foo: foo }
var p = { a: 4 }
o.foo() // 3
(p.foo = o.foo)() // 2
```
p.foo = o.foo 返回的是目标函数的引用。因此调用位置是foo()而不是p.foo()

#### 软绑定

### 2.5 this词法

箭头函数的绑定不会改变，即使是new

## 3.对象
### 3.1 语法
对象可以通过两种形式定义：声明（文字）形式和构造形式
* 声明（文字）形式
```js
var obj = {
  key: value
  // ...
}
```

* 构造形式
```js
var myObj = new Object()
myObj.key = value
```
### 3.2 类型

### 3.3 内容（属性)

#### 3.3.1 可计算属性名
es6 增加了可计算属性名，可以在文字形式中使用[]包裹一个表达式来当作属性名
```js
var prefix = 'foo';
var myObject = {
  [prefix + 'bar']: 'hello',
  [prefix + 'baz']: 'world' 
}
myObject['foobar']; // 'hello'
myObject['foobaz']; // 'world'
```

#### 3.3.5 属性描述符

```js
var myObject = {
  a: 2
}

Object.getOwnPropertyDescriptor(myObject, "a")
// {
//   value: 2,
//   writable: true,
//   enumerable: true,
//   configurable: true
// }

Obejct.defineProperty(myObject, "FAVORITE_NUMBER", {
  value: 42,
  writable: false,
  configurable: false
})
```

#### 3.3.9 Getter和Setter

## 4 混合对象“类”

### 4.3 类的继承

```js
class Vehicle {
  engines = 1
  ignition() {
    output("Turning on my engine.")
  }
  drive() {
    ignition();
    output("Steering and moving forward")
  }
}
class Car inherits Vehicle {
  wheels = 4
  drive() {
    inherited: drive()
    output("Rolling on all", wheels, "wheels!")
  }
}
class SpeedBoat inherits Vehicle {
  engines = 2
    ignition() {
    output("Turning on my ",engines, " engines.")
  }
  pilot() {
    inherited:drive()
    output("Speeding through the water with ease")
  }
}
```

### 4.4 混入

* 显式混入
```js
function mixin(sourceObj, targetObj) {
  for(var key in sourceObj) {
    // 只会在不存在的情况下复制
    if(!(key in targetObj)) {
      targetObj[key] = sourceObj[key]
    }
  }
  return targeetObj
}
var Vehicle = {
  engines: 1,
  
  ignition: function() {
    console.log("Turning on my engine.")
  }

  drive: function() {
    this.ignition();
    console.log("Steering and moving forward.")
  }
}
var Car = mixin(Vehicle, {
  wheels: 4,

  drive: function() {
    Vehicle.drive.call(this);
    console.log("Rolling on all" + this.wheels + " wheels!")
  }
})
```

显式混入的另一种变体被称为“寄生继承”，它既是显式的又是隐式的

```js
function Vehicle() {
  this.engines = 1;
}
Vehicle.prototype.ignition = function() {
  console.log("Turning on my engine.")
}
Vehicle.prototype.drive = function() {
  this.ignition();
  console.log("Steering and moving forward!");
}
// “寄生类”Car
function Car() {
  // 首先，car是一个Vehicle
  var car = new Vehicle();

  // 接着对car进行定制
  car.wheels = 4;

  // 保存到Vehicle::drive()的特殊引用
  var vehDrive = car.drive;

  // 重写Vehicle::drive()

  car.drive = function() {
    vehDrive.call(this)
    console.log("Rolling on all" + this.wheels + "wheels!")
  }

  return car;
}
var myCar = new Car();

myCar.drive()

```

* 隐式混入

```js
var Something = {
  cool: function() {
    this.greeting = "Hello wrold"
    this.count = this.count ? this.count + 1 : 1
  }
}
Something.cool();
Something.greeting; // "Hello World"
Something.count; // 1

var Another = {
  cool: function() {
    Something.cool.call(this)
  }
}

Another.cool();
Another.greeting; // "Hello World"
Another.count // 1(count不是共享状态)
```

## 5. 原型

### 5.1 [[prototype]]
JavaScript中的对象有一个特殊的[[prototype]]的内置属性，其实就是对其他对象的引用。几乎所有的对象在创建时[[prototype]]属性都会被赋予一个非空的值。当然[[prototype]]连接可以为空，虽然很少见。

对于一个对象来说，使用[[Get]]操作首先会检查对象本身是否有这个属性

没有的话就要从prototype链条中去查找了

#### 5.1.1 Object.prototype

普通的 [[prototype]] 的尽头是 Object.prototype。由于所有的对象都源于Object.prototype。所以他包含 Javascript 中许多通用的功能。

比如说**toString()**、**valueof()**、**hasOwnProperty**、**isPrototypeOf**。

#### 5.1.2 属性设置和屏蔽


```js
myObject.foo = 'bar'
```
1. 如果 myObject 对象中包含名为 foo 的属性，那么会改变 foo。
2. 如果 foo 不存在于 myObject中，[[prototype]]链就会被遍历，如果[[prototype]]链中不存在 foo，foo就会被直接提添加在 myObject 中。
3. 如果 foo 出现在[[prototype]]链中而不在 myObject 中，那么 myObject.foo = 'bar' 有三种情况
   1. 如果[[prototype]]链上存在名为foo的普通数据访问属性，并且没有被标记为只读(writable:true)，那就会直接在 myObject 中添加一个名为foo的新属性，屏蔽[[prototype]]链的属性。
   2. 如果被标记为只读(writable:false)，那么无法创建和修改，将会抛出一个错误
   3. 如如果[[prototype]]链上存在是一个setter，那就一定会调用这个setter，foo 不会被添加到 myObject 中，也不会重新定义 foo 这个 setter。
4. 如果 foo 既出现在[[prototype]]链也出现在myObject，那么就会发生屏蔽。[[prototype]]链上的foo属性会被屏蔽。

### 5.2 “类”

#### 5.2.1 “类”函数

```js
function foo() {

}

var a = new foo()

Object.getPrototypeOf(a) === Foo.prototype // true
```

#### 5.2.2 构造代码

```js
function NothingSpecial() {
  console.log("Don't mind me")
}

var a = new NothingSpecial()
// "Don't mind me!"
```
在 JavaScript 中对于“构造函数”最为准确的解释是，所有带 new 的函数调用。

函数不是构造函数，但是当切仅当使用 new 时，函数调用会变成“构造函数调用”。

### 5.3 原型继承

## 6 行为委托

### 6.1 面向委托的设计

#### 6.1.1 类理论

类理论鼓励继承和多态
设计思路：
定义一个通用父（基）类，可以将其命名为 Task，在 Task 类中定义所有任务都有的行为。接着定义子类，它们都基层自 Task 并会添加一些特殊的行为来处理对应的任务。

#### 6.1.2 委托理论
设计思路：
首先你会定义一个名为 Task 的对象，它会包含所有任务都可以使用的具体行为。接着，对于每个任务你都会定义一个对象来存储对应的数据和行为。你会把特定的任务对象都关联到 Task 功能对象上，让它们在需要的时候可以进行委托
```js
Task = {
  setId: function(ID) { this.id = ID },
  outputID: function() { console.log(this.id) }
}

XYZ = Object.create(Task)

XYZ.prepareTask = function(ID, Label) {
  this.setID(ID)
  this.label = label
}

// ABC = Object.create(Task)
// ABC ...= ...
```

### 6.2 类和对象

### 6.3 更简洁的设计

### 6.4 更好的语法

### 6.5 自省

判断对象中的属性类型

（完）