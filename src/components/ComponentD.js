import React, { useContext } from 'react';
import { CountContext } from '../App';

function ComponentD() {
  const countContext = useContext(CountContext);
  const { countState, countDispatch } = countContext;
  return (
    <div>
      CompD - {countState}
      <button onClick={() => countDispatch('decrement')}>
        Decrement
      </button>
      <button onClick={() => countDispatch('reset')}>Reset</button>
      <button onClick={() => countDispatch('random')}>
        Random
      </button>
    </div>
  );
}

export default ComponentD;
