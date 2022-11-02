import React, {createContext, useState} from 'react'

export const Context = createContext();

export const CustomContext = ({children}) => {

    const [cart, setCart] = useState([]);
    const [qty, setqty] = useState(0``);
    const [total, settotal] = useState(0)

    const addItem = (item, cantidad)=>{
        console.log('esta funcion agerga productos');
    }

    const deleteItem = (id) =>{
        console.log('esta funcion se encarga de eliminar productos');
    }

    const actualizarTotales =()=>{
        console.log('funcion que se encarfa de actualizar a qty y total');
    }

    const IsInCart = ()=>{
        console.log('fincion qeu se encarga de averiguar si el producto ya esta en el carrito');
    }

    const clear = ()=>{
        setCart([]);
        setqty(0);
        settotal(0);
    }

    return (
        <Context.Provider value={{cart, qty, total, addItem, deleteItem, actualizarTotales, IsInCart, clear}} >
            {children}
        </Context.Provider>
    )
}
