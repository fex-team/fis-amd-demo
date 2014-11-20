Fis amd demo
================================

这是纯前端的 amd demo，[fisp 的版本](https://github.com/fex-team/fisp-amd-demo)，[jello 的版本](https://github.com/fex-team/jello-amd-demo)。

## 安装使用

```
npm intall -g fis
```

此 demo 中使用了三插件，注意安装。

```
npm install fis-postprocessor-amd -g
npm install fis-postpackager-autoload -g
npm install fis-packager-depscombine -g
```

下载次 demo

```
npm install lights -g
lights install fis-amd-demo
```


进入 fis-amd-demo 目录 编译 & 运行

```
// 开起打包
fis release -p
fis server start
```

## 兼容性问题

除了 `require.async` 外，其他写法都兼容。其实原来的写法 `require.async(id | deps, callback)` 等价于 `require(deps, callback)`，不过也没关系，fis-postprocessor-amd 会自动纠正这种用法。

另外不在 `define` 中的 require(id) 这种用法，不是 amd 的标准用法，但是有很多老用户是这么写的，所以做了兼容处理，但是不推荐这么用, 因为这样你是没法把 mod-amd.js 直接换成 require.js 使用。

## 注意

由于 FIS 产出的 module id 为这种格式 ns:path/xxxx, require.js 认为它是 url 导致发送 script 请求而报错。

需要对 require.js 做修改，直接在最下面加上如下配置

```javascript
// 修改 require.js
// 由于 fis 中生成的 module id 格式为 xxx:path 这种格式，被认为是 url 导致 require.js 会发请求
require.jsExtRegExp = /^\/|:\/\/|\?|\.js$/;
```

## amd plugin 不支持 --md5

现在还没想到 amd plugin 的使用场景，fis 编译期，只会处理 amd 本身资源依赖问题，不会处理插件中资源依赖问题，所以这个栗子在用 [css amd plugin](https://github.com/guybedford/require-css) 去加载本项目样式，且开启了 `--md5` 选项的时候会找不到样式文件。