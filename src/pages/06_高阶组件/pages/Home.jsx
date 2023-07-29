import React, { PureComponent } from 'react'
import withTheme from '../hoc/with_theme'

export class Home extends PureComponent {
  render() {
    const { name, age } = this.props
    return (
      <div>
        <h2>Home Page: {name}, {age}</h2>
      </div>
    )
  }
}

export default withTheme(Home)