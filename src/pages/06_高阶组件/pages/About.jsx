import React, { PureComponent } from 'react'
import withLogin from '../hoc/login_auth'

export class About extends PureComponent {
  render() {
    return (
      <div>About</div>
    )
  }
}

export default withLogin(About)