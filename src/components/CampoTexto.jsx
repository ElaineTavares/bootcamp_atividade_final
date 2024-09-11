import React from 'react'
import './CampoTexto.css'

export default function CampoTexto({type, placeholder, name, id, ...props}) {
  return (
    <div className='campo_texto'>
      <input name={name} id={id} type={type} placeholder={placeholder} {...props} required/>
    </div>
  )
}

