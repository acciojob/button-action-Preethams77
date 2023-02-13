import React, { Component, useState } from "react";
import "./../styles/App.css";

function App() {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div id="main" className="bg-pink">
      {isClicked && (
        <p id="para">
          <h1> "Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy"
</h1>
        </p>
      )}
      <button id="click" onClick={handleClick}>
        Click me
      </button>
      // Do not alter the main div
    </div>
  );
}

export default App;
