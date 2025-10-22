import useCounter from "../hooks/useCounter";
import { useEffect } from "react";

const CounterComponent = () => {
  const { count, increment, decrement, reset } = useCounter(5);

  useEffect(() => {
    console.log("count", count);
  }, [count]);

  return (
    <>
      <p>valor:{count}</p>
      <button onClick={increment}>aumentar</button>
      <button onClick={decrement}>disminuir</button>
      <button onClick={reset}>limpiar</button>
    </>
  );
};

export default CounterComponent;
