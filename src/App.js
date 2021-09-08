import React from "react";
import { useState } from "react";
import "./App.css";

function App() {
  const [buttonColor, setButtonColor] = useState("red");
  const newButtonColor = buttonColor === "red" ? "blue" : "red";

  return (
    <>
      <h1>Testing library 123</h1>
      <div>
        <button
          style={{
            backgroundColor: buttonColor,
          }}
          onClick={() => setButtonColor(newButtonColor)}
        >
          Change to {newButtonColor}
        </button>
      </div>
    </>
  );
}

export default App;
