// 类型检查
import PropTypes from "prop-types";
import React from "react";

function SonA({ firstname, lastname, age, fullname, hobbies }) {
  return (
    <div>
      <p>this is SonA</p>
      <p>firstname: {firstname}</p>
      <p>lastname: {lastname}</p>
      <p>fullname: {fullname()}</p>
      <p>age: {age}</p>

      <ul>
        {hobbies.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

SonA.propTypes = {
  lastname: PropTypes.string.isRequired,
  firstname: PropTypes.string,
  fullname: PropTypes.func,
  age: PropTypes.number,
  hobbies: PropTypes.array.isRequired,
};

class Parent extends React.Component {
  state = {
    lastname: "si",
    firstname: "li",
    fullname: (f, l) => {
      return f + "-" + l;
    },
    age: 22,
    hobbies: [" smoking", " drinking"],
  };

  render() {
    const { firstname, lastname, fullname, age, hobbies } = this.state;
    return (
      <div>
        <SonA
          firstname={firstname}
          lastname={lastname}
          fullname={() => fullname(firstname, lastname)}
          age={age}
          hobbies={hobbies}
        />
      </div>
    );
  }
}

export default Parent;
