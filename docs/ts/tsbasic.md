---
sidebar_position: 1
draft: true

---

# TS基础类型

## 几种基础类型

### 布尔值 boolean 

### 数字 number

### 字符串 string

### 数组 []

### 元祖Tuple [string, number]

### 枚举 enum

### Any

### void

代表没有任何类型
```typescript
function warnUser(param: void): void {
    console.log("This is my warning message");
}
```

### null 和 undefined

在没有`--strictNullChecks`时，`null`和`undefined`可以赋给任何类型，反之只能赋值给自己

### never 

代表用不存在的值的类型
```typescript
// 返回never的函数必须存在无法达到的终点
function error(message: string): never {
    throw new Error(message);
}
```

### object

### unknown

代表无法判断的值的类型，通常在无法确定类型的情况下使用
```typescript
function returnMessage(message: unknown): string {
  if(typeof message === 'string') {
    return message.fixed()
  } else if(typeof message === 'number' ) {
    return message.toFixed()
  }
}
```

## 类型断言

### 尖括号
```typescript
let strLength: number = (<string>someValue).length;
```

### as 
```typescript
let strLength: number = (someValue as string).length;
```