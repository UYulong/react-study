import * as echarts from 'echarts';
import { useEffect, useRef } from 'react';
import './index.scss';

const Line = () => {
  const lineChartRef = useRef(null)

  let lineInstance = null

  const initChart = () => {
    // 基于准备好的dom，初始化echarts实例
    lineInstance = echarts.init(lineChartRef.current);
    // 绘制图表
    lineInstance.setOption({
      tooltip: {},
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          data: [150, 230, 224, 218, 135, 147, 260],
          type: 'line'
        }
      ]
    });
  }

  useEffect(() => {
    initChart()
    return () => lineInstance.dispose()
  })


  return (
    <div ref={lineChartRef} className='line_chart'></div>
  )
}

export default Line