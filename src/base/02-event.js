import React from "react";

class LoginButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isShow: true };
  }

  handleClick() {
    this.setState((state) => ({
      isShow: !state.isShow,
    }));
  }

  render() {
    return (
      <div>
        <button onClick={() => this.handleClick()}>
          {this.state.isShow ? "显示" : "隐藏"}
        </button>
      </div>
    );
  }
}

export default LoginButton;
