import { useState } from "react";

export const Counterinc = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };
  return (
    <>
      <button onClick={increment}>count : {counter}</button>
    </>
  );
};
