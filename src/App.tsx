/* 

import { useEffect, useState } from 'react'
import './App.css'
// Tipo para produtos
type LivroType = {
  id: number,
  titulo: string,
  autor: string,
  descricao: string,
  genero: string,
  dataLancamento: string,
  editora: string,
  numeroPaginas: string,
  estoque: string,
  preco: string,
  imagemLivro: string
}

// Tipo para usuários
type UsuarioType = {
  id: number,
  nome: string,
  email: string,
  fotoPerfil: string,
  enderecoEntrega: string,
  dataCriacaoConta: string
}

function App() {
  const [livros, setLivros] = useState<LivroType[]>([])
  const [usuarios, setUsuarios] = useState<UsuarioType[]>([])

  // useEffect para carregar produtos e usuários
  useEffect(() => {
    // Buscar os produtos
    fetch("http://localhost:8000/livros")
      .then(resposta => resposta.json())
      .then(dados => setLivros(dados))

    // Buscar os usuários
    fetch("https://one022a-marketplace-e90o.onrender.com/usuarios")
      .then(resposta => resposta.json())
      .then(dados => setUsuarios(dados))
  }, [])

  return (
    <>


      <header className="site-header">


        <nav className="navigation">
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#produtos">Produtos</a></li>
            <li><a href="#sobre">Sobre</a></li>
            <li><a href="#contato">Contato</a></li>
          </ul>
        </nav>

        <div className="header-actions">
          <button className="login-button">Login</button>
        </div>
      </header>
      {// Listagem de Produtos }
      <div className="livros-container">
        <h1 className='titulo-livro'>Produtos</h1>
        <div className="livros-list">
          {
            livros.map(livro => (
              <div key={livro.id} className="livro-item">
                <h3 className="livro-nome">{livro.titulo}</h3> {// Use h3 para o nome do produto }
                <div className='container-imagem'>
                  <img src={livro.imagemLivro} alt="Imagem do produto" />
                </div>
                <p className="livro-preco">{livro.preco}</p>
                <p className="livro-descricao">{livro.descricao}</p>
                <button className="botao-comprar">Comprar</button>
              </div>
            ))
          }
        </div>
      </div>

      {// Listagem de Usuários }
      <div className="usuarios-container">
        <h1 className='titulo-usuario'>Usuários</h1>
        <div className="usuarios-list"> {// Adicionando wrapper }
          {
            usuarios.map(usuario => (
              <div key={usuario.id} className="usuario-item">
                <h1 className="usuario-nome">{usuario.nome}</h1>
                <p>Email: {usuario.email}</p>
                <p>Criado em: {new Date(usuario.dataCriacaoConta).toLocaleDateString()}</p>
              </div>
            ))
          }
        </div> {//Fechando a div aqui }
      </div>
    </>
  )
}

export default App

*/

// pedi p chat arrumar e ele deu isso

import { useEffect, useState } from 'react'
import './App.css'

// Tipo para livros
type LivroType = {
  id: number,
  titulo: string,
  autor: string,
  descricao: string,
  genero: string,
  dataLancamento: string,
  editora: string,
  numeroPaginas: string,
  estoque: string,
  preco: string,
  imagemLivro: string
}

// Tipo para usuários
type UsuarioType = {
  id: number,
  nome: string,
  email: string,
  fotoPerfil: string,
  enderecoEntrega: string,
  dataCriacaoConta: string
}

function App() {
  const [livros, setLivros] = useState<LivroType[]>([])
  const [usuarios, setUsuarios] = useState<UsuarioType[]>([])

  // useEffect para carregar livros e usuários
  useEffect(() => {
    // Buscar os livros
    fetch("http://localhost:8000/livros")
      .then(resposta => resposta.json())
      .then(dados => setLivros(dados))

    // Buscar os usuários
    fetch("https://one022a-marketplace-e90o.onrender.com/usuarios")
      .then(resposta => resposta.json())
      .then(dados => setUsuarios(dados))
  }, [])

  return (
    <>
      <header className="site-header">
        <nav className="navigation">
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#livros">Livros</a></li>
            <li><a href="#sobre">Sobre</a></li>
            <li><a href="#contato">Contato</a></li>
          </ul>
        </nav>

        <div className="header-actions">
          <button className="login-button">Login</button>
        </div>
      </header>

      {/* Listagem de Livros */}
      <div className="livros-container">
        <h1 className="titulo-livro">Livros</h1>
        <div className="livros-list">
          {
            livros.map(livro => (
              <div key={livro.id} className="livro-item">
                <h3 className="livro-titulo">{livro.titulo}</h3>
                <div className="container-imagem">
                  <img src={livro.imagemLivro} alt={`Capa do livro ${livro.titulo}`} />
                </div>
                <p className="livro-preco">{livro.preco}</p>
                <p className="livro-descricao">{livro.descricao}</p>
                <button className="botao-comprar">Comprar</button>
              </div>
            ))
          }
        </div>
      </div>

      {/* Listagem de Usuários */}
      <div className="usuarios-container">
        <h1 className="titulo-usuario">Usuários</h1>
        <div className="usuarios-list">
          {
            usuarios.map(usuario => (
              <div key={usuario.id} className="usuario-item">
                <h2 className="usuario-nome">{usuario.nome}</h2>
                <p>Email: {usuario.email}</p>
                <p>Criado em: {new Date(usuario.dataCriacaoConta).toLocaleDateString()}</p>
                <p>Endereço de entrega: {usuario.enderecoEntrega}</p>
                <div className="usuario-foto">
                  {usuario.fotoPerfil && <img src={usuario.fotoPerfil} alt={`${usuario.nome} - Foto de perfil`} />}
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </>
  )
}

export default App
