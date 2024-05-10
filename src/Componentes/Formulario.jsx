import React, { useState } from 'react';
import Values from 'values.js';

const Formulario = ({setListaColores}) => {

    const [color, setColor] = useState("");
    const [error, setError] = useState(false);

    const handleForm = (e) => {
        e.preventDefault();

        try {
            const colores = new Values(color).all(5);
            setListaColores(colores);
        } catch (error) {
            setError(true)
        }
    }

    return (
        <div className='form-color'>
            <h1>Generar paleta de colores</h1>
            <form onSubmit={handleForm}>
                <input type="text" placeholder='red' onChange={(e) => setColor(e.target.value)}/>
                <input type="submit" value="Generar" />
            </form>

            {error ? <p className='error'>Este color no existe</p> : null}
        </div>   
    );
}

export default Formulario;