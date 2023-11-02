import React, { useState } from 'react'
import Card from '../Card/Card'
import './Registro.css'


const Registro = () => {

    const [nombre, setNombre] = useState("");
    const [club, setClub] = useState("");
    const [pais, setPais] = useState("");
    const [show, setShow] = useState(false);
    const [error, setError] = useState(false);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if (nombre.trimStart().length > 3 && club.length > 6 && pais != null) {
            setShow(true);
        }   else {setError(true)}
    }

return (
<>
        <form onSubmit={handleSubmit}>
        <label>Cómo te llamás?</label>
        <input type="text" name='nombre' value={nombre} onChange={(e) => setNombre(e.target.value)} />
        
        <label>De qué club sos hincha?</label>
        <input type="text" name='club' value={club} onChange={(e) => setClub(e.target.value)} />
        
        <label>País de nacimiento: </label>
        <input type="text" name='pais' value={pais} onChange={(e) => setPais(e.target.value)} />
        <button>Enviar</button>
        </form>
        {
            show ? <Card nombre={nombre} club={club} pais={pais}/> : null
        }
        {
            error ? <h5> Por favor, chequeá que la información sea correcta</h5> : null
        }     
</>
)
}

export default Registro