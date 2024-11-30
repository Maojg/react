import React, { useState } from 'react'

const Uno = () => {
    const [first, setfirst] = useState(0);

  return (
    <div>
        <p>Contador es:{first}</p>
        <button on onClick={()=>setfirst(first+ 1)}>Incrementar</button>
    </div>
  )
}

export default Uno