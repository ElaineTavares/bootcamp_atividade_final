
import './Header.css'
import React from 'react';


export default function Header() {
 

  return (
    <header className='header'>
        <div className='container_logo'>
            <img className='logo' src="/logo.jpeg" alt="logo" />
            <ul>
                <li>Home</li>
                <li>Lista de filmes</li>
                <li>Cadastrar filmes</li>
            </ul>
        </div>
 
        <div className='container_bandeira'>
            <img className='bandeira' src="/bandeira_do_brasil.jpeg" alt="Bandeira do Brasil" />
            <img className='bandeira' src="/bandeira_do_eua.jpeg" alt="Bandeira dos EUA" />
        </div>
    </header>
  )
}
