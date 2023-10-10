import { useEffect, useState } from "react";
import "./App.css";
import { Home } from "./modules/home";
import {AppProvider} from './components/useContext/Context';
function App() {
  // // const [count, setCount] = useState(0);
  // const [wscreen, setWScreen] = useState(window.screen.width);

  // const currentState = () => {
  //   setWScreen(() => window.innerWidth);
  // };
  // useEffect(() => {
  //   window.addEventListener("resize", currentState);
  //   return () => {
  //     window.removeEventListener("resize", currentState);
  //   };
  // });

  return (
    <>
      {/* <h1>Hlwww react im zeeshan</h1>
      <h1>State for screen reSize {wscreen} </h1> */}
      {/* <button onClick={() => setCount(count + 1)}>+</button>
      <h1>{count}</h1>
      <button onClick={() => setCount(count - 1)}>-</button> */}
      <AppProvider>
        <Home />
      </AppProvider>
      {/* <AppProvider /> */}
    </>
  );
}

export default App;
