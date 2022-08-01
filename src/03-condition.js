import React from "react";

function UserLogin(props) {
  return <button onClick={props.onClick}>login</button>;
}

function UserLogout(props) {
  return <button onClick={props.onClick}>logout</button>;
}

class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLoged: true };

    // 绑定this
    this.handleChangeState = this.handleChangeState.bind(this);
  }

  // 点击登录按钮
  handleLoginBtn() {
    console.log("login");
  }

  // 点击登出按钮
  handleLogoutBtn() {
    console.log("logout");
  }

  // 修改登录状态
  handleChangeState() {
    this.setState({
      isLoged: !this.state.isLoged,
    });
  }

  render() {
    return (
      <div>
        <p>
          {this.state.isLoged ? (
            <UserLogout onClick={this.handleLogoutBtn} />
          ) : (
            <UserLogin onClick={this.handleLoginBtn} />
          )}
        </p>

        <p>
          <span>
            修改登录状态：
            <button onClick={this.handleChangeState}>change</button>
          </span>
        </p>
      </div>
    );
  }
}

export default LoginControl;
