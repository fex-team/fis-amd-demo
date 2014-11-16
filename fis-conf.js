// 开起 autuload, 好处是，依赖自动加载。
fis.config.set('modules.postpackager', 'autoload');
fis.config.set('settings.postpackager.autoload.type', 'requirejs');

// 设置成 amd 模式。
fis.config.set('modules.postprocessor.html', 'amd');
fis.config.set('modules.postprocessor.js', 'amd');
fis.config.set('settings.postprocessor.amd', {
    baseUrl: './modules',
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
