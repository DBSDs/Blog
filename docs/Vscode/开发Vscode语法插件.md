---
sidebar_position: 2

---

# 开发Vscode语法插件

## 背景
由于我们每次开发中需要存在大量的公共代码。例如：在实际开发中，每次创建一个新的组件都需要先申明以下一堆**模版代码**。


```typescript
import React from 'react';
import { Select } from 'antd';

import { useFetch } from '@/hooks';

type TDouble = {
}

const Double: React.FC<TDouble> = (props) => {
 return <React.Fragment></React.Fragment>
}
export default Double
```
很快地，有人会质疑为什么需要用使用生成这些代码块呢，用复制粘贴不能解决吗？

> **为什么不用复制粘贴😂  **
> 
> 虽然复制粘贴是屠龙宝技，但是不能解决我在生成模版代码的时候需要**根据文件名生成不同的组件名代码**，也不能在生成代码后**将光标快速定位需要的地方**

## 创建一个插件
**安装全局依赖**
```zsh
npm install -g yo                // 可以快速创建模版代码
npm install -g generator-code    // 安装vscode的模版
```
运行 `yo code` 即可初始化一个开发插件的模版  

**运行插件**  
在 `vscode`商城中下载 `javascript debugger`  
然后点击运行->启动调试，第一个插件就这样创建好了

## 开发Vscode代码片段插件
### 跳格符
可以通过跳格符控制我们的光标位置。从${1}-${999}…,${0}代表是最后一个光标停留的位置。例${0}、${1}、${2}
 控制光标的位置使用tab按键，
### 占位字符
可以使光标停留的位置有一个默认的字符，例${1:first}
### 使用选项
可以将站位字符以选项的方式展示出来，给予选择。例${2|string,number,boolean}
### 使用变量
$name 或者 ${name:default}, 可以插入一个变量。未设置变量的时候，将插入默认值或者空字符串，以下是一些存在的变量。
* 当前选中的词、行、行数。例 TM_SELECTED_TEXT 当前行
* 当前的文件名、文件路径。例 TM_FILENAME 当前 文件名
* 当前的时间，年月日、时分秒
* 随机值 附:变量的官方文档
## 发布插件
登陆[Azure DevOps](https://azure.microsoft.com/zh-cn/products/devops/)，创建 azure 用户，创建用户组。

安装全局依赖
```zsh
npm install -g vsce
```
发布插件
```zsh
vsce publish
```
打包插件
```zsh
vsce package
```
 
## 总结
最后推广一下我的两个插件:
* react-hooks(typescript环境下) 自动补全插件: [react-hooks-snippet/typescript](https://marketplace.visualstudio.com/items?itemName=op-chen.react-hooks-snippet)
* js 函数快速生成注释模版插件(待完善中...): [auto comment](https://marketplace.visualstudio.com/items?itemName=op-chen.auto-comment)