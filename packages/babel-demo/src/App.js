import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
  selectCount,
} from "./reducer/counter";

export function App() {
  const count = useSelector(selectCount);
  return (
    <div>
      <div>
        <button onClick={increment}>+</button>
        <span>{count}</span>
        <button onClick={decrement}>-</button>
      </div>
      <div>
        <input />
        <button>add amount</button>
        <button>add async</button>
      </div>
    </div>
  );
}
