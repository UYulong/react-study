import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App"; // 基础语法
// import App from "./01-state"; // 状态和生命周期
// import App from "./02-event"; // 事件处理
// import App from "./03-condition"; // 条件渲染
// import App from "./04-form"; // 表单
// import App from "./05-state-up"; // 状态提升
// import App from "./06-context"; // context 透传
import App from "./07-props"; // props

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
