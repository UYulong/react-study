import { makeAutoObservable } from "mobx"

class ListStore {
  list = [1, 2, 3, 4, 5]

  constructor() {
    makeAutoObservable(this)
  }

  addList = () => {
    this.list.push('6', '7', '8')
  }

  get listLength() {
    return this.list.length
  }
}

export default ListStore