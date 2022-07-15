---
sidebar_position: 1
---
# transition、animation实现动画入门

## 前言 ##

动画可以说是前端最具表现力的形式

在前端方面可以使用很多技术来展示动画，js，canvas，css，flash

这次分享的主题是前端css动画是 **如何实现** 的以及他的 **实现过程**

在引入动画这个概念之前

我们先直接将css的变化写出来
:::tip 鼠标放在盒子上可查看效果
:::

---


>变大：

import { BoxUnset } from '@site/src/components/cssComponent'

<BoxUnset />

---

>变色：

import { BoxUnset2 } from '@site/src/components/cssComponent'

<BoxUnset2 />


---


>移动：

import { BoxUnset3 } from '@site/src/components/cssComponent'

<BoxUnset3 />

移动盒子的代码

```css
  .box3 {
  height:20px;
  width:20px;
  background: red;
  }
  .box3:hover {
    transform: translateX(100%)
  }
```

---


可以看到，CSS是没有**时间轴**的。也就是说，所有的状态变化，都是 **瞬间** 完成的。

**而动画就是让两个图片之间达成一种在时间上的联系**

就是对前后变化根据算法来计算出过渡态

所以这里可以引入**transition**

## Transition

Transition的作用在于，指定状态变化所需要的时间。

在下面css中引入transition并指定变化时间1s。
``` css
.box {
  transition: 1s;
}
```

---
>变形：

import { Boxset } from '@site/src/components/cssComponent'

<Boxset />

---

>变色：

import { Boxset2 } from '@site/src/components/cssComponent'

<Boxset2 />

---
>移动：

import { Boxset3 } from '@site/src/components/cssComponent'

<Boxset3 />

移动动画代码
```css
.box3 {
  height:20px;
  width:20px;
  background: red;
  transition: 1s;
  }
.box3:hover {
  transform: translateX(100%)
}
```


**可以看出，transition的作用在于，指定状态变化所需要的时间（transition-duration）。**

>除此之外，transition还有其他属性:
* transition可以指定变化的属性（transition-property）
* transition可以指定多久后开始变化（transition-delay）
* transition可以指定状态的变化速度（transition-timing-function）。
>但是transition也是有**局限**的:
1. transition需要**事件触发**，所以没法在网页加载时自动发生。
2. transition是**一次性的**，不能重复发生，除非不断触发事件。
3. transition只能定义开始状态和结束状态，不能定义**中间状态**，也就是说只有两个状态。
4. 一条transition规则，只能定义**一个属性**的变化，不能涉及多个属性。

CSS Animation就是为了解决这些问题而提出的。


## Animation ##
首先指定一个动画一个周期持续的时间，以及动画效果的名称

```css 
.div:hover {
  animation: 3s rainbow;
} 
```
然后定义这个动画，动画一个周期持续的时间，以及动画效果
```css
@keyframes rainbow {
  0% { background: #c00; }
  50% { background: orange; }
  100% { background: yellowgreen; }
}
```

---

import { SpinAnimBox } from '@site/src/components/cssComponent'

<SpinAnimBox />

```css
  .spin {
    border-radius: 40%;
    width: 50px;
    height: 50px;
    background: red;
    animation: demo-spin 1s linear infinite;
  }
  @keyframes demo-spin {
    from { transform: rotate(0deg);}
    to   { transform: rotate(360deg);}
  }
```

---
animation除<b>定义动画</b>和<b>动画次数</b>外。

* animation还有其他属性
* animation-fill-mode可以让动画保持在**结束状态**
* animation-direction可以指定动画**轮播方式**

---
个人认为，动画效果除了了解api以外，也需要一些分享和积累

## 附:加速球动画 ##

下面是一个比较高级的动画效果-加速球，已托管在我的代码仓库中

[加速球动画预览](https://dbsds.github.io/Suspended-ball/dist)