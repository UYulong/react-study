import React, { Component } from 'react'
import { Provider } from 'react-redux'
import store from './store'
import './App.css'

// import Comps from './pages/01_父子组件通信/Main'
// import Comps from './pages/02_插槽/Slots'
// import Comps from './pages/03_作用域插槽/Main'
// import Comps from './pages/04_跨组建通信/Parent'
// import Comps from './pages/05_受控组件/index'
// import Comps from './pages/06_高阶组件/index'
// import Comps from './pages/07_Portal/index'
// import Comps from './pages/08_动画/index'
// import Comps from './pages/09_styled-components/index'
// import Comps from './pages/10_classnames/index'
import Comps from './pages/11_redux/index'


class App extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <Comps />
        </Provider>
      </div>
    )
  }
}

export default App
