import React, { Component } from 'react'
import './App.css'

// import Comps from './01_父子组件通信/Main'
// import Comps from './02_插槽/Slots'
// import Comps from './03_作用域插槽/Main'
// import Comps from './04_跨组建通信/Parent'
// import Comps from './05_受控组件/index'
// import Comps from './06_高阶组件/index'
// import Comps from './07_Portal/index'
// import Comps from './08_动画/index'
import Comps from './09_styled-components/index'

class App extends Component {
  render() {
    return (
      <div>
        <Comps />
      </div>
    )
  }
}

export default App
