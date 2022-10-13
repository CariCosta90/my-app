import React, {useEffect, useState} from 'react'

const productos = [
    {nombre:"manzana", id:0, categoria:"fruta", stock:10, precio: 150},
    {nombre:"banana", id:1, categoria:"fruta", stock:10, precio: 150},
    {nombre:"limon", id:2, categoria:"fruta", stock:10, precio: 150},
    {nombre:"zanahoria", id:3, categoria:"verdura", stock:10, precio: 150},

];

// promesa

const promesa = new Promise((resolve, reject) => {
    // resultado de la promesa
    resolve("respuesta positiva de la promesa")
    reject("respuesta de error de la promesa")
})

const promesaDeProductos = new Promise ((resolve, reject)=>{
        // para generar una demora ficticia se usa setTimeout
    setTimeout(() => {
        resolve(productos);
    }, 2000);    
    // reject("falla obtencion de productos");
})

const ItemListContainer = ({greeting}) => {

    useEffect(()=>{
        console.log(promesa);
        promesa
        .then((data)=>{
            console.log("salio todo bien");
            console.log(data);
        })
        .catch((e)=>{
            console.log("ahora salio todo mal");
            console.log(e);
        })
        .finally(()=>{
            console.log("termino la ejecucion de la promesa");
        })
    }, [])

    const [productos, setProductos] = useState([]);

    useEffect(()=>{
        promesaDeProductos
        .then((data)=>{
            console.log(data);
            setProductos(data);
        })
        .catch((e)=>{
            console.log(e);
        })
    }, [])

    return (
        <>
            <h1>{greeting}</h1>
            {
                productos.map((producto)=>{
                    return <h2 key={producto.id}>{producto.nombre}</h2>
                })
            }
        </>
    )
}

export default ItemListContainer;