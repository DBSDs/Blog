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
相当于只建立了http连接等基础服务，带一些配置文件还有插拔的系统。默认不支持 ts ，还需要进一步升级改造。
* 提供基于 Egg 定制上层框架的能力
* 高度可扩展的插件机制
* 内置多进程管理
* 基于 Koa 开发，性能优异
* 渐进式开发

### nest (star 53.8k)
渐进式框架，和 egg 基本一致，但天然支持 ts。

最终我选择了 `midway` ，因为他解决了一下两个问题
* 支持函数式开发
* 大而全的后端选型支持。

## [midway 一体化项目](https://midwayjs.org/docs/hooks/intro)

Midway 的一体化方案，是以 Midway Hooks 为**主函数式**全栈框架，支持四大核心特性："零" Api & 类型安全 & 全栈套件 & 强大后端。

> "零" Api 我觉的是一个非常有意思的特性，可以通过在**服务端一次编写后，在前端中直接调用**。[详情请见官方文档](https://midwayjs.org/docs/hooks/intro)，但是本次我决定搭建一个纯服务的后端，不需要全栈套件。
> 是否选择简易模式，此处不选择简易模式（简易模式只支持get，post请求）

### Debugger 模式开启
在vscode插件中选择下载 JavaScript Debugger (Nightly) 
图片: https://uploader.shimo.im/f/sun8Ln0r0qrz7aQw.png!thumbnail?accessToken=eyJhbGciOiJIUzI1NiIsImtpZCI6ImRlZmF1bHQiLCJ0eXAiOiJKV1QifQ.eyJleHAiOjE2NzU2MDIzNTQsImZpbGVHVUlEIjoiS3JrRVYxNWcySlM0UFhBSiIsImlhdCI6MTY3NTYwMjA1NCwiaXNzIjoidXBsb2FkZXJfYWNjZXNzX3Jlc291cmNlIiwidXNlcklkIjo2MzAwOTAzMH0.jxflF0KvorYFfcFJnfJMscMKiz5XnJDOfdr9dfghJQ4
在终端中打开
 javaScript Debug Terminal 
图片: https://uploader.shimo.im/f/x0aoikhTYMDLrYgY.png!thumbnail?accessToken=eyJhbGciOiJIUzI1NiIsImtpZCI6ImRlZmF1bHQiLCJ0eXAiOiJKV1QifQ.eyJleHAiOjE2NzU2MDIzNTQsImZpbGVHVUlEIjoiS3JrRVYxNWcySlM0UFhBSiIsImlhdCI6MTY3NTYwMjA1NCwiaXNzIjoidXBsb2FkZXJfYWNjZXNzX3Jlc291cmNlIiwidXNlcklkIjo2MzAwOTAzMH0.jxflF0KvorYFfcFJnfJMscMKiz5XnJDOfdr9dfghJQ4 
 npm run dev 


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

* `useContext` 可以获取到本次请求的所有信息
> 我认为因为 nodejs 是单线程语言，因此才可以使用这种 hooks 来进行请求的获取

* `return` 返回给客户端封装体

### Ctx hooks

为了方便编写接口，我们需要封装至少两个方法来服务我们的代码编写


#### useBody(schema)

在 post 请求中，body 需要从 ctx.request.body 中拿到，ctx.body 中是响应的返回体;因此我们需要封装一个 hooks 拿到请求体并进行参数上的校验。

在拿到请求体后，会根据输入的schema返回body的类型，同时根据schema校验参数是否发送正确。（这里使用 `zod@3` 去做参数校验）

校验失败直接回 `throw` 一个报错。将被自己定义的 `catchError` 中间件捕捉。

校验成功返回 body ，之后走业务流程。

```typescript
import { useContext } from "@midwayjs/hooks";
import { Context } from "@midwayjs/koa";
import { z, ZodType } from "zod";

type ExtendsContent<T extends ZodType<any, any, any>> = {
  request: {
    body: z.infer<T>;
  };
};

export function useBody<T>(schema: ZodType<T>) {
  const body = useContext<Context & ExtendsContent<typeof schema>>().request
    .body;

  // 校验参数
  const result = schema.safeParse(body);
  if (!result.success) {
    throw "ErrBind";
  }

  return body;
}
```

* 校验参数 使用zod，为什么不用ts直接来校验，因为不能用ts直接校验**长短，格式**之类的 
* 为什么不直接使用文档中的“零api”形式，因为文档中不使用与纯api 服务

#### useResponse(data, errorType)

封装公共的返回体
```typescript
import { BASE_MESSAGE, ERR_MAP } from "../constant/base";

export function useResponse(
  data: any = null,
  err_type: keyof typeof ERR_MAP = "NoError"
) {
  return {
    data,
    error_code: ERR_MAP[err_type]?.error_code,
    msg: {
      ...BASE_MESSAGE,
      err_type,
      message_en: ERR_MAP[err_type]?.message_zh,
      message_zh: ERR_MAP[err_type]?.messsage_en,
    },
    lock: false,
    privailege_change: false,
  };
}
```
这没啥好说的，依据实际需求进行封装就好了

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

  return useResponse(str);
});
```

* 一个api只能用default导出吗？是的
* 定义路由和文件名同名且有两层路由 会导致编译后应用启动失败(目前原因未知)

### 中间件开发
在配置文件中给 middleware 传入参数即可，根据穿参的顺序会依次执行中间件
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

普通的中间件只有 `next()` 一个参数，即是继续进行下一步
```typescript
export default async (next: any) => {

  await next();
};

```

我们可以以此定义错误捕捉的中间件
```typescript
import { useContext } from "@midwayjs/hooks";
import { Context } from "@midwayjs/koa";

import { useResponse } from "../hooks/ctx";

export default async (next: any) => {
  try {
    await next();
  } catch (err) {
    return useResponse(null, err as any);
  }
};
```

## 总结
nodejs 的后端框架越来越多，可供我们选择的余地也不少。我觉得**装饰器+类**写法的形式更像是JAVA式的编程，不太符合现在前端的编程习惯,也不太符合 js 函数式编程的理念，毕竟`class`只是`es6`的语法糖，其本质还是由**函数和原型**实现了继承。以**函数式作为切入点**，在前端团队中推广这种`BFF`胶水层更容易收到广大成员的支持，可以大大降低前端进入后端的门槛。提高我们对服务端的理解。