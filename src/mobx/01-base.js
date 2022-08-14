
import { observer } from "mobx-react-lite"
import counterStore from "../store"

const Main = () => {
  return (
    <div>
      <p>Main Page</p>
      <p>store count: {counterStore.count}</p>
      <p>store doubleCount: {counterStore.doubleCount}</p>

      <button onClick={counterStore.addCount}>+</button>
    </div>
  )
}

export default observer(Main)