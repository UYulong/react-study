import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { addCounter } from '../../../store/features/counter'

export class Home extends PureComponent {

  addCounter(num) {
    this.props.addCounter(num)
  }

  render() {
    const { counter } = this.props
    return (
      <div>
        <h4>Home Couter: {counter}</h4>

        <button onClick={e => this.addCounter(1)}>+1</button>
        <button onClick={e => this.addCounter(5)}>+5</button>
        <button onClick={e => this.addCounter(10)}>+10</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  counter: state.counter.counter
})

const mapDispatchToProps = (dispatch) => ({
  addCounter(num) {
    dispatch(addCounter(num))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)