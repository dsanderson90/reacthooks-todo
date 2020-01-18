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

function CounterThree() {
  const [count, dispatch] = useReducer(reducer, initState);
  const [count2, dispatch2] = useReducer(reducer, initState)
  return (
    <div>
      <div>Counter1- {count}</div>
      <button onClick={() => dispatch('increment')}>Increment</button>
      <button onClick={() => dispatch('decrement')}>Decrement</button>
      <button onClick={() => dispatch('reset')}>Reset</button>
      <button onClick={() => dispatch('random')}>Random</button>
      <div>Counter2- {count2}</div>
      <button onClick={() => dispatch2('increment')}>Increment</button>
      <button onClick={() => dispatch2('decrement')}>Decrement</button>
      <button onClick={() => dispatch2('reset')}>Reset</button>
      <button onClick={() => dispatch2('random')}>Random</button>
    </div>
  );
}

export default CounterThree;
