import React, { useState } from 'react';

const HookCounterDos = () => {
  const initCount = 0;
  const [count, setCount ] = useState(initCount)
const increment = () => {
  setCount( prevState => prevState + 1)
}
const decrement = () => {
  setCount( prevState => prevState - 1)
}
const reset = () => {
  setCount(initCount)
}

  return (  <div><h1>{count}</h1>
  <input type="button" value="+" onClick={increment}/>
  <input type="button" value="-" onClick={decrement}/>
  <input type="button" value="reset" onClick={reset}/></div>);
}

export default HookCounterDos;