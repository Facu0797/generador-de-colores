import React, { useState } from 'react';
import Copy from "../../public/clipTransparent.png";

const Color = ({hexColor}) => {

    const [mensajeCopy, setMensajeCopy] = useState(false);

    const copiar = (color) => {
        const colorCopiado = `#${color}`
        navigator.clipboard.writeText(colorCopiado);
        setMensajeCopy(true)

        setTimeout(() => {
            setMensajeCopy(false)
        }, 1500);
    }

    return ( 
        <div className="single-card" style={{backgroundColor: `#${hexColor}`}}>
            <div className="content">
                <p>#{hexColor}</p>
                <button onClick={() => copiar(hexColor)}>
                    <img src={Copy} alt="" />
                </button>
            </div>
            {mensajeCopy ? <p className='copy-alert'>Copiado</p> : null}
        </div>    
    );
}
 
export default Color;