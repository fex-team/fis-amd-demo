
// 开起 autuload, 好处是，依赖自动加载。
fis.config.set('modules.postpackager', 'autoload');
fis.config.set('settings.postpackager.autoload.type', 'requirejs');

// 设置成 amd 模式。
fis.config.set('modules.postprocessor.html', 'amd');
fis.config.set('modules.postprocessor.js', 'amd');
fis.config.set('settings.postprocessor.amd', {
    baseUrl: '.',

    // 查看：https://github.com/amdjs/amdjs-api/blob/master/CommonConfig.md#paths-
    // 不同的是，这是编译期处理，路径请填写编译路径。
    paths: {
        jquery: 'modules/libs/jquery/jquery.js',
        bootstrap: 'modules/libs/bootstrap/js/bootstrap.js',
        app: './modules/app',
        css: './modules/css.js'
    },

    // 查看：https://github.com/amdjs/amdjs-api/blob/master/CommonConfig.md#packages-
    // 不同的是，这是编译期处理，路径请填写编译路径。
    packages: [

        {
            name: 'zrender',
            location: 'modules/libs/zrender',
            main: 'zrender'
        },

        {
            name: 'echarts',
            location: 'modules/libs/echarts',
            main: 'echarts'
        }
    ],

    // 设置 bootstrap 依赖 jquery
    // 更多用法见：https://github.com/amdjs/amdjs-api/blob/master/CommonConfig.md#shim-
    // key 为编译期路径。
    shim: {
        'modules/libs/bootstrap/js/bootstrap.js': ['jquery']
    }
});

// 使用 depscombine 是因为，在配置 pack 的时候，命中的文件其依赖也会打包进来。
fis.config.set('modules.packager', 'depscombine');

fis.config.set('pack', {
    // js
    // 依赖也会自动打包进来, 且可以通过控制前后顺来来定制打包，后面的匹配结果如果已经在前面匹配过，将自动忽略。
    'pkg/zrender.js': ['modules/libs/zrender/zrender.js'],
    'pkg/echarts.js': ['modules/libs/echarts/echarts.js']
});

fis.config.set('roadmap.path', [

    // 标记 isMod 为 true, 这样，在 modules 里面的满足 commonjs 规范的 js 会自动包装成 amd js, 以至于能在浏览器中运行。
    //
    {
        reg: /^\/modules\/(.*\.js)$/i,
        isMod: true,
        release: '/modules\/$1'
    }
]);
