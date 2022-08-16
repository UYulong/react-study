const { makeAutoObservable } = require("mobx");

// 登录
class LoginStore {
  namesList = ['admin']

  constructor() {
    makeAutoObservable(this)
  }

  // 校验登录是否通过
  checkLoginIsPass = (name) => {
    return this.namesList.includes(name)
  }
}

const loginStore = new LoginStore()
export default loginStore