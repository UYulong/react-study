import { makeAutoObservable } from "mobx"

class CouterStore {
  count = 0

  constructor() {
    makeAutoObservable(this)
    this.addCount = this.addCount.bind(this)
  }

  addCount() {
    this.count++
  }

  get doubleCount() {
    return this.count * 2
  }
}

const counterStore = new CouterStore()

export default counterStore