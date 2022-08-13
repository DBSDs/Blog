---
sidebar_position: 2

---

# 开发Vscode语法插件

## 跳格符

可以通过跳格符控制我们的光标位置。从`${1}`-`${999}`...,`${0}`代表是最后一个光标停留的位置。例`${0}`、`${1}`、`${2}`

控制光标的位置使用`tab`按键，

## 占位字符

可以使光标停留的位置有一个默认的字符，例`${1:first}`

## 使用选项

可以将站位字符以选项的方式展示出来，给予选择。例`${2|string,number,boolean}`

## 使用变量

`$name` 或者 `${name:default}`, 可以插入一个变量。未设置变量的时候，将插入默认值或者空字符串，以下是一些存在的变量。

* 当前选中的词、行、行数。例 `TM_SELECTED_TEXT` 当前行
* 当前的文件名、文件路径。例 `TM_FILENAME` 当前 文件名
* 当前的时间，年月日、时分秒
* 随机值

附:[变量的官方文档](https://code.visualstudio.com/docs/editor/userdefinedsnippets#_snippet-syntax)