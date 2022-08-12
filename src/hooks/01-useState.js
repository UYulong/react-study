// react hook
import React, { useState } from "react";

function Count() {
  const [count, setCount] = useState(0);

  const handleCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>{count}</p>
      <button onClick={handleCount}>click</button>
    </div>
  );
}

export default Count;
