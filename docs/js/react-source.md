---
sidebar_position: 9

---
# React原理剖析

## 简要的渲染原理

首先我们明确一个流程，在 Web 开发中，我们需要将变化的数据**实时**显示在页面上，这个时候需要**DOM操作**，但是频繁的DOM操作通常是性能瓶颈产生的原因。因此React引入了**虚拟DOM**的机制——**每当数据变化时，React会重新构建整个虚拟DOM树，然后将虚拟DOM树和上一次的虚拟DOM树进行对比，然后将需要变化的部分进行浏览器DOM的更新。**

> **[为什么需要JSX？](https://react.docschina.org/docs/introducing-jsx.html) **
>  
> 简单来说，React 团队认为渲染逻辑本质与其他UI逻辑内在耦合，将 JS 和 HTML 编写在一个文件中更符合他们的预期。因此 JSX 诞生了。
> 
> JSX本质上编译为以下代码：
> ```typescript
> React.createElement(tag,{id:"xxx"/*标签属性*/},[child1,child2,...]/*子元素*/)
> ```

## 状态管理的差异
在 Fiber 诞生之前，React 和 vue 的渲染流程还是很像的，都是递归渲染 vdom，增删改 dom 。

React 是通过 **setState** 的 api 触发状态更新的，更新以后就重新渲染整个 vdom。

而 Vue 是通过**响应式的代理**管理状态，get 的时候收集依赖，然后修改状态的时候就可以触发对应组件的 render 了。

所以 React 是将组件作为追踪更新的最小单元，而 Vue 将变量作为追踪更新的最小单元。因此React在虚拟 DOM 时需要的计算量需求远大于 Vue。

这个问题也导致了后来两者架构上逐渐有了差异。

## Fiber架构

React 处理一次 setState() 时会有两个阶段：

* **调度阶段（Reconciler）**：这个阶段 React 用新数据生成新的 Virtual DOM，遍历 Virtual DOM，然后通过 Diff 算法，快速找出需要更新的元素，放到更新队列中去。
* **渲染阶段（Renderer）**：这个阶段 React 根据所在的渲染环境，遍历更新队列，将对应元素更新。在浏览器中，就是更新对应的 DOM 元素。

因为更新过程不会有任何 I/O 操作，完全是 CPU 计算，所以无需异步操作，执行到结束即可。

但是对于复杂组件，需要大量的 diff 计算，而 JS 线程和浏览器 GUI 线程是互斥的，计算大量虚拟DOM对比会严重影响到页面的交互性。

<!-- React 为了解决这个问题，根据浏览器的每一帧执行的特性，构思出了 Fiber 来将一次任务拆解成单元，以划分时间片的方式，按照Fiber的自己的调度方法，根据任务单元优先级，分批处理或吊起任务，将一次更新分散在多次时间片中，另外, 在浏览器空闲的时候, 也可以继续去执行未完成的任务, 充分利用浏览器每一帧的工作特性。 -->

因此 React 需要实现一个目标：**打断虚拟DOM 及 Diff 中的计算。**

那么就有一个问题来了，打断虚拟DOM的计算，说明工作不是连续的，需要将计算工作分成一份份，那我们需要以什么为最小的工作单元？答案就是 fiber 数据结构（fiber 既是一种数据结构，也代表新的 Reconciler + Scheduler +  Renderer 的渲染流程）。

fiber 相比之前的数据结构除了依然记录需要渲染的children信息，多了sibling，parent 等信息。

数据结构有了，那么如何进行打断式的计算呢？先前的的递归计算已经不适用了，新的计算方式变成可打断的循环计算.
```typescript
function workLoop() {
  while (wip) {
    performUnitOfWork();
  }

  if (!wip && wipRoot) {
    commitRoot();
  }
}
```

当循环完了，也就是 wip 为空了，那就执行 commit ，进入到渲染阶段。

那么循环执行中如何去执行更高优先级的任务，React 代码中使用 shouldYield 方法来解决这个问题。

```typescript 
function workLoop() {
  while (wip && shouldYield()) {
    performUnitOfWork();
  }

  if (!wip && wipRoot) {
    commitRoot();
  }
}
```
所以我们在每次处理 fiber 节点的 reconcile 之前，都先调用下 shouldYield 方法。如果通过 shouldYeld 中判断到有更高优先级的计算，那就先处理更高级别 fiber 计算，这边的先暂停一下。

通过这些循环，最后将所有的虚拟 dom 打上标签，并将需要更新的 dom 放入 effectList 队列（意思是等待渲染的 dom ），通过循环 effectList 最后将的更新渲染到页面上。

那么渲染阶段的具体步骤是什么呢？

dom 创建前后就是 useEffect、useLayoutEffect 还有一些函数组件的生命周期函数执行的时候。

useEffect 被设计成了在 dom 操作前**异步调用**，useLayoutEffect 是在 dom 操作后**同步调用**。

为什么这样呢？

因为都要操作 dom 了，这时候如果来了个 effect 同步执行，计算量很大，那不是把 fiber 架构带来的优势有毁了么？

所以 effect 是异步的，不会阻塞渲染。

而 useLayoutEffect，顾名思义是想在这个阶段拿到一些布局信息的，dom 操作完以后就可以了，而且都渲染完了，自然也就可以同步调用了。
