import React, { useState, useEffect } from 'react';
const UseEffect = () => {

const [count, setCount] = useState(0);
const [name, setName] = useState('')
// Use effect runs after the first render and after every update.
// the effect will only run if count is altered (2nd arg)
useEffect( () => {
console.log('updating')

  document.title = `you have clicked ${count} times`
}, [count])

const handleChange = (e) => {
  const { value } = e.target
  setName(value)
}

// This works too...
// document.title = `you have clicked ${count} times`

const increment = () => setCount(prev => prev + 1)

  return <div>
    {name}
    <input type='button' value={count} onClick={increment}/>
    <input type='text' value={name} onChange={handleChange}/>
  </div>;
};

export default UseEffect;
