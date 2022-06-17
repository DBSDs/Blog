---
sidebar_position: 2
---

# 全面了解JS中的Module


## 为什么需要Module

历史上，JavaScript 一直没有模块 Module 体系，无法将一个大程序拆分成互相依赖的小文件，再用简单的方法拼装起来。
:::tip 为什么要拆分?
如果将所有前端代码维护在一个文件中，那么基本没有可读性和可维护性可言。
:::

## Module是什么

那么很快地就可以讲出 Module 的定义：

它的出现就是为了拆分一个大文件，那么每个Module就是一个小文件，可以相互依赖，最终结果是拼装成一个大文件。

这样模块化的思想就很简单：把逻辑分块，各自封装，相互独立，每个块自行决定对外暴露什么，这个思想是所有 JavaScript Module  的基础。

我们也可以简单地写一个 Module 将代码定义封装在匿名闭包中。如下：

```js
var Foo = (function () {
  console.log('bar')
})();
// 'bar'
```

## 有哪几种常用的Module
:::tip 各种 Module 出现的原因
由于在 ECMAScript(ESM) 模块规范出现之前，原生浏览器并不支持 Module 的行为，而开发者们迫切的需要这样的行为。因此希望使用模块模式的库或代码库基于 JavaScript 的语法和词法特点“伪造”除了各种类似 Module 的行为。
:::

下面的图表可以简单概括下各种常用 Module 实现的适用场景和特点：

|           Module | 适用场景                                     | 特点                                                               |
|-----------------:|-------------------------------------------|------------------------------------------------------------------|
|    CommonJs(CJS) | 服务器，Node.js 使用了轻微修改版本的 CommonJs | 以服务器端为目标环境，不考虑网络延迟，一次性将所有模块都加载到内存中 |
|              AMD | 浏览器                                       | 以浏览器为目标环境,考虑网络延迟                                    |
| 通用模块定义 UMD | 创建 (AMD,CJS) 都可以使用的模块代码          | 启动时检测使用哪个模块系统，返回需要的逻辑包装。                     |
|  ECMAScript(ESM) | 原生浏览器支持的模块加载方式                 | 原生浏览器支持，同时吸收了AMD和CJS的一些优点，是集大成者             |

### CommonJs(CJS)

Node.js的模块系统，就是参照CommonJS规范实现的，CommonJS 对模块的加载时同步的。

>2009年，美国程序员Ryan Dahl创造了node.js项目，将javascript语言用于服务器端编程。
>这标志”Javascript模块化编程”正式诞生。前端的复杂程度有限，没有模块也是可以的，但是在服务器端，一定要有模块，与操作系统和其他应用程序互动，否则根本没法编程。

```js
var moduleB = require('./moduleB');

module.exports = {
  stuff: moduleB.doStuff();
}

```

虽然 CommonJS 解决了模块化的问题，但是 CommonJS 对模块的加载时同步的。也就是说，如果模块加载需要的时间很长，将会阻塞页面的渲染，使整个应用陷入卡顿状态。然而这对服务器端而言并不是什么问题，因为所有的模块早就下载存放在本地磁盘，不需要经过网络传输便可同步加载完成，等待的时间只有磁盘读取的时间。但是，这对浏览器而言，是个大问题，模块都放在客户端，等待的时间取决于网络传输效率。因此，浏览器端的模块，只能采用异步加载。这就是AMD规范诞生的背景。


### AMD
AMD的一般策略是让模块声明自己的依赖，而运行在浏览器中的模块系统会按需依赖，并在依赖加载完成后立即执行依赖他们的函数。

AMD实现的核心是用函数包装模块定义。这样可以防止声明全局变量，并允许加载器控制何时加载模块。

```js

// ID为 'moduleA'的模块定义。modulesA依赖moduleB
// moduleB会异步加载
definde('moduleA', ['moduleB'], function(moduleB) {
  return {
    stuff: moduleB.doStuff()
  }
})

```

### UMD

为了统一 CommonJS 和 AMD 生态系统，通用模块定义规范应运而生。 UMD 可用于创建这个两个系统都可以使用的模块代码。

本质上，UMD定义的模块会在启动时检查要使用哪个模块，然后适当配置，并把所有逻辑包装在有一个立即调用的函数式里。

下面是一个依赖的UMD模块定义的示例:

```js
(function (root, factory) {
  if(typeof define === 'function' && define.amd) {
    // amd 注册为匿名模块
    define(['moduleB'],factory);
  } else if (typeof module === 'object' && module.exports) {
    // Node。不支持严格CommonJS
    module.exports === factory(require('moduleB'));
  } else {
    // 浏览器全局上下文
    window.returnExports = factory(window.moduleB)
  }
}(this, function() {
  // 以魔种方式使用moduleB
  return {}
}) )
```

UMD应用由构建工具自动生成。开发者只要专注于模块的内容，而不必关系这些样板代码。

### ECMAScript(ESM)

随着 ECMAScript6 模块规范得到越来越广泛的支持，其他模块引入模式可能会走向没落。

常用写法：
```js
import { foo } from './js/export.js'
function foo2() {
  console.log('foo');
}
export default foo2;
```

ECMAScript6 吸收了 AMD 和 CJS 的许多优秀特性，比如
* 模块代码只在加载后执行
* 模块只能加载一次
* 模块是单例
* 模块可以定义公共接口，其他模块可以基于这个公共接口观察和交互
* 模块可以请求加载其他模块
* 支持循环依赖