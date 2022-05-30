# 前端css中的居中详解

众所周知, 前端布局中的居中是亘古不变的话题，不论在什么端开发中，都是常见且非常有用的。

下面详解几种居中方式

## 1. 使用flex
```css
.box {
  display: flex;
  justify-content: center;
  align-items: center;
}
```

这种方式是最常见的居中方式，要是没有掌握，基本连前端实习都没办法了。但是这种方式也有几种失效的情况

他确实是让盒子内部的元素居中了，但是这个内部的元素不一定就是希望相对于盒子居中。

失效原因
1. 


## 2. 使用margin
```css
.box {
  margin: 0 auto // 水平居中
}
.box {
  margin: auto 0 // 垂直居中
}
```

那么，为什么 auto 就会将元素居中呢？

其实 **auto** 属性并不是就说让这个元素自由了，必须居中的意思

而是浏览器拿到这个属性的时候会把父元素和子元素的边界进行计算，然后相减取中间值

那么其失效原因就很容易找到了

1. 父元素未指定需要计算的边
2. 子元素未指定需要计算的边

## 3. 使用绝对定位
```css
.parent {
  position: relative;
  width: 100px;
  height: 100px;
}
.child {
  position: absolute;
  top: 50%;
  left: 50%;
  transition: translateX(-50%);
  transition: translateY(-50%);
}
```

这里可以了解一下四种定位方式
### static（静态定位）
对象遵循标准文档流中，top, right, bottom, left 等属性失效。 
### relative（相对定位）
对象遵循标准文档流中，依赖top, right, bottom, left 等属性相对于该对象在标准文档流中的位置进行偏移，同时可通过z-index定义层叠关系。
**left,top 并不改变该对象原本在文档流中的占位空间**。
### absolute（绝对定位）
对象脱离标准文档流，使用top, right, bottom, left 等属性进行绝对定位（相对于static定位以外的第一个父元素进行绝对定位） 同时可通过z-index定义层叠关系。
### fixed（固定定位）
对象脱离标准文档流，使用top, right, bottom, left 等属性进行绝对定位（相对于浏览器窗口进行绝对定位）同时可通过z-index定义层叠关系。

在padding，marigin，width，height，top, right, bottom, left等属性指定百分号 **%** 时，那么他会根据父元素的属性进行继承。 

## 4.使用Grid

```css
.desk {
  display: grid;
  place-items: center;
}
```
