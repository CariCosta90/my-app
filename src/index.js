// importa las librerias de react
import React from 'react';
// importa la libreria de ReactDOM, esta separado por el peso
import ReactDOM from 'react-dom/client';
// importacion de los estilos 
import './index.css';
// importa el archivo app donde se estan haciendo modificaciones al html App.js
import App from './App';

// createDOM metodo de la libreria que toma el elemento root y genera el render
/*que hace el render? --> busca el id y dibuja lo que le estamos diciendo que en este caso es lo que está en App.js*/
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // StrictMode --> hace que el lenguaje sea un poco menos permisivo, como para que se cumplan con las buenas practicas (ej. declarar variable si o si poniendo let o var). No es obligatorio dejarlo pero se sugiere
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// este archivo por lo general no se edita, se deja como esta sin ser por la parte de abajo que ya borramos "reportWebVitals" --> recordar borrar codigo, archivo js e import