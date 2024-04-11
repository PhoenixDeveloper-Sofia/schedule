import './style/global.scss'
import LineChartComponent from './components/LineChartComponent'
import PieChartComponent from './components/PieChartComponent'
import BarChartComponent from './components/BarChartComponent'
import AreaChartComponent from './components/AreaChartComponent'

function App() {
  return (
    <div className='wrapper' translate='no'>
      <div className="container">
      <AreaChartComponent/>
      <BarChartComponent/>
      <LineChartComponent/>
      <PieChartComponent/>
      </div>
    </div>
  )
}

export default App
