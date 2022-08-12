import { useEffect, useState } from "react";

function Time() {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date())
    }, 1000);

    return function() {clearInterval(id)}
  }, [time])

  return (
    <div>{time.toLocaleTimeString()}</div>
  )
}

function Test() {
  const [count, setCount] = useState(0);

  const handleAdd = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    document.title = `clicked ${count}`;
  });


  // ---------
  const [flag, setFlag] = useState(false)
  const handleShow = () => {
    setFlag(!flag)
  }

  return (
    <div>
      <p>{count}</p>
      <button onClick={handleAdd}>click</button>

      <button onClick={handleShow}>showComp</button>
      <hr />
      {flag ? <Time /> : null}
    </div>
  );
}

export default Test;
