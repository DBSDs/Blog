---
sidebar_position: 11

---

# mvvm是什么

首先先了解一下mvc是什么:
* M 数据
* V 视图
* C 控制器

* M Modal 数据
* V View 视图
* MV 数据视图

数据视图取代控制器，为什么？

1. MVC是单向通信
2. MVC中大量的dom操作使页面渲染性能降低

## Vue中VM的表现

vm 通过视图绑定数据
```js
input.addEventListener('change', (e) => {
  this.data = e.target.value
})
```
mv 通过数据绑定试图
```js
Object.define(this.data, {
  get: () => {
    return this.data
  },
  set: (val) => {
    this.data = val;
    input.value = this.data
  }
})
```

## React中VM的表现

vm 通过视图绑定数据
```js
<input onChange={() => {
  setState()
}} /> 
```

vm 通过数据绑定视图
setState => render() => vdom 的对比 ？ => 将新树替换旧树在页面上

> 有一种说法是 `React` 并不是 `MVVM` 框架而是 `MVC` 框架 