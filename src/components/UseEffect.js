import React, { useState, useEffect } from 'react';
const UseEffect = () => {

const [count, setCount] = useState(0);

// Use effect runs after the first render and after every update.
useEffect( () => {
  document.title = `you have clicked ${count} times`
})

// This works too...
// document.title = `you have clicked ${count} times`

const increment = () => setCount(prev => prev + 1)

  return <div>
    <input type='button' value={count} onClick={increment}/>
  </div>;
};

export default UseEffect;
