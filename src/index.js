import React from "react";
import ReactDOM from "react-dom/client";
// 基础用法
// import App from "./base/App"; // 基础语法
// import App from "./base/01-state"; // 状态和生命周期
// import App from "./base/02-event"; // 事件处理
// import App from "./base/03-condition"; // 条件渲染
// import App from "./base/04-form"; // 表单
// import App from "./base/05-state-up"; // 状态提升
// import App from "./base/06-context"; // context 透传
// import App from "./base/07-props"; // props
// import App from "./base/example/index";  // todoMVC

// hooks
// import App from "./hooks/01-useState"; // useState
// import App from "./hooks/02-useEffect"; //useEffect

// react-router 
// import App from './react-router/01-base'; // 路由基础使用
// import App from './react-router/nest/index'; // 嵌套路由

// mobx
// import App from './mobx/01-base'; // mobx 基础使用
import App from './mobx/02-module'; // mobx 模块化

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
