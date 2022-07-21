---
sidebar_position: 2
draft: true
---


# 浅入深出地了解useState

在我不算很长的```React```函数式编程中来看，从上手到现在也使用了不下千次的```useState```，可以说```useState```是我的代码的重要的构成部分，可能不了解本质也能进行日常的业务开发，但是每次遇到难以解决的```Bug```时我日常怀疑人生，因此我迫不及待的想要了解```useState```到底做了什么。

正是由于```useState```对我来说一直是一个黑箱，而我每次在有限的资料中扫兴而归，这篇文章也是将我的一些迷惑解答出来，通过写文章的方式拨云揭雾搬的触碰```useState```的本质。

## 返回值

了解useState我们从最简单的返回值开始入手

```tsx
const [data, setData] = React.useState<number>(0)
```

可以看到我们声明了一个数组去结构```useState```的返回。他的第一个返回是这个```state```，也就是在组件中中存储的数据，第二个返回就是更新这个数据的方法，只用通过这个方法去更新数据，才会触发组件的刷新。

那么为什么返回的是一个数组呢，可以试想如果是对象的话，那么我们就要使用重命名去解构多个```useState```了

```tsx
const {data:numberData, setData:setNumberData} = React.useState<number>(0)

const {data:stringData, setData:setStringData} = React.useState<number>(0)
```

显示还是直接使用数组更方便，这是React团队在设计上的考量。

## 时序一致

在官网的介绍中，时序一致是被提到的。何谓时序一致，就是每次渲染的时候调用```useState```时的顺序应该是一样的，最常见的情况就是不能在条件判断语句后加入```useState```

```tsx
const app = () => {
  // 常规错误1.在if语句中包裹useState
  if(1 + 1 === 2) {
    const [data, setData] = React.useState<number>(0);
  }


  // 常规错误1.在useState前返回函数式组件
  if(2 + 2 === 4) {
    return 
  }

  const [string, setString] = React.useState<number>(0);

  return (
    <div onClick={() => {
      setData(data + 1);
    }} />
  )
}
```

为什么每次渲染函数都必须要按照同样的顺序渲染出来```useState```呢？理解这个问题需要从最简单的```useState```函数入手。
```tsx
let x
function useState(initialValue) {
   x = x === undefined ? initialValue : x
  function setX(newState) {
    x = newState;
    render(); // 去渲染新组件
  }
  return [x, setX];
}

```
这样的```useState```可以简单地理解为可以做到赋值，刷新的作用。但是当在组件中调用多个```useState```这个方法的时候，显然一个```x```不够用了!

这个时候React团队采用的做法是根据每个```useState```在组件中创建的顺序来进行一个标记，将```x```值给按照相同的顺序塞进一个数组，在取出的时候按照相同的顺序拿到正确的值。

## 同步还是异步

在使用的时候，遇到的最常见疑惑就是```useState```究竟是同步的还是异步的，这直接决定了我们是否可以这个业务场景下使用它来存储数据，或者它是否能正确地重新渲染组件呈现出正确的数据。

答案是```异步```的。

```tsx title=例子一
const app = () => {
  const [data, setData] = React.useState<number>(0);

  return (
    <div onClick={() => {
      setData(data + 1);
      console.log(data)、  
      setData(data + 2);
      console.log(data)
    }} />
  )
}


// 0
// 0
```

同样地在```onClick```以外的任务下
```tsx title=例子二
const app = () => {
  const [data, setData] = React.useState<number>(0);

  return (
    <div onClick={() => {
      setTimeout(() => {
        setData(data + 1);
        console.log(data)
        setData(data + 2);
        console.log(data)
      }, 300)
    }} />
  )
}

// 0
// 0
```

可以很清楚地知道，两次打印均是0，如果在同步的情况下，那么两次的```force```打印出来的情况将会不一致，事实证明```useState```在不论什么情况下均是```异步```

## 合并

众所周知，每一次使用```useState```下的第二个返回值，也就是下面的```setXXX```，那么```React```的函数式组件就会重新刷新一次。

不过在一个点击事件中，如果有```N```个```setState```事件呢？显然```React```不会重新渲染```N```次吧，显然这样消耗性能的操作是违法直觉的，那么他将会在什么时候合并多个```useState```的值呢，这里可以同样用上面的代码举个例子。

```tsx title=例子一
const app = () => {
  const [data, setData] = React.useState<number>(0);
  const [string, setString] = React.useState<string>('');
  
  console.log(force, string)
  return (
    <div onClick={() => {
      setData(data + 1);
      setData(data + 2);
      setString(string + 'string')
    }} />
  )
}

// 2 'string'
```

但是在```setTimout```或者```promise```等回调函数中，显然并不存在合并现象了，在一次```onClick```事件中刷新组件状态，可以看到多次打印出刷新值。

```tsx title=例子二
const app = () => {
  const [data, setData] = React.useState<number>(0);
  const [string, setString] = React.useState<string>('');
  
  return (
    <div onClick={() => {
      setTimeout(() => {
        setData(data + 1);
        setData(data + 2);
        setString(string + 'string')
      }, 300)
    }} />
  )
}

// 1 ''
// 2 ''
// 2 'string'
```

这个现象主要是由于```React```团队的操作，它们在```React```的jsx中对所有的onClick或者onChange事件进行了一个接管的操作，使其所有state在这些事件内有合并现象，而在其他回调中可以说是脱离了**接管**，因此没有任何合并的现象

## 源码解析
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