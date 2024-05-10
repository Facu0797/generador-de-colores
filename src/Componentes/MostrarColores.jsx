import React from 'react';
import Color from './Color';

const MostrarColores = ({listaColores}) => {
    return ( 
        <div className="colors-box">
            {listaColores.map((color,index) => (
                <Color key={index} hexColor={color.hex} />
            ))}
        </div>    
    );
}
 
export default MostrarColores;