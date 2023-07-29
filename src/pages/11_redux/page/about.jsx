import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { addCounterAction } from '../../../store/actionCreators';

export class About extends PureComponent {

  addCounter(num) {
    this.props.addCounter(num)
  }

  render() {
    const { counter } = this.props
    return (
      <div>
        <h4>Abount Page:</h4>
        <p>counter: {counter}</p>
        <hr />

        <button onClick={e => this.addCounter(1)}>+1</button>
        <button onClick={e => this.addCounter(2)}>+2</button>
        <button onClick={e => this.addCounter(10)}> +10</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  counter: state.counter
})

const mapDispatchToProps = (dispatch) => ({
  addCounter(num) {
    dispatch(addCounterAction(num))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(About)