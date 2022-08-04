import React from "react";

// 转换函数
function toCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return "";
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

function BoilingVerdict(props) {
  if (props.celsius >= 100) {
    return <div>up up up</div>;
  }

  return <div>down down down</div>;
}

const scaleNames = {
  c: "Celsius",
  f: "Fahrenheit",
};

// temperature comp
class TemperatureInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = { temperature: "" };
  }

  handleTemperature = (e) => {
    this.props.onTemperatureChange(e.target.value);
  };

  render() {
    const temperature = this.props.temperature;
    const scale = this.props.scale;
    return (
      <div>
        <legend> please input your temperature: {scaleNames[scale]}</legend>
        <input value={temperature} onChange={this.handleTemperature}></input>
      </div>
    );
  }
}

class Calculator extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      temperature: 0,
      scale: "c",
    };
  }

  handleCelsiusChagne = (v) => {
    this.setState({
      temperature: v,
      scale: "c",
    });
  };

  handleFahrenheitChange = (v) => {
    this.setState({
      temperature: v,
      scale: "f",
    });
  };

  render() {
    const scale = this.state.scale;
    const temperature = this.state.temperature;

    const celsius =
      scale === "f" ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit =
      scale === "c" ? tryConvert(temperature, toFahrenheit) : temperature;

    return (
      <div>
        <TemperatureInput
          temperature={celsius}
          onTemperatureChange={this.handleCelsiusChagne}
          scale="c"
        />
        <TemperatureInput
          temperature={fahrenheit}
          onTemperatureChange={this.handleFahrenheitChange}
          scale="f"
        />

        <BoilingVerdict celsius={temperature} />
      </div>
    );
  }
}

export default Calculator;
