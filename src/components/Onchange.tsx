import React, { useState } from 'react'

function Onchange() {


const [name,setName] = useState("");

  return (
    <div>
      <input placeholder="enter name" value={name} onChange={(e)=> setName(e.target.value)}/>
      
      <h1>


   {name === ""? "enter your name":`hello name is ${name}`}
      </h1>
    </div>
  )
}

export default Onchange
