import React, { useState } from 'react';

function Contador() {
    const [cuenta, setCuenta] = useState(0);

    return (
        <div>
            <p>Has hecho clic {cuenta} veces</p>
            <button onClick={() => setCuenta(cuenta +1)}>
                +
            </button>
            <button onClick={() => setCuenta(
                cuenta > 0 ? cuenta - 1 : cuenta
            )}>
                -
            </button>
        </div>
    )
}

export default Contador;