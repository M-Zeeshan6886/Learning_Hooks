import React, {useState} from "react";
import './App.css';

function App() {
  const [count, setCount] = useState(0)

  function Increament() {
    setCount(count + 1)
  }
  function Decreament() {
    setCount(count - 1)
  }

  return (
    <>
    <button onClick={Decreament}>-</button>
    <h1>{count}</h1>
    <button onClick={Increament}>+</button>
    </>

  );
}

export default App;
