// 开起 autuload, 好处是，依赖自动加载。
fis.config.set('modules.postpackager', 'autoload');
fis.config.set('settings.postpackager.autoload.type', 'requirejs');

// 设置成 amd 模式。
fis.config.set('modules.postprocessor.html', 'amd');
fis.config.set('modules.postprocessor.js', 'amd');
fis.config.set('settings.postprocessor.amd', {
    baseUrl: '.',
    paths: {
        app: './modules/app'
    },
    packages: [

        // zrender 模块下的
        {
            name: 'zrender',
            location: 'modules/libs/zrender',
            main: 'zrender'
        },

        // 本模块下的

        {
            name: 'echarts',
            location: 'modules/libs/echarts',
            main: 'echarts'
        }
    ]
});

// 使用 depscombine 是因为，在配置 pack 的时候，命中的文件其依赖也会打包进来。
fis.config.set('modules.packager', 'depscombine');

fis.config.set('pack', {
    // js
    // 依赖也会自动打包进来, 且可以通过控制前后顺来来定制打包，后面的匹配结果如果已经在前面匹配过，将自动忽略。
    'pkg/zrender.js': ['modules/libs/zrender/zrender.js'],
    'pkg/echarts.js': ['modules/libs/echarts/echarts.js']
});
