import React from "react";

function SonA() {
  return <div>this is SonA</div>;
}

class Parent extends React.Component {
  render() {
    return (
      <div>
        <SonA />
      </div>
    );
  }
}

export default Parent;
