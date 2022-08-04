// context 的使用
import React, { createContext } from "react";

const { Provider, Consumer } = createContext();

function SonA() {
  return (
    <div>
      <p>this is SonA</p>
      <GrandSonC />
    </div>
  );
}

function SonB() {
  return <div>this is SonB</div>;
}

function GrandSonC() {
  return (
    <div>
      <p>this is GrandSonC.</p>
      <ul>
        <Consumer>
          {(value) => value.map((item) => <span key={item}>{item}</span>)}
        </Consumer>
      </ul>
    </div>
  );
}

class Parent extends React.Component {
  render() {
    const list = [1, 2, 3, 4, 5];
    return (
      <Provider value={list}>
        <div>
          <SonA />
          <SonB />
        </div>
      </Provider>
    );
  }
}

export default Parent;
