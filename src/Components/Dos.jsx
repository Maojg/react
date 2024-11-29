import React,{useState} from 'react'

const Dos = () => {
    const [Text, setText] = useState("apagado");
    const encaragadodecambiareltexto = () => {
        if(Text === "apagado"){
            setText("encendido");
        } else {
            setText("apagado");
        }

    }
    return (
    <div>
        <div>{Text}</div>
    <button onClick={encaragadodecambiareltexto}>cambiar</button>
    </div>
  )

}
export default Dos