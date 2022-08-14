import { BrowserRouter, Link, Route, Routes, useNavigate, useParams, useSearchParams } from 'react-router-dom'
// home 
const Home = () => {

  const navigate = useNavigate() // 执行 useNavigate() 得到一个导航方法

  return (
    <div>
      <p>Home Page</p>
      <button onClick={() => navigate('/about?id=007&name=zs')}>跳转到-About</button>
      <button onClick={() => navigate('/setting/500')}>跳转到-Setting</button>
    </div>
  )
}

// about
const About = () => {
  const navigate = useNavigate() // 执行 useNavigate() 得到一个导航方法
  const [params] = useSearchParams()

  return (
    <div>
      <p>About Page</p>
      <p>{params.get('id')} - {params.get('name')}</p>
      <button onClick={() => navigate('/')}>跳转到-Home</button>
    </div>
  )
}


// setting
const Setting = () => {
  const params = useParams()

  return (
    <div>
      <p>Setting Page</p>
      <p>{params.id}</p>
    </div>
  )
}


function Main() {

  return (
    <div>
      <BrowserRouter>
        <p>Main 组件</p>
        <Link to='/'>Home</Link> |
        <Link to='/about'>About</Link> |

        <hr />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/setting/:id' element={<Setting />}></Route>
        </Routes>

      </BrowserRouter>
    </div>

  )
}

export default Main