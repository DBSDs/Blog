---
sidebar_position: 2

---

# TS泛型体操

## 泛型是什么

```markdown
The type of generic functions is just like those of non-generic functions, with the type 

parameters listed first, similarly to function declarations:
```

在`typescript`中文网上的翻译
```markdonw
泛型函数的类型与非泛型函数的类型没什么不同，只是有一个类型参数在最前面，像函数声明一样：
```

总的来说我觉得泛型就像是js中的变量，在typescript它叫做类型变量`type variables`。只不过在js中我们常常使用let、var等关键字去声明变量，而在ts中可以在类型后使用尖括号`<>`直接声明定义出来一个变量:

```typescript
type T1<T> = T
type T2<MY> = MY
```

以上两种类型是相等的

## 默认值 default
默认值很好理解，当我们没有输入任何类型的时候，可以个泛型变量定义一个默认值
```typescript
type T1<T = string> = T
const a:T1 // a-> string
```

## 约束 extends 

在上面两个例子中`T`可以输入任何类型，而在许多情况下，我们仅仅希望输入特定的类型,比如`string`和`number`，这个情况下就需要`exntends`去做约束了

```markdown
we’ll use this interface and the extends keyword to denote our constraint:
我们将使用这个接口和extends关键字来表示我们的约束：
```

```typescript
interface Lengthwise {
  length: number;
}
 
function loggingIdentity<Type extends Lengthwise>(arg: Type): Type {
  console.log(arg.length); // 在这里我们loggingIdentity函数只允许输入带有length属性的类型了
  return arg;
}
```

## 类型推断

定义一个泛型类型
```typescript
type T1<T> = (number: T) => T
```