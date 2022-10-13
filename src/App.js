// esto es un componente 
import React, {useState}from "react";
import "./App.css"
//para importar componentes hay que ponerles nombre en el import y despues se lo llama con el nombre
import Header from "./Componentes/Header/Header"
import ItemCount from "./Componentes/compAfter/ItemCount";
import { ComponenteTitulo } from "./Componentes/CompTitulo/ComponenteTitulo";
import { ComponenteBoton } from "./Componentes/CompBoton/ComponenteBoton";
import { ComponenteEstados } from "./Componentes/ComponenteEstados/ComponenteEstados";
import ComponenteUsuarios from "./Componentes/Usuarios/ComponenteUsuarios";
import ItemListContainer from "./Componentes/Containers/ItemListContainer";
import ComponenteEventos from "./Componentes/ComponenteEventos/ComponenteEventos";
import  Users  from "./Componentes/Usuarios/Users";




const App = ()=>{

  const nombre = "Alejandro"; 
  const mensaje = "las mejores ofertas";
  // aca se usa class name porque class es una palabra reservada
const [show, setShow] = useState();

const alternar = ()=>{
  setShow(!show);
}
  return (
    <>
    {/* asi se le pasan las props al componente */}
    <Header nombreUsuario={nombre}  apellidoUsuario="Fernandez">
      <ComponenteBoton/>
      <ComponenteTitulo/>
    </Header>    
    <ItemCount stock={10} initial={1}/>
    {show ? <ComponenteEstados/> : <h1>Aca no hay nada</h1>}
    <button onClick={alternar}>Alternar</button>
    <ComponenteUsuarios/>
    <ItemListContainer greeting={mensaje}/>
    <ComponenteEventos/>
    <Users/>
    
    
  </>
  );
  }


export default App; 

