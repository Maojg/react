import React,{useState} from 'react'

const Tres = () => {
    const[isvisible, setisvisible] = useState(true);
  return (
    <>
    {isvisible && (
        <div>Lo estamos logrando muchachos</div>
    )
    }
    
    <button onClick={()=>{
        setisvisible(!isvisible)
        }}>{isvisible ? "ocultar":"mostrar"}</button>
    </>
  )
}

export default Tres