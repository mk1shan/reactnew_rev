import React, { useState } from 'react';

function States() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        increase
      </button>



      <button
        onClick={() => {
          setCount(count -1);
        }}
      >
        deccrease
      </button>
    </div>










  );
}

export default States;
