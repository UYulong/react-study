import React, { PureComponent } from 'react'
import classNames from 'classnames'

export class index extends PureComponent {
  constructor() {
    super()

    this.state = {
      isA: true,
      isB: true,
      isC: false
    }
  }
  render() {
    const { isB, isC } = this.state
    return (
      <div>
        <h2 className={classNames('aaa bbb ccc')}>我是大标题</h2>
        <h2 className={classNames('aaa', { 'bbb': isB, 'ccc': isC })}>我是大标题</h2>

      </div>
    )
  }
}

export default index