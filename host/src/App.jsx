import { useState } from "react";
import "./App.css";

import Button from "remoteApp/Button";
import useStore from "remoteApp/store";
import ButtonCopy from "remoteCopyApp/Button";

function App() {
  const [count, setCount] = useStore();

  return (
    <div className="App">
      <h1>Host Application</h1>
      <Button />
      <ButtonCopy />
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Host app counter count is {count}
        </button>

      </div>
    </div>
  );
}

export default App;
