import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./app.css";

// 导入路由
import Layout from '@/layout'; // 布局
import Article from '@/pages/article/index'; // 文章编辑
import AuthRoute from "@/pages/auth"; // 鉴权组件
import Dashboard from '@/pages/dashboard/index'; // 面板页
import Login from '@/pages/login/index'; // 登录页
import Manage from "@/pages/manage"; // 文章管理页

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <AuthRoute>
            <Layout />
          </AuthRoute>
        }>
          <Route index element={<Dashboard />}></Route>
          <Route path='/article' element={<Article />}></Route>
          <Route path='/manage' element={<Manage />}></Route>
        </Route>
        <Route path='/login' element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
