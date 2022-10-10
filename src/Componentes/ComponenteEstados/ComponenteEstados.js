import React, {useState} from 'react'

export const ComponenteEstados = () => {

    /* const [estado, setEstado] = useState();
    const [users, setUsers] = useState(); */
    const [contador, setContador] = useState(0);

    let numero=1;

    const handleSuma = ()=> {
        /* setContador(5); */
        /* numero++;
        console.log(numero); */
        setContador(contador+1);
    };

    const handleResta = ()=> {
        setContador(contador-1);
    };

    const handleReset =()=>{
        setContador(0);
    }

    return (
        <div>
            <h1>Componente para los estados</h1>
            <h1>{numero}</h1>
            <h1>{contador}</h1>
            <button onClick={handleSuma}>sumar</button>
            <button onClick={handleResta}>restar</button>
            <button onClick={handleReset}>Reset</button>

        </div>
    )
}
