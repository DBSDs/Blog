---
sidebar_position: 1
---

# 手写算法或者JS编程题

N道实际中遇到的算法题记录:

## 远程加减法
> 1.假设本地机器无法做加减乘除运算，需要通过远程请求让服务端来实现。以加法为例，现有远程API的模拟实现

```js
const addRemote = async (a, b) => new Promise(resolve => {
  setTimeout(() => resolve(a + b), 1000)
});

// 请实现本地的add方法，调用addRemote，能最优的实现输入数字的加法。
async function add(...inputs) {
  // 你的实现
  let res = 0
  for (i of inputs) {
    res = await addRemote(i, res)
  }
  return res
}
```

## 解析URL
> 2.请编写一个JavaScript函数， 把URL参数解析为一个对象。

```js
const parseURL = (testUrl) => {
  const splitUrl = testUrl.split('?')
  if (splitUrl[1]) {
    const splitQuery = splitUrl[1].split('&')
    let resultMap = {}
    splitQuery.map(item => {
      const quote = item.split('=')
      if (resultMap[quote[0]]) {
        resultMap[quote[0]] = typeof resultMap[quote[0]] === 'string' ?
        [resultMap[quote[0]], quote[1]] : 
        [...resultMap[quote[0]], quote[1]]
      } else {
        resultMap[quote[0]] = quote[1]
      }
    })
    return resultMap
  }
  return {}
}
```
## 手写promise
> 3.手写promise

```js
function myPromise(callback) {
  this.state = 'pending'
  this.value = null
  this.reason = null
  this.successCallbacks = []
  this.failedCallbacks = []

  const resolve = (value) => {
    if (this.state === 'pending') {
      this.state = 'success'
      this.value = value
      this.successCallbacks.forEach((fun) => {
        fun()
      })
    }
  }

  const reject = (reason) => {
    if (this.state === 'pending') {
      this.state = 'failed'
      this.reason = reason;
      this.failedCallbacks.forEach((fun) => {
        fun()
      })
    }
  }

  try {
    callback(resolve, reject)
  } catch (reason) {
    reject(reason)
  }
}


myPromise.prototype.then = function (onsuccess, onreject) {
  if (typeof onsuccess !== 'function') {
    onsuccess = (value) => {
      return value
    }
  }

  if (typeof onreject !== 'function') {
    onreject = (reason) => {
      return reason
    }
  }

  const promise2 = new myPromise((resolve, reject) => {
    switch (this.state) {
      case 'success':
        setTimeout(() => {
          try {
            const x = onsuccess(this.value)
            resolve(x);
          } catch (err) {
            reject(err)
          }
        }, 0)
        break;
      case 'failed':
        setTimeout(() => {
          try {
            const x = onreject(this.reason)
            resolve(x)
          } catch (err) {
            reject(err)
          }
        }, 0)
        break;
      case 'pending':
        this.successCallbacks.push(() => {
          setTimeout(() => {
            try {
              const x = onsuccess(this.value)
              resolve(x)
            } catch (err) {
              reject(err)
            }
          }, 0)
        })
        this.failedCallbacks.push(() => {
          setTimeout(() => {
            try {
              const x = onreject(this.reason)
              resolve(x)
            } catch (err) {
              reject(reason)
            }
          }, 0)
        })
        break;

    }
  })
  return promise2;
}
```

## 最小时间差
> 4.编写一个函数，找到一个时间数组中相差最小的两个数，输出他们的差值
>   例：输入: ["23:30", "00:00", "00:23"]\cccc
>   输出: 23

```js
const computedTime = (timeArr) => {
  const timestampArr = timeArr.map((item) => {
    const timesplit = item.split(':')
    return Number(timesplit[0]) * 60 + Number(timesplit[1])
  })
  let res = 60 * 24
  for (let i = 0; i < timestampArr.length - 1; i++) {
    for (let j = i + 1; j < timestampArr.length; j++) {
      res = Math.min(
        res,
        Math.abs(timestampArr[i] - timestampArr[j]),
        Math.abs(convertTime(timestampArr[i]) + timestampArr[j]),
        Math.abs(timestampArr[i] + convertTime(timestampArr[j])))
    }
  }
  return res
}

const convertTime = (timestamp) => {
  return 60 * 24 - timestamp
}

module.exports = computedTime
```

## 防抖

应用场景：一个搜索输入框，用户不停的进行输入（这个时候就是抖动的过程），等用户输入停止之后，再触发搜索

```js
function debounce(fn, delay = 200) {
  let timer = 0;
  return function () {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      fn.apply(this, arguments)
      timer = 0
    }, delay)
  }
}
```

## 节流

应用场景：滚动条事件输出降低灵敏度
```js
function throttle(fn, delay = 200) {
  let timer = 0
  return function () {
    if (timer) {
      return
    }
    timer = setTimeout(() => {
      fn.apply(this, arguments)
      timer = 0
    }, delay)
  }
}
```