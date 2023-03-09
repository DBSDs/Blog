---
sidebar_position: 19

---

# 从无到有地搭建一个函数式后端

## Node框架选型

选择大而全的解决框架还是渐进式的模式
* 大集市模式
* 渐进式模式

大集市模式——有一套框架内默认的场景解决方案：比如数据校验、ORM、前端集成、数据库连接等等

### midway (star 6.4k)
一个生产环境下可使用大集市框架，淘宝前端架构团队开发
* 完全支持ts，面向对象编程，支持函数式编程
* 支持全中文文档，淘宝前端团队编写的
* 可以选择使用koa/egg/express等底层搭建http服务

### egg (star 18.3k)
相当于只建立了一个http连接，带一些配置文件还有插拔的系统。默认不支持ts，还需要进一步升级改造。
* 提供基于 Egg 定制上层框架的能力
* 高度可扩展的插件机制
* 内置多进程管理
* 基于 Koa 开发，性能优异
* 渐进式开发

### nest (star 53.8k)
渐进式框架，和egg基本一致，但天然支持ts。

最终我选择了midway，因为他解决了一下两个问题
* 支持函数式开发
* 大而全的后端选型支持。

## [midway 一体化项目](https://midwayjs.org/docs/hooks/intro)

### Debugger 模式开启
在vscode插件中选择下载 JavaScript Debugger (Nightly) 
图片: https://uploader.shimo.im/f/sun8Ln0r0qrz7aQw.png!thumbnail?accessToken=eyJhbGciOiJIUzI1NiIsImtpZCI6ImRlZmF1bHQiLCJ0eXAiOiJKV1QifQ.eyJleHAiOjE2NzU2MDIzNTQsImZpbGVHVUlEIjoiS3JrRVYxNWcySlM0UFhBSiIsImlhdCI6MTY3NTYwMjA1NCwiaXNzIjoidXBsb2FkZXJfYWNjZXNzX3Jlc291cmNlIiwidXNlcklkIjo2MzAwOTAzMH0.jxflF0KvorYFfcFJnfJMscMKiz5XnJDOfdr9dfghJQ4
在终端中打开
 javaScript Debug Terminal 
图片: https://uploader.shimo.im/f/x0aoikhTYMDLrYgY.png!thumbnail?accessToken=eyJhbGciOiJIUzI1NiIsImtpZCI6ImRlZmF1bHQiLCJ0eXAiOiJKV1QifQ.eyJleHAiOjE2NzU2MDIzNTQsImZpbGVHVUlEIjoiS3JrRVYxNWcySlM0UFhBSiIsImlhdCI6MTY3NTYwMjA1NCwiaXNzIjoidXBsb2FkZXJfYWNjZXNzX3Jlc291cmNlIiwidXNlcklkIjo2MzAwOTAzMH0.jxflF0KvorYFfcFJnfJMscMKiz5XnJDOfdr9dfghJQ4 
 npm run dev 

是否选择简易模式
不是简易模式（简易模式只支持get，post请求）

### 接口编写
一个简单的Get请求
```typescript
import {
  Api,
  Get,
useContext,
} from '@midwayjs/hooks';
import { Context } from '@midwayjs/koa';
 
export default Api(Get(), async () => {
  const ctx = useContext<Context>();
  return {
    method: ctx.method,
    path: ctx.path,
  };
});
```

`useContext`可以获取到本次请求的所有信息

`return`返回给客户端封装体

### Ctx hooks

为了方便编写接口，我们需要封装至少两个方法来服务我们的代码编写

#### useBody(schema)

拿到并校验的hooks

在post请求中，body需要从ctx.request.body中拿到，ctx.body中是响应的返回体;

在拿到请求体后，会根据输入的schema返回body的类型，同时根据schema校验参数是否发送正确。（这里使用 zod@3去做参数校验）

校验失败直接回throw一个报错。将被catchError中间件捕捉。

校验成功返回body，之后走业务流程。

#### useResponse(data, errorType)

封装公共的返回体

*校验参数 使用zod + typeof  为什么不用ts直接来校验，因为不能校验长短之类的 

*throw关键字 无类型提示

### 实际接口开发
```typescript
import { Api, Post } from "@midwayjs/hooks";
import sqlFormatter from "sql-formatter";
import { z } from "zod";

import { useBody, useResponse } from "../hooks/ctx";

const PostSchema = z.object({
  sql: z.string(),
  type: z.string(),
});

export default Api(Post("/analysis_command"), async () => {
  const body = useBody(PostSchema);

  let str = null;
  try {
    str = sqlFormatter.parse(body.sql, { language: "mysql" });
  } catch (e: any) {
    return e.toString();
  }

  let result = null;
  try {
    result = new sqlFormatter.AnalyzeStatement(str[0], body.type as any);
  } catch (e: any) {
    return e.toString();
  }

  return useResponse(result);
});
```

* 一个api只能用default导出吗？是的
* 定义路由和文件名同名且有两层路由 会导致编译后应用启动失败(目前原因未知)

### 中间件开发
```typescript
export default createConfiguration({
imports: [Koa, hooks({ middleware: [baseUrl, catchError] })],
importConfigs: [
{
  default: {
  keys: "session_keys",
  koa: {
    port: 7001,
  },
  } as MidwayConfig,
  },
],
});
```
