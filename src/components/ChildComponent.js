import React, { useState } from 'react';

const ChildComponent = props => {
  const { greet } = props;
  return (
    <div>
      <button onClick={() => greet('child')}>Greet Parent</button>
    </div>
  );
};

export default ChildComponent;
