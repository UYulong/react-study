import React from "react"
import CouterStore from "./counter.Store"
import ListStore from "./list.Store"

class RootStore {
  constructor() {
    this.counterStore = new CouterStore()
    this.listStore = new ListStore()
  }
}

const rootStore = new RootStore()

const context = React.createContext(rootStore)
const useStore = () => React.useContext(context)

export default useStore