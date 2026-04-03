import React from 'react';

function List() {
  const items = ['applee32', 'banana2', 'mang2o121'];

  return (
    <div>
   
      {items.map((item)=>(
        <p>{item}</p>
      ))}
    </div>
  );
}

export default List;
