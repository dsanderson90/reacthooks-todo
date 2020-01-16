import React, { useState } from 'react';
const HookCounterThree = () => {
  const [name, setName] = useState({ firstName: '', lastName: '' });

  const setFirst = e => {
    const { value } = e.target;
    setName({ ...name, firstName: value });
  };

  const setLast = e => {
    const { value } = e.target;
    setName({ ...name, lastName: value });
  };

  const { firstName, lastName } = name;

  return (
    <div>
      <h2>{firstName}</h2>
      <h2>{lastName}</h2>
      <h2>{JSON.stringify(name)}</h2>
      <input value={firstName} type='text' onChange={setFirst} />
      <input value={lastName} type='text' onChange={setLast} />
    </div>
  );
};

export default HookCounterThree;
