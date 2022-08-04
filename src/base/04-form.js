import React from "react";

class NameForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = { name: "xiaoming" };
  }

  handleFormChange = (e) => {
    console.log(this.state.name);
    this.setState({
      name: e.target.value,
    });
  };

  render() {
    return (
      <div>
        <input value={this.state.name} onChange={this.handleFormChange}></input>
      </div>
    );
  }
}

export default NameForm;
