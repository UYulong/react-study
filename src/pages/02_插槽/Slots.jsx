import React, { Component } from 'react'
import Nav from './Nav'

class Slots extends Component {
  render() {
    return (
      <div>
        {/* children 方式 */}
        {/* <Nav>
          <span>back</span>
          <input />
          <i>斜体</i>
        </Nav> */}

        {/* props 方式 */}
        <Nav
          leftSlots={1}
          centerSlots={2}
          rightSlots={3}
        />
      </div>
    )
  }
}

export default Slots
