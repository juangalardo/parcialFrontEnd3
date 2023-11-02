import React from 'react'
import './Card.css'
import bocaPredio from '../../assets/boca.jpg';

const Card = ({nombre, club, pais}) => {
return (
<>
        <h2>Hola, {nombre}!!</h2>
        <h3>Así que sos hincha de {club}, eh??</h3>
        <h4>No esperaba menos de alguien proveniente de {pais}!</h4>
        <img src={bocaPredio} alt="I want you!" />
        </>
)
}

export default Card