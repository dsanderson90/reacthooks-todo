import React, { useReducer } from 'react';

const initState = {
  firstCounter: 0,
  secondCounter: 10,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return {
        ...state,
        firstCounter: state.firstCounter + action.value,
      };
    case 'decrement':
      return {
        ...state,
        firstCounter: state.firstCounter - action.value,
      };
    case 'increment2':
      return {
        ...state,
        secondCounter: state.secondCounter + action.value,
      };
    case 'decrement2':
      return {
        ...state,
        secondCounter: state.secondCounter - action.value,
      };
    case 'reset':
      return initState;
    case 'random':
      return {
        firstCounter: Math.floor(Math.random() * 100) + 1,
        secondCounter: Math.floor(Math.random() * 100) + 1
      };
    default:
      return state;
  }
};
function CounterTwo() {
  const [count, dispatch] = useReducer(reducer, initState);

  return (
    <div>
      <div>Count1- {count.firstCounter}</div>
      <div>Count2- {count.secondCounter}</div>
      <button onClick={() => dispatch({ type: 'increment', value: 5 })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: 'decrement', value: 5 })}>
        Decrement
      </button>
      <button onClick={() => dispatch({ type: 'increment2', value: 2 })}>
        Increment Counter 2
      </button>
      <button onClick={() => dispatch({ type: 'decrement2', value: 2 })}>
        Decrement Counter 2
      </button>
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
      <button onClick={() => dispatch({ type: 'random' })}>Random</button>
    </div>
  );
}

export default CounterTwo;
