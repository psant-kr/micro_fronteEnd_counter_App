import { useState } from "react";

import "./Button.css";
import useStore from "remoteApp/store";


export const Button = () => {
  const [state, setState] = useStore();
  console.log("This is button a copy")
  return (
    <div>
      <button className="shared-btn-copy" onClick={() => setState((s) => s + 1)}>
      Button copy from remote copy: {state}
      </button>
      {/* <button className="shared-btn-copy">
        Button copy from remote copy
      </button> */}
    </div>
  );
};

export default Button;
