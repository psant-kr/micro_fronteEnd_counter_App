import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import Button from "./Button";
import useStore from "remoteApp/store";

function App() {
  const [count, setCount] = useStore();
  // console.log("remote copy component mounted")

  return (
    <div className="App">
      <h1>Remote copy Application </h1>
      <Button />
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </div>
  );
}

export default App;
