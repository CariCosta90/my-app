import React from 'react'

export const UserList = ({lista, funcionDelete}) => {

    return (
        <div>
            <ul>
                {lista.map((nombre,i)=>{
                    return (
                        <li key={i}>
                            <h2>{nombre}</h2>
                            <button onClick={()=>funcionDelete(nombre)}>Eliminar Usuario</button>
                        </li>
                    );
                })}
            </ul>
        </div>
    )
}

export default UserList;
