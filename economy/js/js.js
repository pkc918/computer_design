/****/
$(document).ready(function () {
   var whei = $(window).width()
   $("html").css({ fontSize: whei / 20 })
   $(window).resize(function () {
      var whei = $(window).width()
      $("html").css({ fontSize: whei / 20 })
   });
});

$(window).load(function () { $(".loading").fadeOut() })
$(function () {
   echarts_1()
   echarts_2()
   pe04()
   pe01()
   pe02()
   pe03()
   function echarts_1 () {
      var myChart = echarts.init(document.getElementById('echarts1'));
      var option;

      var dataMap = {};
      function dataFormatter (obj) {
         // prettier-ignore
         var pList = ["中国"];
         var temp;
         for (var year = 2017; year <= 2021; year++) {
            var max = 0;
            var sum = 0;
            temp = obj[year];
            for (var i = 0, l = temp.length; i < l; i++) {
               max = Math.max(max, temp[i]);
               sum += temp[i];
               obj[year][i] = {
                  name: pList[i],
                  value: temp[i]
               };
            }
            obj[year + 'max'] = Math.floor(max / 100) * 100;
            obj[year + 'sum'] = sum;
         }
         return obj;
      }
      // prettier-ignore
      dataMap.dataPI = dataFormatter({
         //max : 4000,
         2017: [25974],
         2018: [28228],
         2019: [30733],
         2020: [32189],
         2021: [35128],
      });
      // prettier-ignore
      dataMap.dataSI = dataFormatter({
         //max : 26600,
         2017: [7.3],
         2018: [6.5],
         2019: [5.8],
         2020: [2.1],
         2021: [8.1],
      });
      // prettier-ignore
      dataMap.dataTI = dataFormatter({
         //max : 25000,
         2017: [22408],
         2018: [24336],
         2019: [26523],
         2020: [27540],
         2021: [29975],
      });
      dataMap.dataYI = dataFormatter({
         //max : 25000,
         2017: [7.3],
         2018: [8.6],
         2019: [9.0],
         2020: [3.8],
         2021: [8.8]
      });
      dataMap.dataNI = dataFormatter({
         //max : 25000,
         2017: [14620],
         2018: [15829],
         2019: [17186],
         2020: [17917],
         2021: []
      });
      dataMap.dataOI = dataFormatter({
         //max : 25000,
         2017: [8.7],
         2018: [8.3],
         2019: [8.6],
         2020: [4.3],
         2021: []
      });
      option = {
         baseOption: {
            timeline: {
               axisType: 'category',
               autoPlay: true,
               playInterval: 1500,
               data: [
                  '2017-01-01',
                  '2018-01-01',
                  '2019-01-01',
                  '2020-01-01',
                  '2021-01-01'
               ],
               label: {
                  formatter: function (s) {
                     return new Date(s).getFullYear();
                  },
                  textStyle: {
                     color: "#fff"
                  }
               },
               lineStyle: {
                  color: "#fff"
               },
               controlStyle: {
                  normal: {
                     borderColor: "#fff"
                  }
               }
            },
            tooltip: {},
            legend: {
               left: 'left',
               data: [
                  '居民人均可支配收入(元)',
                  '居民人均可支配收入比上年增长(%)',
                  '居民人均可支配收入中位数(元)',
                  '居民人均可支配收入中位数比上年增长(%)',
                  '居民人均可支配工资性收入(元)',
                  '居民人均可支配工资性收入比上年增长(%)',
               ],
               textStyle: {
                  color: "#fff"
               }
            },
            calculable: true,
            grid: {
               top: 80,
               bottom: 100,
               tooltip: {
                  trigger: 'axis',
                  axisPointer: {
                     type: 'shadow',
                     label: {
                        show: true,
                        formatter: function (params) {
                           return params.value.replace('\n', '');
                        }
                     }
                  }
               }
            },
            xAxis: [
               {
                  type: 'category',
                  axisLabel: {
                     interval: 0,
                     textStyle: {
                        color: "#fff"
                     },
                  },
                  data: ['全国'],
                  splitLine: { show: false },
                  axisLine: {
                     show: false,
                     color: "#fff"
                  }
               }
            ],
            yAxis: [
               {
                  type: 'value',
                  axisLabel: {
                     textStyle: {
                        color: "#fff"
                     },
                  },
                  axisLine: {
                     show: false,
                     color: "#fff"
                  }
               },
            ],
            series: [
               {
                  name: '居民人均可支配收入(元)',
                  type: 'bar'
               },
               { name: '居民人均可支配收入比上年增长(%)', type: 'bar' },
               { name: '居民人均可支配收入中位数(元)', type: 'bar' },
               { name: '居民人均可支配收入中位数比上年增长(%)', type: 'bar' },
               { name: '居民人均可支配工资性收入(元)', type: 'bar' },
               { name: '居民人均可支配工资性收入比上年增长(%)', type: 'bar' }
            ]
         },
         options: [
            {
               series: [
                  { data: dataMap.dataPI['2017'] },
                  { data: dataMap.dataSI['2017'] },
                  { data: dataMap.dataTI['2017'] },
                  { data: dataMap.dataYI['2017'] },
                  { data: dataMap.dataNI['2017'] },
                  { data: dataMap.dataOI['2017'] }
               ]
            },
            {
               series: [
                  { data: dataMap.dataPI['2018'] },
                  { data: dataMap.dataSI['2018'] },
                  { data: dataMap.dataTI['2018'] },
                  { data: dataMap.dataYI['2018'] },
                  { data: dataMap.dataNI['2018'] },
                  { data: dataMap.dataOI['2018'] }
               ]
            },
            {
               series: [
                  { data: dataMap.dataPI['2019'] },
                  { data: dataMap.dataSI['2019'] },
                  { data: dataMap.dataTI['2019'] },
                  { data: dataMap.dataYI['2019'] },
                  { data: dataMap.dataNI['2019'] },
                  { data: dataMap.dataOI['2019'] }
               ]
            },
            {
               series: [
                  { data: dataMap.dataPI['2020'] },
                  { data: dataMap.dataSI['2020'] },
                  { data: dataMap.dataTI['2020'] },
                  { data: dataMap.dataYI['2020'] },
                  { data: dataMap.dataNI['2020'] },
                  { data: dataMap.dataOI['2020'] }
               ]
            },
            {
               series: [
                  { data: dataMap.dataPI['2021'] },
                  { data: dataMap.dataSI['2021'] },
                  { data: dataMap.dataTI['2021'] },
                  { data: dataMap.dataYI['2021'] },
                  { data: dataMap.dataNI['2021'] },
                  { data: dataMap.dataOI['2021'] }
               ]
            }
         ]
      };
      myChart.setOption(option);
      // window.addEventListener("resize", function () {
      //    myChart.resize();
      // });


   }
   function echarts_2 () {
      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(document.getElementById('echarts2'));

      option = {
         tooltip: {
            trigger: 'axis',
            axisPointer: {
               lineStyle: {
                  color: '#dddc6b'
               }
            }
         },
         grid: {
            left: '15',
            top: '30',
            right: '20',
            bottom: '10',
            containLabel: true
         }, legend: {
            data: ['CPI', 'PPI'],
            right: 'center',
            top: 0,
            textStyle: {
               color: "#fff"
            },
            itemWidth: 14,
            itemHeight: 10,
            // itemGap: 35
         },

         xAxis: [{
            type: 'category',
            boundaryGap: false,
            axisLabel: {
               textStyle: {
                  color: "rgba(255,255,255,.6)",
                  fontSize: 14,
               },
            },
            axisLine: {
               lineStyle: {
                  color: 'rgba(255,255,255,.1)'
               }

            },
            data: ["2021年1月", "2021年4月", "2021年7月", "2021年10月", "2022年1月", "2022年3月"]

         }, {
            axisPointer: { show: false },
            axisLine: { show: false },
            position: 'bottom',
            offset: 20,
         }],

         yAxis: [{
            type: 'value',
            axisTick: { show: false },
            // splitNumber: 6,
            axisLine: {
               lineStyle: {
                  color: 'rgba(255,255,255,.1)'
               }
            },
            axisLabel: {
               textStyle: {
                  color: "rgba(255,255,255,.6)",
                  fontSize: 14,
               },
            },
            splitLine: {
               lineStyle: {
                  color: 'rgba(255,255,255,.1)'
               }
            }
         }],
         series: [
            {
               name: 'CPI',
               type: 'line',
               smooth: true,
               symbol: 'circle',
               symbolSize: 5,
               showSymbol: false,
               lineStyle: {
                  normal: {
                     color: 'rgba(228, 228, 126, 1)',
                     width: 2
                  }
               },
               areaStyle: {
                  normal: {
                     color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(228, 228, 126, .8)'
                     }, {
                        offset: 0.8,
                        color: 'rgba(228, 228, 126, 0.1)'
                     }], false),
                     shadowColor: 'rgba(0, 0, 0, 0.1)',
                  }
               },
               itemStyle: {
                  normal: {
                     color: '#dddc6b',
                     borderColor: 'rgba(221, 220, 107, .1)',
                     borderWidth: 12
                  }
               },
               data: [-0.3, 0.9, 1.0, 1.5, 0.9, 1.5]
            }, {
               name: 'PPI',
               type: 'line',
               smooth: true,
               symbol: 'circle',
               symbolSize: 5,
               showSymbol: false,
               lineStyle: {

                  normal: {
                     color: 'rgba(255, 128, 128, 1)',
                     width: 2
                  }
               },
               areaStyle: {
                  normal: {
                     color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(255, 128, 128,.8)'
                     }, {
                        offset: 0.8,
                        color: 'rgba(255, 128, 128, .1)'
                     }], false),
                     shadowColor: 'rgba(0, 0, 0, 0.1)',
                  }
               },
               itemStyle: {
                  normal: {
                     color: '#ff8080',
                     borderColor: 'rgba(221, 220, 107, .1)',
                     borderWidth: 12
                  }
               },
               data: [0.3, 6.8, 9.0, 13.5, 9.1, 1.8]

            },
         ]
      };

      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
      window.addEventListener("resize", function () {
         myChart.resize();
      });
   }
   function pe01 () {
      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(document.getElementById('pe01'));
      var txt = 30.2
      option = {
         title: {
            text: txt + '%',
            x: 'center',
            y: 'center',
            textStyle: {
               fontWeight: 'normal',
               color: '#fff',
               fontSize: '18'
            }
         },
         color: '#49bcf7',

         series: [{
            name: 'Line 1',
            type: 'pie',
            clockWise: true,
            radius: ['65%', '80%'],
            itemStyle: {
               normal: {
                  label: {
                     show: false
                  },
                  labelLine: {
                     show: false
                  }
               }
            },
            hoverAnimation: false,
            data: [{
               value: txt,
               name: '已使用',
               itemStyle: {
                  normal: {
                     color: '#eaff00',
                     label: {
                        show: false
                     },
                     labelLine: {
                        show: false
                     }
                  }
               }
            }, {
               name: '未使用',
               value: 100 - txt
            }]
         }]
      };

      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
      window.addEventListener("resize", function () {
         myChart.resize();
      });
   }
   function pe02 () {
      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(document.getElementById('pe02'));
      var txt = 29.2
      option = {
         title: {
            text: txt + '%',
            x: 'center',
            y: 'center',
            textStyle: {
               fontWeight: 'normal',
               color: '#fff',
               fontSize: '18'
            }
         },
         color: '#49bcf7',

         series: [{
            name: 'Line 1',
            type: 'pie',
            clockWise: true,
            radius: ['65%', '80%'],
            itemStyle: {
               normal: {
                  label: {
                     show: false
                  },
                  labelLine: {
                     show: false
                  }
               }
            },
            hoverAnimation: false,
            data: [{
               value: txt,
               name: '已使用',
               itemStyle: {
                  normal: {
                     color: '#ea4d4d',
                     label: {
                        show: false
                     },
                     labelLine: {
                        show: false
                     }
                  }
               }
            }, {
               name: '未使用',
               value: 100 - txt
            }]
         }]
      };

      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
      window.addEventListener("resize", function () {
         myChart.resize();
      });
   }
   function pe03 () {
      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(document.getElementById('pe03'));
      var txt = 32.7
      option = {
         title: {
            text: txt + '%',
            x: 'center',
            y: 'center',
            textStyle: {
               fontWeight: 'normal',
               color: '#fff',
               fontSize: '18'
            }
         },
         color: '#49bcf7',

         series: [{
            name: 'Line 1',
            type: 'pie',
            clockWise: true,
            radius: ['65%', '80%'],
            itemStyle: {
               normal: {
                  label: {
                     show: false
                  },
                  labelLine: {
                     show: false
                  }
               }
            },
            hoverAnimation: false,
            data: [{
               value: txt,
               name: '已使用',
               itemStyle: {
                  normal: {
                     color: '#395ee6',
                     label: {
                        show: false
                     },
                     labelLine: {
                        show: false
                     }
                  }
               }
            }, {
               name: '未使用',
               value: 100 - txt
            }
            ]
         }]
      };

      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
      window.addEventListener("resize", function () {
         myChart.resize();
      });
   }
   function pe04 () {
      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(document.getElementById('lastecharts'));
      option = {

         tooltip: {
            trigger: 'axis'
         },
         radar: [{
            indicator: [{
               text: 'GDP',
               max: 10
            }, {
               text: '粮食总产量',
               max: 10
            }, {
               text: '总人口',
               max: 10
            }, {
               text: '自然条件',
               max: 10
            }, {
               text: '自然资源',
               max: 10
            }],
            textStyle: {
               color: 'red'
            },
            center: ['50%', '50%'],
            radius: '70%',
            startAngle: 90,
            splitNumber: 4,
            shape: 'circle',

            name: {
               padding: -5,
               formatter: '{value}',
               textStyle: {
                  fontSize: 14,
                  color: 'rgba(255,255,255,.6)'
               }
            },
            splitArea: {
               areaStyle: {
                  color: 'rgba(255,255,255,.05)'
               }
            },
            axisLine: {
               lineStyle: {
                  color: 'rgba(255,255,255,.05)'
               }
            },
            splitLine: {
               lineStyle: {
                  color: 'rgba(255,255,255,.05)'
               }
            }
         },],
         series: [{
            name: '雷达图',
            type: 'radar',
            tooltip: {
               trigger: 'item'
            },
            data: [{
               name: '综合评分',
               value: [9, 10, 10, 9, 6],
               lineStyle: {
                  normal: {
                     color: '#03b48e',
                     width: 2,
                  }
               },
               areaStyle: {
                  normal: {
                     color: '#03b48e',
                     opacity: .4
                  }
               },
               symbolSize: 0,

            }]
         },]
      };

      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
      window.addEventListener("resize", function () {
         myChart.resize();
      });
   }
})




























