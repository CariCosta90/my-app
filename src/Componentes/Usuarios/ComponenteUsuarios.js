import React, {useState}from 'react'

export const ComponenteUsuarios = () => {
    const [usuarios, setUsuarios]= useState([
        {nombre:"Nicolas"}, 
        {nombre:"Pedro"},
    ]);

    const mariano = {nombre:"mariano"};
    const agregarMariano = ()=>{
        setUsuarios([...usuarios, mariano]);
    }    
    return (
    <div>ComponenteUsuarios
        <h1>Usuarios</h1>
        <button onClick={agregarMariano}>Agregar a Mariano</button>
        {
            usuarios.map((usuario, i)=>{
                return <p key={i}>{usuario.nombre}</p>
            })
        }

    </div>
    )
}
