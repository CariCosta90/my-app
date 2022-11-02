import React, {useState} from 'react'
import UserList from './UserList';
/* import { UserList } from './UserList'; */

/* export const Users = () => {

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
} */



const Users = () => {

    const [nombre, setNombre] = useState("");

    const [list, setList] = useState([]);

    const handlerChange = (e) =>{
        setNombre(e.target.value)
        console.log(nombre);
    }

    const handlerAgregar = (e)=>{
        setList([...list, nombre]);
        console.log(list);
    }

    const funcionDelete = (nombre) =>{
        console.log(nombre);
        setList(list.filter((user)=>user !== nombre));
    }



    return(
        <div>
            <h1>componente Users</h1>
            <input type="text" onChange={handlerChange} value={nombre}/>
            <button onClick={handlerAgregar}>Agregar elemento</button>
            <UserList lista={list} funcionDelete={funcionDelete}/>
        </div>
    )
}

export default Users;
