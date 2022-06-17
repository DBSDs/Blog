# 解读antd的构建流程

首先从antd的项目启动脚本开始

```json
"start": "antd-tools run clean && cross-env NODE_ENV=development concurrently \"bisheng start -c ./site/bisheng.config.js\"",
```

[antd-tools] 是antd-tools run clean 主要是清除项目中的缓存文件，主要是通过 bisheng start -c ./site/bisheng 去启动的


然后来到@node_modules/bisheng 下查看 [package.json]
```json
"bin": {
    "bisheng": "bin/bisheng"
},
```

之后视角来到 @node_modules/bisheng/bin/bisheng 下是一个脚本文件
```
#!/usr/bin/env node

const program = require('commander');
const package = require('../package.json');

program
  .version(package.version)
  .usage('[command] [options]')
  .command('start [options]', 'to start a server')
  .command('build [options]', 'to build and write static files to `config.output`')
  .command('gh-pages [options]', 'to deploy website to gh-pages')
  .parse(process.argv);

process.on('SIGINT', function() {
  program.runningCommand && program.runningCommand.kill('SIGKILL');
  process.exit(0);
});
```

可以看到通过输入的命令去启动不同的文件,其中 bisheng-start来到
```
#!/usr/bin/env node

const program = require('commander');
const BiSheng = require('../lib');

program
  .option('-c, --config <path>', 'set config path. defaults to ./bisheng.config.js')
  .parse(process.argv);

BiSheng.start(program);

```

接着来到 @node_modules/bisheng/lib/index 下
```js
exports.start = function start(program) {
  var configFile = path.join(process.cwd(), program.config || 'bisheng.config.js');
  // 
  var bishengConfig = getBishengConfig(configFile);
  var themeConfig = getThemeConfig(bishengConfig.theme);
  context.initialize({
    bishengConfig: bishengConfig,
    themeConfig: themeConfig
  });
  mkdirp.sync(bishengConfig.output);
  var template = fs.readFileSync(bishengConfig.htmlTemplate).toString(); // dev manifest

  var manifest = {
    js: ["".concat(bishengConfig.entryName, ".js")],
    // inject style
    css: []
  };

  var templateData = _objectSpread({
    root: '/',
    manifest: manifest
  }, bishengConfig.htmlTemplateExtraData || {});

  var templatePath = path.join(process.cwd(), bishengConfig.output, 'index.html');
  fs.writeFileSync(templatePath, nunjucks.renderString(template, templateData));
  generateEntryFile(bishengConfig.theme, bishengConfig.entryName, '/');
  var webpackConfig = (0, _updateWebpackConfig["default"])((0, _getWebpackCommonConfig["default"])(), 'start');
  webpackConfig.plugins.push(new webpack.HotModuleReplacementPlugin());
  webpackConfig.plugins.push(new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development')
    }
  }));

  var serverOptions = _objectSpread({
    quiet: true,
    hot: true
  }, bishengConfig.devServerConfig, {
    contentBase: path.join(process.cwd(), bishengConfig.output),
    historyApiFallback: true,
    host: 'localhost'
  });

  WebpackDevServer.addDevServerEntrypoints(webpackConfig, serverOptions);
  var compiler = webpack(webpackConfig);
  var server = new WebpackDevServer(compiler, serverOptions);
  server.listen(bishengConfig.port, '0.0.0.0', function () {
    return (0, _openBrowser["default"])("http://localhost:".concat(bishengConfig.port));
  });
};

```
