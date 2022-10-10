// esto es un componente 
import React from "react";
import "./App.css"
//para importar componentes hay que ponerles nombre en el import y despues se lo llama con el nombre
import Header from "./Componentes/Header/Header"
import ItemCount from "./Componentes/compAfter/ItemCount";
import { ComponenteTitulo } from "./Componentes/CompTitulo/ComponenteTitulo";
import { ComponenteBoton } from "./Componentes/CompBoton/ComponenteBoton";
import { ComponenteEstados } from "./Componentes/ComponenteEstados/ComponenteEstados";
import {ComponenteUsuarios} from "./Componentes/Usuarios/ComponenteUsuarios";

const App = ()=>{

  const nombre = "Alejandro"; 
  // aca se usa class name porque class es una palabra reservada
  return (
    <>
    {/* asi se le pasan las props al componente */}
    <Header nombreUsuario={nombre}  apellidoUsuario="Fernandez">
      <ComponenteBoton/>
      <ComponenteTitulo/>
    </Header>    
    <ItemCount stock={10} initial={1}/>
    <ComponenteEstados/>
    <ComponenteUsuarios/>
    
    
  </>
  );
  }


export default App; 

