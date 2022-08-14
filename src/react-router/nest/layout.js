import { Outlet } from "react-router-dom"

const Layout = () => {
  return (
    <div>
      <p>Layout Page</p>
      <Outlet />
    </div>
  )
}

export default Layout