import React, { PureComponent } from 'react'
import Home from './page/home'
import About from './page/about'

import './style.css'
import Category from './page/category'

export class index extends PureComponent {
  render() {
    return (
      <div>
        <h2>index page</h2>

        <div className='content'>
          <Home />
          <About />
        </div>

        <div className='content'>
          <Category />
        </div>
      </div>
    )
  }
}

export default index