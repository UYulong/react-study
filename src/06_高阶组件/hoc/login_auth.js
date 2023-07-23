import React, { PureComponent } from 'react'

function withLogin(OriginComponent) {
  return class extends PureComponent {
    constructor(props) {
      super(props)

      this.state = {
        isLogin: true
      }
    }

    render() {
      const { isLogin } = this.state
      return (
        isLogin ? <OriginComponent {...this.props} /> : '请先登录！'
      )
    }
  }
}

export default withLogin