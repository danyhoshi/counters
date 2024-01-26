import { useRef } from "react";
import "./App.css";
import Counter from "./components/Counter";

function App() {
  const ref0 = useRef(0);
  const ref1 = useRef(1);
  const ref2 = useRef(2);
  const ref3 = useRef(3);
  const neighbor = (ref) => {
    ref.current.nextSibling.style.backgroundColor = "#0c55c4";
  };

  return (
    <main className="container">
      <Counter
        step={1}
        idCounter={ref0}
        cond={5}
        neighbor={() => neighbor(ref1)}
      />
      <Counter
        step={2}
        idCounter={ref1}
        cond={10}
        neighbor={() => neighbor(ref2)}
      />
      <Counter
        step={5}
        idCounter={ref3}
        cond={20}
        neighbor={() => neighbor(ref0)}
      />
      <Counter
        step={5}
        idCounter={ref2}
        cond={15}
        neighbor={() => neighbor(ref3)}
      />
    </main>
  );
}

export default App;
