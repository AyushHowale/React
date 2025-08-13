import { useState } from "react";
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
      <h1>The count is : Counter{count}</h1>

      <button style={{color:"red"}} onClick={add}>increase</button>
      <br />
      <button style={{color:"green"}} onClick={sub}>decrease</button>
    </>
  );
}

export default App;
