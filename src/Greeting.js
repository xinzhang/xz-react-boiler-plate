import React, { useState } from 'react'; 

export default function Greeting(props) {
  const [name, setName] = useState('Mary');

  function handleNameChange(e) {
    if (e.key === 'Enter') {
      setName(e.target.value);
      e.target.value = '';
    }
  }

  return(
    <div>
      <div label="Name">
        <input onKeyPress={handleNameChange} />
        <h3>{name}</h3>
      </div>
    </div>
  )

}

