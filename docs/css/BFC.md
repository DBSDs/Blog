# BFC速读

## 什么是BFC

```BFC```块格式化上下文```(Block Formatting Context)```是 Web 页面的可视化 CSS 渲染的一部分，是布局过程中生成块级盒子的区域，也是浮动元素与其他元素的交互限定区域。

那么，什么是Block Formatting Context?

web 布局主要有两个部分组成：
1. box（盒模型）
2. formatting context（格式化上下文）
  * 正常流
    * block formatting context
    * inline formatting context
  * 弹性布局
    * flex formating context
  * 网格布局
    * grid formatting context

通俗理解：```BFC``` 是一个独立的布局环境,可以理解为一个容器,在这个容器中按照一定规则进行物品摆放,并且不会影响其它环境中的物品

## 创立BFC

```BFC```是一个css渲染特殊的一部分，需要一定的条件才能创立(```establish```)

* 根元素(```html```)
* 浮动元素 (元素的 ```float``` 不是 ```none```)
* 绝对定位元素 (元素具有 ```position``` 为 ```absolute``` 或 ```fixed```)
* 内联块 (```display: inline-block```) 、表格单元格 ( ```display: table-cell```)、表格标题 (```display: table-caption```)、弹性盒子下的item(```felx-items```)、内联弹性盒子(```inline-flex```)...
* ```overflow``` 且值不是 ```visible``` 的块元素

总的来说，BFC 是很正常的formatting context，在一行写完自动会换行的且可以有文字内容的 formatting context 便会创立 BFC

## BFC可以解决的问题

垂直外边距重叠问题
去除浮动
自适用两列布局
