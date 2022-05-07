$(function () {
   echarts_1();
   echarts_2();
   echarts_3();
   echarts_7();
   function echarts_1 () {
      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(document.getElementById('echart1'));
      option = {
         title: {
            text: '91.1%',
            x: 'center',
            y: 'center',
            textStyle: {
               fontWeight: 'normal',
               color: '#0580f2',
               fontSize: '24'
            }
         },
         color: ['rgba(176, 212, 251, .1)'],
         series: [{
            name: 'Line 1',
            type: 'pie',
            clockWise: true,
            radius: ['75%', '85%'],
            itemStyle: {
               normal: {
                  label: { show: false },
                  labelLine: { show: false },
               }
            },
            hoverAnimation: false,
            data: [{
               value: 91.14,
               name: '01',
               itemStyle: {
                  normal: {
                     color: { // 完成的圆环的颜色
                        colorStops: [{
                           offset: 0,
                           color: '#00cefc' // 0% 处的颜色
                        }, {
                           offset: 1,
                           color: '#367bec' // 100% 处的颜色
                        }]
                     },
                     label: { show: false },
                     labelLine: { show: false }
                  }
               }
            }, {
               name: '78',
               value: 8.86
            }]

         }]

      }
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
      window.addEventListener("resize", function () {
         myChart.resize();
      });
   }
   function echarts_2 () {
      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(document.getElementById('echart2'));
      option = {
         title: {
            text: '88.6%',
            x: 'center',
            y: 'center',
            textStyle: {
               fontWeight: 'normal',
               color: '#0580f2',
               fontSize: '24'
            }
         },
         color: ['rgba(176, 212, 251, .1)'],
         series: [{
            name: 'Line 1',
            type: 'pie',
            clockWise: true,
            radius: ['75%', '85%'],
            itemStyle: {
               normal: {
                  label: { show: false },
                  labelLine: { show: false },
               }
            },

            hoverAnimation: false,
            data: [{
               value: 88.64,
               name: '01',
               itemStyle: {
                  normal: {
                     color: { // 完成的圆环的颜色
                        colorStops: [{
                           offset: 0,
                           color: '#00cefc' // 0% 处的颜色
                        }, {
                           offset: 1,
                           color: '#367bec' // 100% 处的颜色
                        }]
                     },
                     label: { show: false },
                     labelLine: { show: false }
                  }
               }
            }, {
               name: '78',
               value: 11.36
            }]

         }]

      }
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
      window.addEventListener("resize", function () {
         myChart.resize();
      });
   }
   function echarts_3 () {
      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(document.getElementById('echart3'));
      option = {
         title: {
            text: '53.6%',
            x: 'center',
            y: 'center',
            textStyle: {
               fontWeight: 'normal',
               color: '#0580f2',
               fontSize: '24'
            }
         },
         color: ['rgba(176, 212, 251, .1)'],
         series: [{
            name: 'Line 1',
            type: 'pie',
            clockWise: true,
            radius: ['75%', '85%'],
            itemStyle: {
               normal: {
                  label: { show: false },
                  labelLine: { show: false },
               }
            },

            hoverAnimation: false,
            data: [{
               value: 53.6,
               name: '01',
               itemStyle: {
                  normal: {
                     color: { // 完成的圆环的颜色
                        colorStops: [{
                           offset: 0,
                           color: '#00cefc' // 0% 处的颜色
                        }, {
                           offset: 1,
                           color: '#367bec' // 100% 处的颜色
                        }]
                     },
                     label: { show: false },
                     labelLine: { show: false }
                  }
               }
            }, {
               name: '02',
               value: 46.4
            }]

         }]

      }
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
      window.addEventListener("resize", function () {
         myChart.resize();
      });
   }
   function echarts_7 () {
      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(document.getElementById('echart7'));
      let option = {
         tooltip: {
            trigger: 'axis',
            axisPointer: {
               type: 'cross',
               label: {
                  backgroundColor: '#6a7985'
               }
            }
         },
         legend: {
            data: ['投入资金'],
            textStyle: {
               color: "#fff"
            }
         },
         toolbox: {
            feature: {
               saveAsImage: {}
            }
         },
         grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
         },
         xAxis: [
            {
               type: 'category',
               boundaryGap: false,
               axisLabel: {
                  show: true,
                  textStyle: {
                     color: "#fff"
                  },
                  lineStyle: {
                     color: "#fff"
                  },
               },

               data: [
                  '2月8日',
                  '2月23日',
                  '3月4日',
                  '3月底',
                  '4月19日',
                  '4月31日',
                  '5月31日',
                  '6月底',
                  '7月',
                  '11月底'
               ]
            }
         ],
         yAxis: [
            {
               type: 'value',
               name: '单位（亿元）',
               color: "#fff",
               axisLabel: {
                  textStyle: {
                     color: "#fff"
                  },
               },
            }
         ],
         series: [
            {
               name: '投入资金',
               type: 'line',
               stack: 'Total',
               smooth: true,
               lineStyle: {
                  width: 0
               },
               showSymbol: false,
               areaStyle: {
                  opacity: 0.8,
                  color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                     {
                        offset: 0,
                        color: 'rgb(128, 255, 165)'
                     },
                     {
                        offset: 1,
                        color: 'rgb(1, 191, 236)'
                     }
                  ])
               },
               emphasis: {
                  focus: 'series'
               },
               data: [718.5, 995, 1104.8, 1371.86, 1452, 1499, 1624, 1756, 1864, 4000]
            }
         ]
      };
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
      window.addEventListener("resize", function () {
         myChart.resize();
      });
   }
   // 数据
   let dataSource = {
      "北京": "https://xcx.beijing.gov.cn/yqzc1/index.html",
      "天津": "https://www.tj.gov.cn/sy/ztzl/tjsfyyqfkzt/",
      "河北": "http://www.hebei.gov.cn/hebei/15067610/15068058/index.html",
      "山西": "http://www.shanxi.gov.cn/ztjj/yqfkzccs/sjzccs/",
      "内蒙古": "http://www.nmg.gov.cn/ztzl/qlfkxxgzbdfynmgzxd/yqfkzccs/sjzccs/",
      "辽宁": "http://www.ln.gov.cn/qmzx/yqfkzccs/",
      "吉林": "http://www.jl.gov.cn/szfzt/jlzxd/tzgg/sj/",
      "黑龙江": "https://www.hlj.gov.cn/987/index1.html",
      "上海": "https://www.shanghai.gov.cn/yqfkzccs/index.html",
      "江苏": "https://www.jiangsu.gov.cn/col/col83409/index.html",
      "浙江": "https://www.zj.gov.cn/col/col1229562192/index.html",
      "安徽": "https://www.ah.gov.cn/zwyw/ztzl/fkxxgzbdgrdfyyq/yqfkzccs/sjzccs/index.html",
      "福建": "http://www.fujian.gov.cn/zwgk/ztzl/yqfk/fkzc/",
      "江西": "http://www.jiangxi.gov.cn/col/col61056/index.html",
      "山东": "http://www.shandong.gov.cn/col/col208935/index.html",
      "河南": "https://www.henan.gov.cn/zt/2021zt/yqfkzccs/sjzccs/",
      "湖北": "http://www.hubei.gov.cn/zhuanti/2021zt/yqfkzccs/sjzccs/",
      "湖南": "http://www.hunan.gov.cn/topic/yqfkzccs/yqfkzccs.html",
      "广东": "http://www.gd.gov.cn/gdywdt/zwzt/yqfkzccs/sjzc/index.html",
      "广西": "http://www.gxzf.gov.cn/zt/jd/qlkjxxgzbdgrfyyq/zcwj_28024/",
      "海南": "https://www.hainan.gov.cn/hainan/zccs/list_jjdyyqfkzzz.shtml",
      "重庆": "http://www.cq.gov.cn/zt/yqfk/zccs/",
      "四川": "https://www.sc.gov.cn/10462/yqfkzccs/yqzccszt.shtml",
      "贵州": "http://www.guizhou.gov.cn/zwgk/yqfkzccs/sjzccs/",
      "云南": "http://www.yn.gov.cn/ztgg/yqfk/yqztyqfkzccs/yqztsjzccs/",
      "西藏": "http://www.xizang.gov.cn/xwzx_406/ztzl_416/cxzt/zjz/zcxx/zzq/index.html",
      "陕西": "http://www.shaanxi.gov.cn/xw/ztzl/zxzt/yqkg/sj/",
      "甘肃": "http://www.gansu.gov.cn/gsszf/c117038/yqfkcs.shtml",
      "青海": "http://www.qinghai.gov.cn/xxgk/zwzt_2803/yqfk/sj/",
      "宁夏": "http://www.nx.gov.cn/ztsj/zt/yqfkzccs/sjzccs/",
      "新疆": "http://xinjiang.gov.cn/xinjiang/c100223/fkxxgzbdgz.shtml",
      "兵团": "http://www.xjbt.gov.cn/yqfk/sjzccs/",
   }
   for (let item in dataSource) {
      let $button = `<a class="btn btn-primary" target="_blank" role="button" href="${dataSource[item]}">${item}</a>`
      $("#boxnavMain").append($button)
   }
})


















