---
sidebar_position: 4

---


# 为什么React.FC被弃用了

来自[github:merged pull request(Remove React.FC from Typescript template)](https://github.com/facebook/create-react-app/pull/8177)

总结如下React.FC总共有几个缺点：

## 1.隐式地提供了一个children属性

```tsx
const App: React.FC = () => { /*... */ };
const Example = () => {
	<App><div>Unwanted children</div></App>
}
```
以上例子不会报错，在`App`组件定义成`React.FC`的时候，就包含了`children`属性。即使你的本意是没有为`App`提供`children`属性，但是在`Example`组件中显然不会报错。

## 2.不支持泛型

通常我们可以像定义函数的泛型一样定义`React`的函数式组件，比如常用的`Table`组件
```tsx
type GenericComponentProps<T> = {
  datasSource: T
  column: ColumnProps<T>
}
const GenericComponent = <T>(props: GenericComponentProps<T>) => {/*...*/}
```

但是使用`React.FC`的时候无能为力了
```tsx
const GenericComponent: React.FC</* ??? */> = <T>(props: GenericComponentProps<T>) => {/*...*/}
```

## 3. 使组件作为命名空间的类型定义更困难

如下的例子
```tsx
<Select>
	<Select.Item />
</Select>
```

在`React.FC`中定义`Select`和`Select.Items`的属性通常需要
```tsx
const  Select: React.FC<SelectProps> & { Item: React.FC<ItemProps> } = (props) => {/* ... */ }
Select.Item = (props) => { /*...*/ }
```

而是用自己的类型定义仅仅只需要
```tsx
const Select = (props: SelectProps) => {/* ... */}
Select.Item = (props: ItemProps) => { /*...*/ }
```

## 4.不能正确的为defaultProps工作

当我们不使用`React.FC`时，这样是可以正确的编译的。
```tsx
type  ComponentProps = { name: string; }

const  Component = ({ name }: ComponentProps) => (<div>
	{name.toUpperCase()} /* Safe since name is required */
</div>);
Component.defaultProps = { name: "John" };

const  Example = () => (<Component />) 
```

但如果使用`React.FC`则会有问题：如果是使用`React.FC<name: string>`将会使`name`变成必传属性，

或者使用`React.FC<name?: string>`则会使`name.toUpperCase()`报一个类型错误。

## * React.FC的好处

不过`React.FC`也不是一无是处，他定义了一个返回的类型约束

```tsx
const Component = () => {
  return undefined; // 当这样返回类型时使用React.FC能快速捕捉错误
}
```

但是这并不能节省多少的工作量:
```tsx
const Component1 = (props: ComponentProps): JSX.Element => { /*...*/ }
const Component2: FC<ComponentProps> = (props) => { /*...*/ }
```