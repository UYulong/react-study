import React, { PureComponent } from 'react'

export class index extends PureComponent {
  constructor() {
    super()

    this.state = {
      username: '',
      password: '',
      agree: true,
      hobbies: [
        { id: 0, label: '唱', value: 'sing', isCheck: false },
        { id: 1, label: '跳', value: 'jump', isCheck: false },
        { id: 2, label: 'rap', value: 'rap', isCheck: false }
      ],
      fruit: ['orange']
    }
  }

  submit(e) {
    e.preventDefault()
    console.log(this.state.username, this.state.password, this.state.agree);
    const hobbies = this.state.hobbies.filter(item => item.isCheck).map(item => item.value)
    console.log(hobbies);
  }

  handleInputChange(e) {
    const { name, value } = e.target
    this.setState({
      [name]: value
    })
  }

  handleCheckChange(e) {
    this.setState({
      agree: e.target.checked
    })
  }

  handleMutiCheckChange(e, id) {
    const hobbies = [...this.state.hobbies]
    hobbies[id].isCheck = e.target.checked

    this.setState({
      hobbies
    })
  }

  handleSelectChnage(e) {
    const fruit = Array.from(e.target.selectedOptions, item => item.value)
    this.setState({
      fruit
    })
  }

  render() {
    const { username, password, agree, hobbies, fruit } = this.state
    return (
      <div>
        <form onSubmit={e => this.submit(e)}>
          <div>
            <label htmlFor="username">
              账号：
              <input type="text" id='username' name='username' value={username} onChange={e => this.handleInputChange(e)} />
            </label>

            <label htmlFor="password">
              密码：
              <input type="text" id='password' name='password' value={password} onChange={e => this.handleInputChange(e)} />
            </label>
          </div>

          <div>
            <label htmlFor="agree">
              <input type='checkbox' id='agree' checked={agree} onChange={e => this.handleCheckChange(e)} />
              同意《xxx》协议
            </label>
          </div>

          <div>
            {
              hobbies.map(item => {
                return (
                  <label htmlFor={item.value} key={item.id}>
                    <input
                      type='checkbox'
                      id={item.value}
                      name={item.value}
                      checked={item.isChecks}
                      onChange={e => this.handleMutiCheckChange(e, item.id)}
                    />
                    {item.label}
                  </label>
                )
              })
            }

          </div>

          <div>
            <select multiple value={fruit} onChange={e => this.handleSelectChnage(e)}>
              <option value='apple'>苹果</option>
              <option value='banana'>香蕉</option>
              <option value='orange'>橘子</option>
            </select>
          </div>

          <div>
            <button>提 交</button>
          </div>
        </form>
      </div>
    )
  }
}

export default index