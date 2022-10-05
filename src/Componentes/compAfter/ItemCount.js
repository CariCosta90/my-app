import React, {useState} from "react";



const ItemCount = ({stock, initial})=>{

    const [count, setCount] = useState(initial);

    const subtract = ()=> {
        if (count>0){
            setCount(count-1);
        }
        
    }
    const add = ()=> {
        if(count<stock){
            setCount(count+1);
        }        
    }
    const addToCart = ()=> {        
        console.log(`El usuario a agregado ${count} al carrito`);
    }

    return (
        <div>
            <button onClick={subtract}>-</button>
            <h2>{count}</h2>
            <button onClick={add}>+</button>
            <button disabled={stock===0} onClick={addToCart}>
                <span>{stock===0 ? 'No tenemos Stock' : 'Agregar al carrito'}</span>
            </button>
        </div>
    );
};

export default ItemCount;
