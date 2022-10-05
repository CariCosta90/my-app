import React from "react";
import './Header.css'
import logo from '../../assets/logo.jpg'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export const Header = (props)=>{
    return (
        <header>
            <img src={logo} alt="logo de tienda" />
            <h1>Nombre de la Tienda</h1>
            {/* esto despues se puede hacer en componente */}
            <nav>
                <a href="google.com">Categoría 1 </a>
                <a href="google.com">Categoría 2 </a>
                <a href="google.com">Categoría 3 </a>
                <a href="google.com">Categoría 4 </a>
            </nav>
            <p>Bienvenido {props.nombreUsuario}</p>
            <ShoppingCartIcon color="primary" fontSize="large" className="cart"/>
        </header>
    );
};

export default Header;