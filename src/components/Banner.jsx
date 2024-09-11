import React from 'react'
import './Banner.css'

export default function Banner() {
  return (
    <section className="banner">
        <img src="/banner.jpeg" alt="" />
        <div className='container_texto'> 
            <h1>Só filme top!</h1>
            <h2>Pra você se divertir!</h2>
            <h2>Pra você se emocionar!</h2>
        </div>
    </section>
  )
}
