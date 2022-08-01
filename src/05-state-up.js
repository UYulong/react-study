import React from "react";

function BoilingVerdict(props) {
  if (props.celsius >= 100) {
    return <div>up up up</div>;
  }

  return <div>down down down</div>;
}

class Calculator extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      temperature: 0,
    };
  }

  handleTemperature = (e) => {
    console.log(e.target.value);
    this.setState({
      temperature: e.target.value,
    });
  };

  render() {
    const temperature = this.state.temperature;
    return (
      <div>
        <input value={temperature} onChange={this.handleTemperature}></input>

        <BoilingVerdict celsius={temperature} />
      </div>
    );
  }
}

export default Calculator;
