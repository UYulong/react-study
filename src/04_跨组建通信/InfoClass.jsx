import React, { Component } from 'react'
import ThemeContext from './context'

export class Info extends Component {
  render() {
    const { name, age } = this.context
    return (
      <div>
        <h2>InfoClass: {name}-{age}</h2>
      </div>
    )
  }
}

Info.contextType = ThemeContext

export default Info