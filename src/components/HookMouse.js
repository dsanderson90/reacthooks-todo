import React, { useState, useEffect } from 'react';

const HookMouse = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  // Using an empty array as the second param allows you to mimic componentDidMount
  useEffect(() => {
    console.log('useEffect Called.');
    window.addEventListener('mousemove', logMousePosition);

    // Clean up function
    return () => {
      window.removeEventListener('mousemove', logMousePosition)
    }
  }, []);

  const logMousePosition = e => {
    console.log('mouseEvent');
    setX(e.clientX);
    setY(e.clientY);
  };

  return (
    <div>
      {x}, {y}
    </div>
  );
};

export default HookMouse;
