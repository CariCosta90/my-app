import React, { useState } from 'react'
import { UserList } from './UserList';

export const Users = () => {

    const [nombre, setNombre] = useState('');
    const [lista, setLista] = useState([]);

    const handlerChange = (e) =>{
        setNombre (e.target.value);
    }

    const handlerClick = () =>{
        setLista([...lista, nombre]);
    }

    const funcionDelete = (nombre)=>{
        setLista(lista.filter((user)=>{
            return user !== nombre
        }))
    }
    return (
        <div>
            <input type="text" value={nombre} onChange={handlerChange} />
            <button onClick={handlerClick}>agregar</button>
            <UserList lista={lista} funcionDelete={funcionDelete}/>
        </div>
    )
}

export default Users;
