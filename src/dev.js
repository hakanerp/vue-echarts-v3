import Vue from 'vue';
import IEcharts from './full';

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: {
    IEcharts
  },
  data: () => ({
    loading: true,
    bar: {
      title: {
        text: 'ECharts 入门示例'
      },
      tooltip: {},
      xAxis: {
        data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
      },
      yAxis: {},
      series: [{
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
      }]
    }
  }),
  methods: {
    doLoading() {
      const that = this;
      let data = [];
      for (let i = 0, min = 5, max = 99; i < 6; i++) {
        data.push(Math.floor(Math.random() * (max + 1 - min) + min));
      }
      that.loading = !that.loading;
      that.bar.series[0].data = data;
    },
    onReady(ins) {
      console.dir(ins);
    },
    onClick(event, instance, echarts) {
      console.log(arguments);
    }
  }
});
