import React, { PureComponent } from 'react'
import { createPortal } from 'react-dom'

export class index extends PureComponent {
  render() {
    return (
      <div>
        <h2>正常挂载</h2>
        {
          createPortal(<h2>外部挂载</h2>, document.querySelector('#app'))
        }
      </div>
    )
  }
}

export default index