---
sidebar_position: 2
---

# 深入源码了解useState的运作原理

目前 React 构架可以分为三层

* Scheduler（调度器） ———— 调度任务的优先级
* Reconciler（协调器）———— 负责找出变化的组件
* Renderer（渲染器）———— 负责将变化的组件渲染到页面上

我们这里模仿 useState 写出以下代码

```js
function useState(initialState) {
  let hook

  // 第一次挂在函数式组件
  if(isMount) {
    // ...mount 时需要生成 hook 对象
    hook = {
      queue: {
        pending: null
      },
      memoizedState: initialState,
      next: null
    }
    

    // 将hook插入 fiber.memoizedState 链表末尾
    if(!fiber.memoizedState) {
      fiber.memoizedState = hook
    }  else {
      workInProgressHook.next = hook
    }

    // 移动 workInProgressHook 指针
    workInProgressHook = hook
  } else {
    // ...update时从workInProgressHook 中取出该useState 对应的hook
    hook = workInProgressHook;
    // 移动 workInProgressHook 指针
    workInProgressHook = workInProgressHook.next
  }

  let baseState = hook.memoizedState;

  if(hook.queue.pending) {
    // 根据 queue.pending 中保存的 update 更新 state
    let firstUpdate = hook.queue.pending.next;

    do {
      const action = firstUpdate.action;
      baseState = action(baseState);
      firstUpdate = firstUpdate.next
      // 最后一个update执行完后跳出循环
    } while (firstUpdate !== hook.queue.pending.next) {
      hook.queue.pending = null
    }
  }
  hook.memoizedState = baseState

  return [baseState, dispatchAction.bind(null, hook.queue)]
}
```