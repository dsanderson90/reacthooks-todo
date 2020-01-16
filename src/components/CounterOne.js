import React, { useReducer } from 'react';

const initState = 0;

const reducer = (currentState, action) => {
  switch (action) {
    case 'increment':
      return currentState + 1;
    case 'decrement':
      return currentState - 1;
    case 'reset':
      return initState;
    case 'random':
      return Math.floor(Math.random() * 100) + 1;
    default:
      return currentState;
  }
};
function CounterOne() {
  const [count, dispatch] = useReducer(reducer, initState);

  return (
    <div>
      <div>Count- {count}</div>
      <button onClick={() => dispatch('increment')}>Increment</button>
      <button onClick={() => dispatch('decrement')}>Decrement</button>
      <button onClick={() => dispatch('reset')}>Reset</button>
      <button onClick={() => dispatch('random')}>Random</button>
    </div>
  );
}

export default CounterOne;
