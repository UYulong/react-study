import React, { Component } from 'react'
import './App.css'

// import Comps from './01_父子组件通信/Main'
// import Comps from './02_插槽/Slots'
import Comps from './03_作用域插槽/Main'

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
