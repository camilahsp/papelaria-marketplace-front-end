

import { useEffect, useState } from 'react';
import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';


type UsuarioType = {
  id: number;
  nome: string;
  email: string;
  enderecoEntrega: string;
};


type ProdutoType = {
  id: number;
  titulo: string;
  autor: string;
  numeroDePaginas: number;
  editora: string;
  imagem: string;
  descricao: string;
  genero: string;
  preco: string;
};


function App() {
  const [usuarios, setUsuarios] = useState<UsuarioType[]>([]);
  const [produtos, setProdutos] = useState<ProdutoType[]>([]);



  useEffect(() => {
    fetch('http://localhost:8000/usuarios')
      .then((resposta) => resposta.json())
      .then((dados) => setUsuarios(dados));


    fetch('http://localhost:8000/produtos')
      .then((resposta) => resposta.json())
      .then((dados) => setProdutos(dados));
  }, []);


  return (
    <div className="app-container">
      <header className="site-header">
        {/* Logo aqui */}
        <div className="logo-container">
          <img src= "logo.png" alt="Logo" className="logo" />
        </div>
        <nav className="navigation">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/usuarios">Usuários</Link></li>
          </ul>
        </nav>
        <div className="button-container">
          <Link to="/cadastro">
            <button className="cadastro-btn">Cadastrar Usuário</button>
          </Link>
          <Link to="/cadastro-produto">
            <button className="cadastro-produto-btn">Cadastrar Produto</button>
          </Link>
        </div>
      </header>


      <div className="content-container">
        <Routes>
          <Route path="/" element={<HomePage produtos={produtos} />} />
          <Route path="/usuarios" element={<UsuariosPage usuarios={usuarios} />} />
          <Route path="/cadastro" element={<CadastroPage />} />
          <Route path="/cadastro-produto" element={<CadastroProdutoPage />} />
        </Routes>
      </div>
    </div>
  );
}


function HomePage({ produtos }: { produtos: ProdutoType[] }) {
  return (
    <div className="home-container">
      <h1>Produtos</h1>
      <div className="produtos-list">
        {produtos.length > 0 ? (
          produtos.map((produto) => (
            <div key={produto.id} className="produto-item">
              <img src={produto.imagem} alt={produto.titulo} className="produto-imagem" />
              <h2>{produto.titulo}</h2>
              <p><strong>Autor:</strong> {produto.autor}</p>
              <p>
                <strong>Preço:</strong> R${Number(produto.preco).toFixed(2)}
              </p>
              <p><strong>Gênero:</strong> {produto.genero}</p>
            </div>
          ))
        ) : (
          <p>Não há produtos cadastrados.</p>
        )}
      </div>
    </div>
  );
}


function CadastroPage() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [endereco, setEndereco] = useState('');
  const navigate = useNavigate();


  const handleCadastro = async (e: React.FormEvent) => {
    e.preventDefault();


    const usuario = { nome, email, enderecoEntrega: endereco };


    const response = await fetch('http://localhost:8000/usuarios', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(usuario),
    });


    if (response.ok) {
      alert('Usuário cadastrado com sucesso!');
      navigate('/usuarios');
    } else {
      alert('Erro ao cadastrar usuário');
    }
  };


  return (
    <div className="cadastro-container">
      <h1>Cadastro de Usuário</h1>
      <form onSubmit={handleCadastro}>
        <div>
          <label htmlFor="nome">Nome:</label>
          <input
            type="text"
            id="nome"
            name="nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="endereco">Endereço:</label>
          <input
            type="text"
            id="endereco"
            name="endereco"
            value={endereco}
            onChange={(e) => setEndereco(e.target.value)}
            required
          />
        </div>
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}


function CadastroProdutoPage() {
  const [titulo, setTitulo] = useState('');
  const [autor, setAutor] = useState('');
  const [imagem, setImagem] = useState('');
  const [genero, setGenero] = useState('');
  const [preco, setPreco] = useState(0);
  const navigate = useNavigate();


  const handleCadastroProduto = async (e: React.FormEvent) => {
    e.preventDefault();


    const produto = { titulo, autor, imagem, genero, preco };


    const response = await fetch('http://localhost:8000/produtos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(produto),
    });


    if (response.ok) {
      alert('Produto cadastrado com sucesso!');
      navigate('/');
    } else {
      alert('Erro ao cadastrar produto');
    }
  };


  return (
    <div className="cadastro-produto-container">
      <h1>Cadastro de Produto (Livro)</h1>
      <form onSubmit={handleCadastroProduto}>
        <div>
          <label htmlFor="titulo">Título:</label>
          <input
            type="text"
            id="titulo"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="autor">Autor:</label>
          <input
            type="text"
            id="autor"
            value={autor}
            onChange={(e) => setAutor(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="imagem">Imagem do Livro (URL):</label>
          <input
            type="text"
            id="imagem"
            value={imagem}
            onChange={(e) => setImagem(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="genero">Gênero:</label>
          <input
            type="text"
            id="genero"
            value={genero}
            onChange={(e) => setGenero(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="preco">Preço:</label>
          <input
            type="text"
            id="preco"
            value={preco}
            onChange={(e) => setPreco(Number(e.target.value))}
            required
          />
        </div>
        <button type="submit">Cadastrar Produto</button>
      </form>
    </div>
  );
}


function UsuariosPage({ usuarios }: { usuarios: UsuarioType[] }) {
  return (
    <div className="usuarios-container">
      <h1>Usuários Cadastrados</h1>
      <div className="usuarios-list">
        {usuarios.length > 0 ? (
          usuarios.map((usuario) => (
            <div key={usuario.id} className="usuario-item">
              <h2>{usuario.nome}</h2>
              <p>Email: {usuario.email}</p>
              <p>Endereço de entrega: {usuario.enderecoEntrega}</p>
            </div>
          ))
        ) : (
          <p>Não há usuários cadastrados.</p>
        )}
      </div>
    </div>
  );
}


export default App;





