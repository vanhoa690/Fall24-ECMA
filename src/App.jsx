import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const myName = "hoadv";
  function sayHello() {
    alert(myName);
  }
  return (
    <>
      <h1>hello {myName}</h1>
      <button onClick={sayHello}>SayHello</button>
    </>
  );
}

export default App;
