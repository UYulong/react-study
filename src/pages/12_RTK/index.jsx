import React, { PureComponent } from 'react'
import './style.css'
import Home from './page/Home'
import About from './page/About'

export class index extends PureComponent {
  render() {
    return (
      <div>
        <h2>App Counter: 0</h2>
        <div className='box'>
          <Home />
          <About />
        </div>
      </div>
    )
  }
}

export default index