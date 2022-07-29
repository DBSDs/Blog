---
sidebar_position: 3
---
# PC端常用布局模式总结

## Tab栏

1. 首先是横栏
2. 其次是需要各个 tab 宽度一致
3. 最后是在网页缩小到一定范围的时候元素不变形

```css
.parent {
  display: 'flex';
  width: `${xx}px`
}

.children {
  flex: 1 // width: `${xx}px`
}
```

## 图片






