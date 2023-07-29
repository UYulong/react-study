import React, { PureComponent } from 'react'
import ThemeContext from './context/theme_context'
import Home from './pages/Home'
import About from './pages/About'

export class index extends PureComponent {
  render() {
    return (
      <ThemeContext.Provider value={{ name: 'lisi', age: 19 }}>
        <Home />
        <About />
      </ThemeContext.Provider>
    )
  }
}

export default index