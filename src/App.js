import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./app.css";

// 导入路由
import Layout from '@/layout'; // 布局
import Article from '@/pages/article/index'; // 文章编辑
import Dashboard from '@/pages/dashboard/index'; // 面板页
import Login from '@/pages/login/index'; // 登录页
import Manage from "@/pages/manage"; // 文章管理页

function App() {
  return (
    <BrowserRouter>
      {/* <div className="app"> */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />}></Route>
          <Route path='/article' element={<Article />}></Route>
          <Route path='/manage' element={<Manage />}></Route>
        </Route>
        <Route path='/login' element={<Login />}></Route>
      </Routes>
      {/* </div> */}
    </BrowserRouter>
  );
}

export default App;
