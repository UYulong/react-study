import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Article from './article'
import Dashboard from './dashboard'
import Layout from './layout'
import Login from './login'
import Notfond from './notfond'

function Main() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Article />}></Route>
            <Route path='/dashboard' element={<Dashboard />}></Route>
          </Route>
          <Route path='/login' element={<Login />}></Route>

          <Route path='*' element={<Notfond />}></Route>
        </Routes>
      </div>
    </BrowserRouter>

  )
}

export default Main