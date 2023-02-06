---
sidebar_position: 8

---
# React Rerender的时机

来源：[Why React Re-Renders](https://www.joshwcomeau.com/react/why-react-re-renders/)

说实话，当我们日常工作中不理理解 React 的rerender 机制究竟是怎么运作的话，这会导致我们在编码中遇到许多不确定性。

## React的核心循环(The core React loop)

众所周知，所有 React 中的 Rerender 起源于状态的变化，过去可能还有`forceUpdate`方法可以触发rerender，不过这个方法已经不复存在了。

不过这个说法好像有问题，如果 rerender 仅存在于 props 的变化，那么 context 呢？

那么这里还有一个条件，就是当 react 组件渲染的同时，他会把子组件全部更新。

因此 React 有两个 rerender 的时机：
* 组件内状态的变化
* 上层组件的刷新

可以看下面这个例子：

```tsx
import React from 'react';

function App() {
  return (
    <>
      <Counter />
      <footer>
        <p>Copyright 2022 Big Count Inc.</p>
      </footer>
    </>
  );
}

function Counter() {
  const [count, setCount] = React.useState(0);
  
  return (
    <main>
      <BigCountNumber count={count} />
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </main>
  );
}

function BigCountNumber({ count }) {
  return (
    <p>
      <span className="prefix">Count:</span>
      {count}
    </p>
  );
}

export default App;
```

在这个例子中，我们有三个组件，`App`是最顶层的，渲染了`Counter`，`Counter`渲染了`BigCountNumber`。

在React中，所有状态变量依附在各自的组件事例上。在这个例子中，我们有一个简单的count状态在`Counter`组件中。

无论何时这个状态改变，`Counter`都会`rerender`。而且因为`BigCounterNumber`是被`Counter`渲染的，那么`BigCounterNumber`也会重新渲染。

这是一个互动图表现了这个行为。

好的，现在我们对第一个误解有了很清晰的判断：整个app都会在一个状态变化后重新渲染。

我知道有些开发者相信所有的state变化都会引起整个react应用重新渲染，但是这个不是正确的，rerender仅仅影响状态变化的组件本身以及他的子组件（如果有的话）。app组件，在这个例子不会rerender即使count状态变化。

与其记住这条规则，我们不如停下脚步去搞清楚为什么react会这样做

react的主任务进程通过state以异步的形式去维持应用层UI。它的主要任务就是去搞清楚什么东西是需要rerender的。

让我们再次以Counter组件举例，当应用第一次挂载的时候，react渲染整个组件，组件的dom树结构如下图

```html
<main>
  <p>
    <span class="prefix">Count:</span>
    0
  </p>
  <button>
    Increment
  </button>
</main>
<footer>
  <p>Copyright 2022 Big Count Inc.</p>
</footer>
```
当用户点击button的时候，counte状态从0变成1。如何影响ui？这是我们需要从另一次渲染中学习到的事

react 重新运行Counter和BigCountNumber组件的代码，然后生成我们希望的一个新的dom树结构：
```html
<main>
  <p>
    <span class="prefix">Count:</span>
    1
  </p>
  <button>
    Increment
  </button>
</main>
<footer>
  <p>Copyright 2022 Big Count Inc.</p>
</footer>
```
每次渲染都有一个dom树快照，显示了UI需要如何展示。

react使用一种找不同的方式去在两个快照中理清到底什么改变了。在这个情况下，看起来就一个textnode从0变成了1，然后编辑这个节点使他从0变成1。这个事情完美的结束了，react队列等待下次改变。

这就是react的核心循环。

