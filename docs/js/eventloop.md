---
sidebar_position: 13
darft: true

---

# 事件循环

事件循环是我们常常听说的，为什么我们需要了解事件循环这个概念，又或者说为什么出现事件循环这个概念

## 背景

我们首先可以知道```JavaScript```是**单线程**的语言，单线程意味着他只能执行用一个线程去做事情，那么他执行事件的顺序就必然是先做完这件事再去做另一件事。而这在日常的体验中是绝不可能忍受的。因为我们不能让一个用户因为一个很慢的网络请求导致页面上已经不能响应其他请求了！

就需要将这些事件变成一个异步事件。异步事件的特点就是不阻塞事件进程。那么多个异步事件间会相互阻塞吗？当两个异步事件在同时发生回调的时候，```JavaScript```作为单线程的语言，该去如何去执行呢？这就需要引入**事件循环**的机制来帮助解决。

## 同步和异步

同步是按顺序执行的代码
异步是在事件中断执行的代码，不会阻塞事件进程

```js
console.log('script start')

setTimeout((function)() {
  console.log('setTimeout')
})

Promise.resolve().then(function() {
  console.log('promise1)
}).then(function() {
  console.log('promise2')
})

console.log('script end')

// script start
// script end
// promise1
// promise2
// setTimeout
```

显然同步任务的优先级会更高，因为只有当主线程的任务全部执行完毕后，才回去子线程查看异步任务。

而异步任务又分为宏任务和微任务

## 宏任务和微任务

* 宏任务（Macrotask）一般是```script```、```setTimout```、```setInterval```、```setImmediate```
* 微任务（Microtask）: 原生```Promise```、```MutationObserver```

为什么要分宏任务和微任务

原因是为了**插队**，因为```javascript```需要区分那些工作消耗的能量更大，那些工作消耗的能量更小，宏任务一般开销更大。在执行一个较大的时间后将小任务执行一遍比较合理。

## 事件循环的流程

1. 检查 Macrotask 队列是否为空,若不为空，则进行下一步，若为空，则跳到3
2. 从 Macrotask 队列中取队首(在队列时间最长)的任务进去执行栈中执行(仅仅一个)，执行完后进入下一步
3. 检查 Microtask 队列是否为空，若不为空，则进入下一步，否则，跳到1（开始新的事件循环）
4. 从 Microtask 队列中取队首(在队列时间最长)的任务进去事件队列执行,执行完后，跳到3 其中，在执行代码过程中新增的microtask任务会在当前事件循环周期内执行，而新增的macrotask任务只能等到下一个事件循环才能执行了。

## 事件循环的原理

* node 的初始化
  * 初始化 node 环境。
  * 执行输入代码。
  * 执行 process.nextTick 回调。
  * 执行 microtasks。


* 进入 event-loop
  * 进入 timers 阶段
    * 检查 timer 队列是否有到期的 timer 回调，如果有，将到期的 timer 回调按照 timerId 升序执行。
    * 检查是否有 process.nextTick 任务，如果有，全部执行。
    * 检查是否有microtask，如果有，全部执行。
    * 退出该阶段。
  * 进入IO callbacks阶段。
    *检查是否有 pending 的 I/O 回调。如果有，执行回调。如果没有，退出该阶段。
    *检查是否有 process.nextTick 任务，如果有，全部执行。
    *检查是否有microtask，如果有，全部执行。
    *退出该阶段。
  * 进入 idle，prepare 阶段：
    *这两个阶段与我们编程关系不大，暂且按下不表。
  * 进入 poll 阶段
    * 首先检查是否存在尚未完成的回调，如果存在，那么分两种情况。
      * 第一种情况：
        * 如果有可用回调（可用回调包含到期的定时器还有一些IO事件等），执行所有可用回调。
        * 检查是否有 process.nextTick 回调，如果有，全部执行。
        * 检查是否有 microtaks，如果有，全部执行。
        * 退出该阶段。
      * 第二种情况：
        * 如果没有可用回调。
        * 检查是否有 immediate 回调，如果有，退出 poll 阶段。如果没有，阻塞在此阶段，等待新的事件通知。
    * 如果不存在尚未完成的回调，退出poll阶段。
  * 进入 check 阶段。
    * 如果有immediate回调，则执行所有immediate回调。
    * 检查是否有 process.nextTick 回调，如果有，全部执行。
    * 检查是否有 microtaks，如果有，全部执行。
    * 退出 check 阶段
  * 进入 closing 阶段。
    * 如果有immediate回调，则执行所有immediate回调。
    * 检查是否有 process.nextTick 回调，如果有，全部执行。
    * 检查是否有 microtaks，如果有，全部执行。
    * 退出 closing 阶段
  * 检查是否有活跃的 handles（定时器、IO等事件句柄）。

细心的童鞋可以发现，在事件循环的每一个子阶段退出之前都会按顺序执行如下过程：
  * 检查是否有 process.nextTick 回调，如果有，全部执行。
  * 检查是否有 microtaks，如果有，全部执行。
  * 退出当前阶段。


