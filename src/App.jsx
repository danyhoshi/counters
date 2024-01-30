import "./App.css";
import Counter from "./components/Counter";

function App() {
  return (
    <main className="container">
      <Counter step={1} idCounter={1} cond={5} />
      <Counter step={2} idCounter={2} cond={10} />
      <Counter step={5} idCounter={4} cond={20} />
      <Counter step={5} idCounter={3} cond={15} />
    </main>
  );
}

export default App;
