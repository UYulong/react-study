import React, { Component } from 'react'
import Header from './Header'


class Main extends Component {
  constructor() {
    super()

    this.state = {
      index: 0,
      movies: ['让子弹飞', '流浪地球', '邪不压正'],
    }
  }

  handleReceiveIndex(index) {
    this.setState({
      index
    })
  }

  render() {
    const { movies, index } = this.state
    return (
      <div>
        <Header
          movies={movies}
          receiveIndex={(index) => this.handleReceiveIndex(index)}
          itemType={(item) => <button>{item}</button>}
        />

        <div>{movies[index]}</div>
      </div>
    )
  }
}

export default Main
