import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  const double = () => {
    setCount(count * 2);
  };
  const reset = () => {
    setCount(0);
  };
  return (
    <div>
      <input type='button' value={count} onClick={increment} />
      <input type='button' value='-' onClick={decrement} />
      <input type='button' value='dbl' onClick={double} />
      <input type='button' value='reset' onClick={reset} />
    </div>
  );
};

export default Counter;
