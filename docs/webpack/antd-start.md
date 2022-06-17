# 解读antd的构建流程

首先从antd的项目启动脚本开始

```json
"start": "antd-tools run clean && cross-env NODE_ENV=development concurrently \"bisheng start -c ./site/bisheng.config.js\"",
```

[antd-tools] 是antd-tools run clean 主要是清除项目中的缓存文件，主要是通过 bisheng start -c ./site/bisheng 去启动的


然后来到@node_modules/bisheng 下 查看 [package.json]
```json
"bin": {
    "bisheng": "bin/bisheng"
},
```
