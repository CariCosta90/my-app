import React from 'react'

const ComponenteEventos = () => {

    const callback = ()=>{
        console.log("click");
    }

    return (
        <>
        <h1>Componente Eventos</h1>
        <button onClick={callback}>Click</button>
        </>   
    )
}

export default ComponenteEventos;