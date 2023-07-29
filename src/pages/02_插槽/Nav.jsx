import React, { Component } from 'react'
import './style.css'

class Nav extends Component {
  render() {
    const { leftSlots, centerSlots, rightSlots } = this.props
    return (
      // children 方式
      // <div className='box'>
      //   <div className="leftSlots">
      //     {children[0]}
      //   </div>
      //   <div className="centerSlots">
      //     {children[1]}
      //   </div>
      //   <div className="rightSlots">
      //     {children[2]}
      //   </div>
      // </div>

      // props 方式
      <div className='box'>
        <div className="leftSlots">
          {leftSlots}
        </div>
        <div className="centerSlots">
          {centerSlots}
        </div>
        <div className="rightSlots">
          {rightSlots}
        </div>
      </div>
    )
  }
}

export default Nav