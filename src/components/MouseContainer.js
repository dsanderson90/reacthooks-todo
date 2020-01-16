import React, { useState, useEffect } from 'react';
import HookMouse from './HookMouse';

export default function MouseContainer() {
  const [display, setDisplay] = useState(true);

  const toggleDisplay = () => setDisplay(!display);
  return (
    <div>
      <button onClick={toggleDisplay}>Toggle Display</button>
      <h1>{display && <HookMouse/>}</h1>
    </div>
  );
}
