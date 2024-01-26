import React, { useEffect } from "react";

function Counter({ step, idCounter, cond, neighbor }) {
  const [count, setCount] = React.useState(0);
  const handleClick = () => {
    setCount((prevState) => prevState + step);
  };
  useEffect(() => {
    if (count >= cond) neighbor();
  }, [count]);
  return (
    <div>
      <p ref={idCounter}>Valor: {count}</p>
      <button onClick={handleClick}>Plus</button>
    </div>
  );
}

export default Counter;
