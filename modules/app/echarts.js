define(function(require) {
    var ec = require('echarts');

    require('echarts/chart/bar');

    return function() {
        // 基于准备好的dom，初始化echarts图表
        var myChart = ec.init(document.getElementById('main'));

        var option = {
            tooltip: {
                show: true
            },
            legend: {
                data:['销量']
            },
            xAxis : [
                {
                    type : 'category',
                    data : ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
                }
            ],
            yAxis : [
                {
                    type : 'value'
                }
            ],
            series : [
                {
                    "name":"销量",
                    "type":"bar",
                    "data":[5, 20, 40, 10, 10, 20]
                }
            ]
        };

        // 为echarts对象加载数据
        myChart.setOption(option);
    }
});