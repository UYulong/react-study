import React, { Component } from 'react'
import Son from './Son'
import ThemeContext from './context'

export class Parent extends Component {
  render() {
    return (
      <ThemeContext.Provider value={{ name: 'zhangsan', age: 18 }}>
        <div>
          <Son />
        </div>
      </ThemeContext.Provider >
    )
  }
}

export default Parent