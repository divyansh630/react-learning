import { useCounter } from "./CustomHook";

export const Counter = () => {
  const { count, increase, decrease } = useCounter();

  return (
    <>
      <h1>Count: {count}</h1>

      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
    </>
  );
};
