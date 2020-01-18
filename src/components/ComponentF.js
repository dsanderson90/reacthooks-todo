import React, { useContext } from 'react';
import { CountContext } from '../App';
function ComponentF() {
  const counterContext = useContext(CountContext);
  const {countState, countDispatch} = counterContext;
  return (
    <div>
      CompF - {countState}
      <button onClick={() => countDispatch('decrement')}>
        Decrement
      </button>
      <button onClick={() => countDispatch('reset')}>
        Reset
      </button>
      <button onClick={() => countDispatch('random')}>Random</button>
    </div>
  );
}

export default ComponentF;
