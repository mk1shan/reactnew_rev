import React, { useState } from 'react';

function Text() {
  const [items, setItems] = useState<string[]>([]);
  const [text, setText] = useState('');

  return (
    <div>
      <input value={text} onChange={(e) => setText(e.target.value)} />

      <button
        onClick={() => {
          setItems([...items, text]);
        }}
      >
        add2154
      </button>

      {items.map((item) => (
        <p>{item}</p>
      ))}
    </div>
  );
}

export default Text;
