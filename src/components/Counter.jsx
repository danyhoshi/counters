import React, { useEffect, useContext } from "react";
import { OnContext } from "../context/OnContext";

function Counter({ step, idCounter, cond }) {
  const { on1, on2, on3, on4, changeOn1, changeOn2, changeOn3, changeOn4 } =
    useContext(OnContext);
  let on;
  let setNeighbor;
  let neighbor;
  switch (idCounter) {
    case 1:
      on = on1;
      setNeighbor = changeOn2;
      neighbor = on2;
      break;
    case 2:
      on = on2;
      setNeighbor = changeOn3;
      neighbor = on3;
      break;
    case 3:
      on = on3;
      setNeighbor = changeOn4;
      neighbor = on4;
      break;
    case 4:
      on = on4;
      setNeighbor = changeOn1;
      neighbor = on1;
      break;
  }

  const [count, setCount] = React.useState(0);

  const handleClick = () => {
    setCount((prevState) => prevState + step);
  };

  useEffect(() => {
    if (count >= cond && !neighbor) setNeighbor();
  }, [count]);

  return (
    <div id={idCounter}>
      <p>Valor: {count}</p>
      <button onClick={handleClick}>Plus</button>
      {on && <p style={{ color: "#0c55c4" }}>Done</p>}
    </div>
  );
}

export default Counter;
