import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count,setCount] = useState(0)

  const add = () => {
    if (count >= 20) {
    } else {
      setCount(count + 1);
    }
  };

  const sub = () => {
    if (count <= 0) {
    } else {
      setCount(count - 1);
    }
  };

  return (
    <>
      <h1>Counter {count}</h1>

      <button onClick={add}>increase</button>
      <br />
      <button onClick={sub}>decrease</button>
    </>
  );
}

export default App;
