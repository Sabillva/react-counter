import React, { useState } from "react";
import "./App.css";

function Counter() {
  const [count, setCount] = useState(0);

  const changeBackgroundColor = () => {
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    document.body.style.backgroundColor = randomColor;
  };

  const increase = () => {
    if (count < 10) {
      setCount(count + 1);
      changeBackgroundColor();
    }
  };

  const decrease = () => {
    if (count > -10) {
      setCount(count - 1);
      changeBackgroundColor();
    }
  };

  return (
    <div>
      <h2>{count}</h2>
      <div>
        <button className="counter-button" onClick={decrease}>
          -
        </button>
        <button className="counter-button-2" onClick={increase}>
          +
        </button>
      </div>
    </div>
  );
}

export default Counter;
