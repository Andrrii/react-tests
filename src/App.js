import React from "react";
import { useState } from "react";
import "./App.css";

function App() {
  const [buttonColor, setButtonColor] = useState("red");
  const newButtonColor = buttonColor === "red" ? "blue" : "red";
  const [disabled, setDisabled] = useState(false);

  return (
    <>
      <h1>Testing library 123</h1>
      <div>
        <button
          style={{
            backgroundColor: buttonColor,
          }}
          onClick={() => setButtonColor(newButtonColor)}
          disabled={disabled}
        >
          Change to {newButtonColor}
        </button>
        <br />
        <input
          type="checkbox"
          id="enable-button-checkbox"
          defaultChecked={disabled}
          aria-checked={disabled}
          onChange={(e) => setDisabled(e.target.checked)}
        />
      </div>
    </>
  );
}

export default App;
