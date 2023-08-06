import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { addCounter } from '../../../store/features/counter'
import { fetchHomeData } from '../../../store/features/home'

export class Home extends PureComponent {

  async componentDidMount() {
    this.props.fetchHomeData()
  }

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
  },

  fetchHomeData() {
    dispatch(fetchHomeData())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)