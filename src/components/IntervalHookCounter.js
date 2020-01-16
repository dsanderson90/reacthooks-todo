import React, { useState, useEffect } from 'react';

function IntervalHookCounter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('useEffect Called.');
    const interval = setInterval(tick, 1000);

    // Clean up function
    return () => {
      clearInterval(interval);
    };
  }, []);

  const tick = () => {
    setCount(prev => prev + 1);
  };
  return <div> {count}</div>;
}

export default IntervalHookCounter;
