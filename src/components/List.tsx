import React from 'react';

function List() {
  const items = ['applee32', 'banana2', 'mang2o121'];

  return (
    <div>
      {/* <p>{items[0]}</p>
      <p>{items[1]}</p>
      <p>{items[2]}</p> */}
      {items.map((item)=>(
        <p>{item}</p>
      ))}
    </div>
  );
}

export default List;
