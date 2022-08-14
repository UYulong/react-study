import { makeAutoObservable } from "mobx"

class CouterStore {
  count = 0

  constructor() {
    makeAutoObservable(this)
  }

  addCount = () => {
    this.count++
  }

  get doubleCount() {
    return this.count * 2
  }
}

export default CouterStore