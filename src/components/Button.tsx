import { useState } from "react";

export function Button() {
  const [counter, setCounter] = useState(1);

  function increment() {
    setCounter(counter + 5);
  };

  return (
    <button onClick={ increment }>
      { counter }
    </button>
  );
};