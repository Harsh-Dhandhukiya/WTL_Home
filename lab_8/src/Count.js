import React, { useState } from "react";
import "./App.css"; // Importing CSS file

const Count = () => {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1); // Default step size = 1

  return (
    <div className="counter-container">
      <h1 className="count-display">
        Count: <span>{count}</span>
      </h1>

      {/* Step Size Input */}
      <div>
        <label>Step Size: </label>
        <input
          type="number"
          className="step-input"
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />
      </div>

      {/* Buttons */}
      <div className="button-container">
        <button onClick={() => setCount(count + step)}>Increment</button>
        <button onClick={() => setCount(count - step)}>Decrement</button>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>
    </div>
  );
};

export default Count;
