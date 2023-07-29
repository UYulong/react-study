import React, { PureComponent } from 'react'
import { CSSTransition, SwitchTransition, TransitionGroup } from 'react-transition-group'
import './index.css'

export class index extends PureComponent {
  constructor() {
    super()

    this.state = {
      isShow: true,
      isLogin: true,
      books: [
        { name: '水浒传', price: '$100', id: 0 },
        { name: '三国演义', price: '$234', id: 1 },
        { name: '西游记', price: '$67', id: 2 },
      ]
    }
  }

  addBook() {
    const book = { name: '红楼梦', price: '$134', id: new Date().getTime() }
    const books = [...this.state.books]
    books.push(book)
    this.setState({
      books
    })
  }

  delBook(index) {
    const books = [...this.state.books]
    books.splice(index, 1)
    this.setState({
      books
    })
  }

  render() {
    const { isShow, isLogin, books } = this.state
    return (
      <div>
        <div>
          <p><b>CSSTransition 的使用：</b></p>
          <button onClick={e => this.setState({ isShow: !isShow })}>切换</button>
          <CSSTransition appear in={isShow} classNames='my' timeout={2000} unmountOnExit={true}>
            <h2>哈哈哈哈😄</h2>
          </CSSTransition>
        </div>
        <hr />

        <div>
          <p><b>SwitchTransition 的使用：</b></p>
          <SwitchTransition mode='out-in'>
            <CSSTransition classNames='switch' timeout={500} key={isLogin ? 'exit' : 'login'}>
              <button onClick={e => this.setState({ isLogin: !isLogin })}>
                {isLogin ? '退出' : '登录'}
              </button>
            </CSSTransition>
          </SwitchTransition>
        </div>

        <hr />
        <div>
          <p><b>TransitionGroup 的使用：</b></p>
          <button onClick={e => this.addBook()}>新增书籍</button>
          <TransitionGroup component='ul'>
            {
              books.map((item, index) => {
                return (
                  <CSSTransition key={item.id} classNames='group' timeout={1000}>
                    <li>
                      <div className='book'>
                        <p>{item.name}-{item.price}</p>
                        <button onClick={e => this.delBook(index)}>删除</button>
                      </div>
                    </li>
                  </CSSTransition>
                )
              })
            }
          </TransitionGroup>

        </div>

      </div>
    )
  }
}

export default index