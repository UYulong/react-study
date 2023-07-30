import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { queryChangeBannersAction } from '../../../store/home';

export class Category extends PureComponent {

  componentDidMount() {
    this.props.changeBanners()
  }

  render() {
    const { banners } = this.props
    return (
      <div>
        <div>Category Page:</div>
        <h4>异步请求的banners:</h4>
        <ul>
          {
            banners.map((item, index) => {
              return (
                <li key={index}>{item.name}</li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  banners: state.home.banners,
  recommends: state.home.recommends
})

const mapDispatchToProps = (dispatch) => ({
  changeBanners(banners) {
    dispatch(queryChangeBannersAction())
  }
})
export default connect(mapStateToProps, mapDispatchToProps)(Category)