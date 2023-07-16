import React, { Component } from 'react'
import InfoFunc from './InfoFunc'
import InfoClass from './InfoClass'

export class Son extends Component {
  render() {
    return (
      <div>
        <InfoFunc />
        <InfoClass />
      </div>
    )
  }
}

export default Son