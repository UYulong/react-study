// mobx 模块化

import { observer } from "mobx-react-lite"
import useStore from "../store"

const Main = () => {
  const { counterStore, listStore } = useStore()
  return (
    <div>
      <p>counter:::</p>
      <p>store count: {counterStore.count}</p>
      <p>store doubleCount: {counterStore.doubleCount}</p>

      <button onClick={counterStore.addCount}>+</button>


      <hr />
      <p>list:::</p>
      <p>list : {listStore.list.join('*')}</p>
      <p>list length: {listStore.listLength}</p>

      <button onClick={listStore.addList}>+</button>
    </div>
  )
}

export default observer(Main)