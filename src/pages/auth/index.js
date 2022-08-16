// 判断是否存在token,如果存在，返回layout，否则，重定向到登录页 
import { Navigate } from "react-router-dom";

const AuthRoute = ({ children }) => {
  const isToken = localStorage.getItem('react-study')

  if (isToken) {
    return <>{children}</>
  } else {
    return <Navigate to="/login" replace />
  }

}

export default AuthRoute