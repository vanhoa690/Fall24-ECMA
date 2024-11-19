import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  // js
  const myName = "hoadv";
  function sayHello() {
    alert(myName);
  }
  return (
    <div>
      <h2>My name is {myName} </h2>
      <button onClick={sayHello}>say hello</button>
    </div>
  );
}

export default App;
