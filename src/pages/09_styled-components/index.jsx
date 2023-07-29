import React, { PureComponent } from 'react'
import { AppWrapper } from './style'

export class index extends PureComponent {
  constructor() {
    super()

    this.state = {
      books: [
        { name: '三国演义', id: 0 },
        { name: '红楼梦', id: 1 },
        { name: '水浒传', id: 2 },
      ],

      size: 22
    }
  }

  increament() {
    this.setState({
      size: this.state.size + 2
    })
  }

  render() {
    const { books, size } = this.state
    return (
      <AppWrapper size={size}>
        <h2 className='title'>我是一个标题</h2>
        <ul className='book-list'>
          {
            books.map(item => {
              return (
                <li key={item.id} className='item'>{item.name}</li>
              )
            })
          }
        </ul>

        <h2>动态样式</h2>
        <button onClick={e => this.increament()}>大</button>
        <p className='text'>我要变大</p>
      </AppWrapper>
    )
  }
}

export default index