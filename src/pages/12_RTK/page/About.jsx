import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { subCounter } from '../../../store/features/counter'

export class About extends PureComponent {

  subCounter(num) {
    this.props.subCounter(num)
  }

  render() {
    const { counter, banners, recommends } = this.props
    return (
      <div>
        <h4>About Couter: {counter}</h4>

        <button onClick={e => this.subCounter(1)}>-1</button>
        <button onClick={e => this.subCounter(5)}>-5</button>
        <button onClick={e => this.subCounter(10)}>-10</button>

        <hr />

        <div>
          <h4>Banners数据：</h4>
          <ul>
            {
              banners.map((item, index) => {
                return <li key={index}>{item.title}</li>
              })
            }
          </ul>
        </div>

        <div>
          <h4>Recommends数据：</h4>
          <ul>
            {
              recommends.map((item, index) => {
                return <li key={index}>{item.title}</li>
              })
            }
          </ul>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  counter: state.counter.counter,
  banners: state.home.banners,
  recommends: state.home.recommends
})

const mapDispatchToProps = (dispatch) => ({
  subCounter(num) {
    dispatch(subCounter(num))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(About)