import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./base/App"; // 基础语法
// import App from "./base/01-state"; // 状态和生命周期
// import App from "./base/02-event"; // 事件处理
// import App from "./base/03-condition"; // 条件渲染
// import App from "./base/04-form"; // 表单
// import App from "./base/05-state-up"; // 状态提升
// import App from "./base/06-context"; // context 透传
// import App from "./base/07-props"; // props
// import App from "./base/example/index.js"; // todoMVC
import App from "./base/example/index";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
