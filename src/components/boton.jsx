import React from 'react';
import './boton.css'




const Boton = (props) => {
    

    return (
        <div>
            <button className="btn-listar" onClick={props.recarga}> {props.texto ? "Ocultar" : "Listar"} </button>
        </div>
    );
}



export default Boton;
