---
sidebar_position: 7
---

# 加快Webpack热加载速度的实践

在开发应用时，很多时候影响我们开发体验最关键的一环其实就是**热加载**的速度。

当你加一条 ```console.log(1);``` 在组件中的时候，要等足足30几秒，任谁都头皮发麻。

而这正是我在开发 ```webpack``` 应用的时候的常态。而我的应用还在逐步的增长...

我在网上找到了很多方法去做优化热加载速度这件事，终于将热加载速度降低至3-5s，提升了6倍！这里列举一些我的优化措施：

## 1.衡量速度

1. 安装 [speed-measure-webpack-plugin](https://github.com/stephencookdev/speed-measure-webpack-plugin/)
   
  这个插件将会列举出我们每个插件在构建中使用的时间，以便优化

2. 使用 webpack 参数 --progress profile

  这个命令行参数是将 webapck 打包过程中的信息暴露出来，我们可以清楚地看到在那些地方使用了较长的时间

## 2.去除不必要的插件

将开发环境下不需要的插件去除

1. ```NormalModuleReplacementPlugin```
   
  由于这个插件是为了根据不同环境打出不同的 api 层，而开发环境是默认的环境引入，所以通常这个插件不需要在开发环境下加载。

2. ```image-webpack-loader```

  这个 loader 是为了在图像的时候提供压缩以提高图片在生产环境下的呈现效果，因此开发环境也不需要。

## 3.使用 esbuild-loader ✨

[esbuild](https://github.com/privatenumber/esbuild-loader) 绝对是前端的明星技术，也是 ```vite``` 构建如此之快的秘籍，既然我的 ```webpack``` 配置齐全，那我是完全没有动力去做升级 ```vite``` 这件事的。我强烈推荐 ```webpack``` 项目中使用 ```esbuild```，**它是所有举措中见效最快的**。

安装
```linux
npm i -D esbuild-loader
```

```js title="webpack.config.js"
  module.exports = {
    module: {
      rules: [
-       {
-         test: /\.js$/,
-         use: 'babel-loader',
-       },
+       {
+         test: /\.js$/,
+         loader: 'esbuild-loader',
+         options: {
+           loader: 'jsx',  // Remove this if you're not using JSX
+           target: 'es2015'  // Syntax to compile to (see options below for possible values)
+         }
+       },

        ...
      ],
    },
  }
```

```js
  module.exports = {
    module: {
      rules: [
-       {
-         test: /\.tsx?$/,
-         use: 'ts-loader'
-       },
+       {
+         test: /\.tsx?$/,
+         loader: 'esbuild-loader',
+         options: {
+           loader: 'tsx',  // Or 'ts' if you don't need tsx
+           target: 'es2015'
+         }
+       },

        ...
      ]
    },
  }
```

## 4.使用 exclude 关键字

使用 ```exclude``` 可以使 loader 跳过该文件/文件夹，是加快 webpack 构建速度的重要手段

```js title="webpack.config.js"
  module.exports = {
    module: {
      rules: [
        {
          test: /\.(ts|tsx)$/,
          use: 'ts-loader',
          // highlight-next-line
          exclude: /node_modules/,
        },
        ...
      ]
    },
  }
```

## 总结

这篇文章作为我的实践，当我弯弯绕绕优化了 ```webpack``` 热加载速度的时候，希望将实践写出来以便给其他人有点参考，也给自己一个参考。由于 ```webpack``` 是这样相当大的一个体系，当然里面有很多我没有讲到的插件和优化手段，这点有问题欢迎随时补充指正。希望每个人体验到丝滑般开发的体验。