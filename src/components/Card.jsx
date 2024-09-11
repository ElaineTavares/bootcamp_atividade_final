import React from 'react'
import './Card.css'

export default function Card({id, nome, poster, anoLancamento}) {
  return (
    <div className='card' id={id}>
        <img src={poster} alt="" />
        <div className="rodape">
            <h3>{nome}</h3>
            <h3>Ano: {anoLancamento}</h3>
        </div>
    </div>
  )
}
