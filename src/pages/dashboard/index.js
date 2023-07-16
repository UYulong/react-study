// Dashbaord
import Bar from "./bar"
import './index.scss'
import Line from "./line"

const Dashboard = () => {
  return (
    <div className='main_container'>
      {/* Echarts */}
      <div className="top">
        <div className="top_left">
          <Bar />
        </div>

        <div className="top_right">
          <Line />
        </div>
      </div>
    </div>
  )
}

export default Dashboard