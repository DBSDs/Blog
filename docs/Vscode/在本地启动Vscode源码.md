---
sidebar_position: 1
draft: true

---

# 在本地启动Vscode源码

翻译自[how to Contribut](https://github.com/microsoft/vscode/wiki/How-to-Contribute)

## 想要为Vscode做贡献

这里有几种为Vscode项目做贡献的途径，记录Bug，PR代码，提交issues还有创建建议

在克隆和编译此仓库之后，查看问题列表。Issues列表中被标记为 **help wanted** 的问题是非常值得你去提交一个PR改善的。 Issue 被标记 **good frist issue** 是对想要初次贡献vsocode非常好的切入点。如果你想要对重大的改变做贡献，或者这个 issue 已经被分配到具体的实现计划中了，请和被分配的人对这项工作进行讨论。

## 在提交代码之前

为了下载必要的工具，克隆这个仓库，然后使用yarn下载依赖。此时你需要连接到网络。

你需要遵循以下的工具
* Git
* Node.JS x64 version > 16.14.x and < 17
* Yarn,fllow the installation guide
* Python(required for node-gyp;check the node-gyp readme for currently supported Python version)
* A C/C++ compiler tool chain for your platform


## 故障排除

造成问题的一些原因，尝试去删除 ~/.node-gyp 下的内容(alternatively ~/.cache/node-gyp for Linux, ~/Library/Caches/node-gyp/ for macOS, or %USERPROFILE%\AppData\Local\node-gyp for Windows) 第一次然后执行yarn cache clean再次启动。

>如果在windows或者linux 64位系统需要被编译成32位，你需要设置npm_config_arch 环境变量为 ia32 在执行yarn之前。这将会编译所有原始的node模块使用32位的结构。同样地，当在arm跨平台时，设置npm_config_arch 为 arm。


## 开发容器

或者，你可以避免本地依赖下载包

## 