import React from "react";
import './Header.css'
import logo from '../../assets/logo.jpg'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Header = ({nombreUsuario, appellidoUsuario, children})=>{

    const categorias = [
        {nombre : "Categoria 1", id: 0, ruta: ""},
        {nombre : "Categoria 2", id: 1, ruta: ""},
        {nombre : "Categoria 3", id: 2, ruta: ""},
        {nombre : "Categoria 4", id: 3, ruta: ""},
    ];

    return (
        <header>
            <img src={logo} alt="logo de tienda" />
            {children[1]}
            <p>Bienvenido {nombreUsuario}</p>
            <nav>
            {categorias.map((categoria)=>{
                return <a key= {categoria.id} href={categoria.ruta}>{categoria.nombre}</a>
            })
            }
            </nav>
            {children[0]}
            <ShoppingCartIcon color="primary" fontSize="large" className="cart"/>
        </header>
    );
};

export default Header;
//