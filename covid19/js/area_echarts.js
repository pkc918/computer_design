// 初始化echart实例对象
var myChart = echarts.init(document.getElementById('map'));


// 指定图表的配置项和数据
var option = {
   title: {
      text: '全国疫情地图(累计确诊)',
      textStyle: {
         color: 'gold',
         fontStyle: 'normal',

      },
      left: 'center',
      top: '40px'

   },
   tooltip: {
      trigger: 'item'
   },
   visualMap: { // 左侧小导航图标
      show: true,
      x: 'left',
      y: 'bottom',
      textStyle: {
         fontSize: 14,
         color: "#fff"
      },
      splitList: [{
         start: 1,
         end: 9
      },
      {
         start: 10,
         end: 99
      },
      {
         start: 100,
         end: 999
      },
      {
         start: 1000,
         end: 9999
      },
      {
         start: 10000
      }
      ],
      color: ['#8A3310', '#C64918', '#E55B25', '#F2AD92', '#F9DCD1']
   },
   series: [{
      name: '累计确诊人数',
      type: 'map',
      mapType: 'china',
      roam: true, // 拖动和缩放
      itemStyle: { // 图形样式
         normal: {
            borderWidth: .5, //区域边框宽度
            borderColor: '#009fe8', //区域边框颜色
            areaColor: "#ffefd5", //区域颜色
         },
         emphasis: { // 鼠标滑过地图高亮的相关设置
            borderWidth: .5,
            borderColor: '#4b0082',
            areaColor: "#fff",
         }
      },
      label: { // 图形上的文本标签
         normal: {
            show: true, //省份名称
            fontSize: 10,
         },
         emphasis: {
            show: true,
            fontSize: 8,
         }
      },
      data: [] /*{'name': '上海','value': 318}, {'name': '云南','value': 162}*/
   }]
};

// 获取中国各省市特区
var provinces = data.areaTree[0].children

// 遍历每一个省自治区、直辖市
for (var province of provinces) {
   // 将每个省的累计确诊病例数添加到配置项的data中
   option.series[0].data.push({
      'name': province.name,
      'value': province.total.confirm
   })
}

// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);
const baseURL = 'https://lab.isaaclin.cn';
myChart.on("click", function ({ name }) {
   console.log(name);
   console.log($("#districtThings"));
   $("#districtThings").text(`${name}目前情况`);
   let province = ["北京", "重庆", "上海", "天津"].includes(name) ? `${name}市` : `${name}省`
   province = province === "宁夏省" ? "宁夏回族自治区" : province;
   province = province === "广西省" ? "广西壮族自治区" : province;
   province = province === "新疆省" ? "新疆维吾尔自治区" : province;
   province = province === "西藏省" ? "西藏自治区" : province;
   province = province === "内蒙古省" ? "内蒙古自治区" : province;
   axios.get(`${baseURL}/nCoV/api/area`, {
      params: {
         country: "中国",
         province
      }
   }).then(({ data }) => {
      console.log(data.results[0]);
      const {
         confirmedCount,
         currentConfirmedCount,
         curedCount,
         deadCount,
         suspectedCount
      } = data.results[0];
      $("#total").text(confirmedCount);
      $("#zhiyu").text(curedCount);
      $("#quezhen").text(currentConfirmedCount);
      $("#siwang").text(deadCount);
      $("#doubt").text(suspectedCount)
      // 累计确诊 confirmedCount
      // 现有确诊 currentConfirmedCount
      // 治愈人数 curedCount
      // 疑是感染 suspectedCount
      // 死亡人数  deadCount
      // 
   })
});