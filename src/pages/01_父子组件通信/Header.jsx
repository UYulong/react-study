import React, { Component } from 'react'
import propTypes from 'prop-types'

import './style.css'

class Header extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currentIndex: 0
    }
  }

  clickTab(index) {
    this.props.receiveIndex(index) 

    this.setState({
      currentIndex: index
    })
  }

  render() {
    const { movies } = this.props
    const { currentIndex } = this.state

    return (
      <div className='box'>
        <div className='nav'>
          {
            movies.map((item, index) => {
              return (
                <p
                  className={`${currentIndex === index ? 'active' : ''}`}
                  key={item}
                  onClick={() => this.clickTab(index)}
                >
                  {item}
                </p>
              )
            })
          }
        </div>

        <div className='divider' />
      </div>
    )
  }
}

Header.propTypes = {
  movies: propTypes.array.isRequired
}

export default Header