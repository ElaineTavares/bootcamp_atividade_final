import React, { useEffect, useState } from 'react'
import './ListaDeFilmes.css'
import Card from './Card'
import CampoTexto from './CampoTexto'
import Botao from './Botao'
import { json } from 'react-router-dom'

export default function ListaDeFilmes() {

//array dos filmes
const [filmes, setFilmes] = useState([])


const getMovies = () => {
  //GET - buscar as informações dos filmes da API (eu enviando a carta)
  fetch("http://localhost:3000/filmes")

  //resposta do backend informando que a minha requisição foi recebida com sucesso (carta fechada)
  .then((response) => response.json())

  //conteudo do backend recebido (carta aberta)
  .then((data) => setFilmes(data))
}

//executar o GetMovies apenas uma vez ao montar o componente (mounting)
useEffect(() => {
  getMovies()

}, [])



//Estado do objeto dos inputs
const [filmesForm, setFilmesForm] =  useState({
  nome: "",
  poster: "",
  anoLancamento: ""
})

//mensado de sucesso após cadastrar o filme
const [msgSucesso, setMsgSucesso] = useState("")


//pegar os valores digitados no input
const handleFieldsChange = (e) => {
  setFilmesForm({
    ...filmesForm,
    [e.target.name]: e.target.value
  }) 
  // console.log(filmesForm)
}


//Adicionar na lista de filmes o filme digitados nos inputs
const handleCadastrarFilme = async (e) =>{
  e.preventDefault()
  // setFilmes([...filmes, filmesForm])
  
  const response = await fetch("http://localhost:3000/filmes", {
    method: "POST",
    headers: new Headers({
      "Content-type": "application/json"
    }),
    body: JSON.stringify(filmesForm)
  })

  const data = await response

  getMovies()

  setMsgSucesso("Filme cadastrado com sucesso!")
  setFilmesForm({
    nome: "",
    poster: "",
    anoLancamento: ""
  })
  setTimeout(() =>{
    setMsgSucesso("")
  },5000)
 
}


  
  return (
    <section className="lista_de_filmes">
        <h2>Lista de filmes</h2>
        {filmes.map((filme) => (<Card key={filme.id} {...filme}/>))} 
        <section className="formulario">
          <form onSubmit={handleCadastrarFilme}>
            <h2>Cadastre o filme aqui!</h2>
            <h3>{msgSucesso}</h3>
            <CampoTexto 
              type="text" 
              id="nome" 
              name="nome" 
              placeholder="Informe o nome do filme"
              onChange={handleFieldsChange}
              value={filmesForm.nome}
            />
            <CampoTexto 
              type="text" 
              id="nome" 
              name="poster" 
              placeholder="Informe o endereço da imagem"
              onChange={handleFieldsChange}
              value={filmesForm.poster}
            />
            <CampoTexto 
              type="text" 
              id="nome" 
              name="anoLancamento" 
              placeholder="Informe o ano de lançamento"
              onChange={handleFieldsChange}
              value={filmesForm.anoLancamento}
            />
            <Botao>Enviar</Botao>
          </form>
        </section> 
    </section>
  )
}
