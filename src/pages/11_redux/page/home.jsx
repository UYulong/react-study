import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { subCounterAction } from '../../../store/couter';

export class Home extends PureComponent {

  subCounter(num) {
    this.props.subCounter(num)
  }

  render() {
    const { counter } = this.props
    return (
      <div>
        <h4>Home Page</h4>
        <p>counter: {counter}</p>

        <hr />

        <button onClick={e => this.subCounter(1)}>-1</button>
        <button onClick={e => this.subCounter(2)}>-2</button>
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
    dispatch(subCounterAction(num))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)