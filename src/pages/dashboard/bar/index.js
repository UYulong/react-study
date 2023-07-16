import * as echarts from 'echarts';
import { useEffect, useRef } from 'react';
import './index.scss';

const Bar = () => {
  const barChartRef = useRef(null)

  let barInstance = null

  const initChart = () => {
    // 基于准备好的dom，初始化echarts实例
    barInstance = echarts.init(barChartRef.current);
    // 绘制图表
    barInstance.setOption({
      tooltip: {},
      xAxis: {
        data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
      },
      yAxis: {},
      series: [
        {
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
        }
      ]
    });
  }

  useEffect(() => {
    initChart()
    return () => barInstance.dispose()
  })


  return (
    <div ref={barChartRef} className='bar_chart'></div>
  )
}

export default Bar