import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { subCounter } from '../../../store/features/counter'

export class About extends PureComponent {

  subCounter(num) {
    this.props.subCounter(num)
  }

  render() {
    const { counter } = this.props
    return (
      <div>
        <h4>About Couter: {counter}</h4>

        <button onClick={e => this.subCounter(1)}>-1</button>
        <button onClick={e => this.subCounter(5)}>-5</button>
        <button onClick={e => this.subCounter(10)}>-10</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  counter: state.counter.counter
})

const mapDispatchToProps = (dispatch) => ({
  subCounter(num) {
    dispatch(subCounter(num))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(About)