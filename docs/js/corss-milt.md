---
sidebar_position: 18

---
# JS如何跨域

## 跨域常见问题
1. xhr http 不能跨域
3. 跨域方案和安全隐私方案要一致
4. 浏览器限制跨域，保护浏览器鉴权数据

**有三种完美方案：**

1. `CORS`
2. `iframe + postmessage`
3. `websocket` （代价有点大）

**有三种可选方案:**

1. `jsonp`跨域，服务端完全忽略`cookie`信息
2. `url`传参和表单提交跨域
3. 服务器端代理跨域

**邪术**

1. `window.name`跨域


## 采用`PostMessage`形式跨域
> 由于 SqlEditor 和 Pms 部署在不同机器上，因此存在跨域。即 Pms 不可以直接操作跨域的 iframe 。因此在 sqlEditor 先发送一个 message ， Pms 通过在 message 中的回调中找到 iframe 的 DOM ，此时可以操作跨域的元素。然后向 SqlEditor 发送必要的数据

```tsx
// 1.子组件SqlEditor
window.parent.postMessage('init success', '*')
```

```tsx
// 2.父组件Pms
window.addEventListener(
  "message",
  (e) => {
    if (e.origin === "xxxx" && 
        e.data === 'init success') {
      const queryx = document.getElementById("queryx").contentWindow;
      queryx.postMessage(
        {
          instInfo:[{ip:'10.0.0.2',port:4321,shcmea:'test',mode:1}],
          pmsUid: 'xxxx',
          id: 'sss'
        },
        "*"
      );
    }
  },
  false
);
```

```tsx
// 3.子组件SqlEditor获取到数据...
window.addEventListener(
  "message",
  (e) => {
    if (e.origin === "xxxx") {
      // ...
    }
  },
  false
);
```

