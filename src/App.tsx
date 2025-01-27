
/*
import { useEffect, useState } from 'react';
import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import AlterarProduto from './componentes/alterarproduto/AlterarProduto';


type ProdutoType = {
  id: number;
  nome: string;
  preco: string;
  descricao: string;
  imagem: string;
};

type UsuarioType = {
  id: number;
  nome: string;
  email: string;
  created_at: string;
  updated_at: string;
};

function App() {
  const [produtos, setProdutos] = useState<ProdutoType[]>([]);
  const [usuarios, setUsuarios] = useState<UsuarioType[]>([]);

  useEffect(() => {
    fetch('http://localhost:8000/produtos')
      .then((resposta) => resposta.json())
      .then((dados) => setProdutos(dados));

    fetch('http://localhost:8000/usuarios')
      .then((resposta) => resposta.json())
      .then((dados) => setUsuarios(dados));
  }, []);

  const handleExcluir = (id: number) => {
    alert(`Excluir o produto com id ${id}`);
    fetch(`http://localhost:8000/produtos/${id}`, {
      method: 'DELETE',
    }).then((resposta) => {
      if (resposta.ok) {
        alert('Produto excluído com sucesso');
        window.location.reload();
      } else {
        alert('Erro ao excluir o produto: Confira o terminal do backend');
      }
    });
  };

  return (
    <div className="app-container">
      <header className="site-header">
        <nav className="navigation">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/cadastro-produto">Cadastro de Produto</Link></li>
            <li><Link to="/usuarios">Usuários</Link></li>
          </ul>
        </nav>
      </header>

      <div className="content-container">
        <Routes>
          <Route path="/" element={<HomePage produtos={produtos} handleExcluir={handleExcluir} />} />
          <Route path="/usuarios" element={<UsuariosPage usuarios={usuarios} />} />
          <Route path="/cadastro-produto" element={<CadastroProdutoPage />} />
          <Route path="/alterar-produto/:id" element={<AlterarProduto />} />
        </Routes>
      </div>
    </div>
  );
}

function HomePage({ produtos, handleExcluir }: { produtos: ProdutoType[], handleExcluir: (id: number) => void }) {
  return (
    <div className="produtos-container">
      <h1 className="titulo-produto">Produtos</h1>
      <div className="produtos-list">
        {produtos.map((produto) => (
          <div key={produto.id} className="produto-item">
            <h3 className="produto-nome">{produto.nome}</h3>
            <div className="container-imagem">
              <img src={produto.imagem} alt="Imagem do produto" />
            </div>
            <p className="produto-preco">{produto.preco}</p>
            <p className="produto-descricao">{produto.descricao}</p>
            <button className="botao-comprar">Comprar</button>
            <button onClick={() => handleExcluir(produto.id)}>Excluir</button>
            <Link to={`/alterar-produto/${produto.id}`}>Alterar</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

function UsuariosPage({ usuarios }: { usuarios: UsuarioType[] }) {
  return (
    <div className="usuarios-container">
      <h1 className="titulo-usuario">Usuários</h1>
      <div className="usuarios-list">
        {usuarios.map((usuario) => (
          <div key={usuario.id} className="usuario-item">
            <h2 className="usuario-nome">{usuario.nome}</h2>
            <p>Email: {usuario.email}</p>
            <p>Criado em: {new Date(usuario.created_at).toLocaleDateString()}</p>
            <p>Atualizado em: {new Date(usuario.updated_at).toLocaleDateString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function CadastroProdutoPage() {
  const [nome, setNome] = useState('');
  const [preco, setPreco] = useState('');
  const [descricao, setDescricao] = useState('');
  const [imagem, setImagem] = useState('');
  const navigate = useNavigate();

  const handleCadastroProduto = async (e: React.FormEvent) => {
    e.preventDefault();
    const produto = { nome, preco, descricao, imagem };

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
      <h1>Cadastro de Produto</h1>
      <form onSubmit={handleCadastroProduto}>
        <div>
          <label htmlFor="nome">Nome:</label>
          <input type="text" id="nome" value={nome} onChange={(e) => setNome(e.target.value)} required />
        </div>
        <div>
          <label htmlFor="preco">Preço:</label>
          <input type="text" id="preco" value={preco} onChange={(e) => setPreco(e.target.value)} required />
        </div>
        <div>
          <label htmlFor="descricao">Descrição:</label>
          <input type="text" id="descricao" value={descricao} onChange={(e) => setDescricao(e.target.value)} required />
        </div>
        <div>
          <label htmlFor="imagem">Imagem:</label>
          <input type="text" id="imagem" value={imagem} onChange={(e) => setImagem(e.target.value)} required />
        </div>
        <button type="submit">Cadastrar Produto</button>
      </form>
    </div>
  );
}

export default App;
*/

/*
import { useEffect, useState } from 'react';
import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import AlterarProduto from './componentes/alterarproduto/AlterarProduto';

type ProdutoType = {
  id: number;
  nome: string;
  preco: string;
  descricao: string;
  imagem: string;
};

type UsuarioType = {
  id: number;
  nome: string;
  email: string;
  created_at: string;
  updated_at: string;
};

function App() {
  const [produtos, setProdutos] = useState<ProdutoType[]>([]);
  const [usuarios, setUsuarios] = useState<UsuarioType[]>([]);

  useEffect(() => {
    const fetchProdutos = async () => {
      try {
        const response = await fetch('http://localhost:8000/produtos');
        if (!response.ok) {
          throw new Error('Erro ao buscar produtos');
        }
        const dados = await response.json();
        setProdutos(dados);
      } catch (error) {
        console.error('Erro ao buscar produtos:', error);
      }
    };

    const fetchUsuarios = async () => {
      try {
        const response = await fetch('http://localhost:8000/usuarios');
        if (!response.ok) {
          throw new Error('Erro ao buscar usuários');
        }
        const dados = await response.json();
        setUsuarios(dados);
      } catch (error) {
        console.error('Erro ao buscar usuários:', error);
      }
    };

    fetchProdutos();
    fetchUsuarios();
  }, []);

  const handleExcluir = async (id: number) => {
    alert(`Excluir o produto com id ${id}`);
    try {
      const response = await fetch(`http://localhost:8000/produtos/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Erro ao excluir o produto');
      }
      alert('Produto excluído com sucesso');
      window.location.reload();
    } catch (error) {
      console.error('Erro ao excluir o produto:', error);
      alert('Erro ao excluir o produto: Confira o terminal do backend');
    }
  };

  return (
    <div className="app-container">
      <header className="site-header">
        <nav className="navigation">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/cadastro-produto">Cadastro de Produto</Link></li>
            <li><Link to="/usuarios">Usuários</Link></li>
          </ul>
        </nav>
      </header>

      <div className="content-container">
        <Routes>
          <Route path="/" element={<HomePage produtos={produtos} handleExcluir={handleExcluir} />} />
          <Route path="/usuarios" element={<UsuariosPage usuarios={usuarios} />} />
          <Route path="/cadastro-produto" element={<CadastroProdutoPage />} />
          <Route path="/alterar-produto/:id" element={<AlterarProduto />} />
        </Routes>
      </div>
    </div>
  );
}

function HomePage({ produtos, handleExcluir }: { produtos: ProdutoType[], handleExcluir: (id: number) => void }) {
  return (
    <div className="produtos-container">
      <h1 className="titulo-produto">Produtos</h1>
      <div className="produtos-list">
        {produtos.map((produto) => (
          <div key={produto.id} className="produto-item">
            <h3 className="produto-nome">{produto.nome}</h3>
            <div className="container-imagem">
              <img src={produto.imagem} alt="Imagem do produto" />
            </div>
            <p className="produto-preco">{produto.preco}</p>
            <p className="produto-descricao">{produto.descricao}</p>
            <button className="botao-comprar">Comprar</button>
            <button onClick={() => handleExcluir(produto.id)}>Excluir</button>
            <Link to={`/alterar-produto/${produto.id}`}>Alterar</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

function UsuariosPage({ usuarios }: { usuarios: UsuarioType[] }) {
  return (
    <div className="usuarios-container">
      <h1 className="titulo-usuario">Usuários</h1>
      <div className="usuarios-list">
        {usuarios.map((usuario) => (
          <div key={usuario.id} className="usuario-item">
            <h2 className="usuario-nome">{usuario.nome}</h2>
            <p>Email: {usuario.email}</p>
            <p>Criado em: {new Date(usuario.created_at).toLocaleDateString()}</p>
            <p>Atualizado em: {new Date(usuario.updated_at).toLocaleDateString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function CadastroProdutoPage() {
  const [nome, setNome] = useState('');
  const [preco, setPreco] = useState('');
  const [descricao, setDescricao] = useState('');
  const [imagem, setImagem] = useState('');
  const navigate = useNavigate();

  const handleCadastroProduto = async (e: React.FormEvent) => {
    e.preventDefault();
    const produto = { nome, preco, descricao, imagem };

    try {
      const response = await fetch('http://localhost:8000/produtos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(produto),
      });

      if (!response.ok) {
        throw new Error('Erro ao cadastrar produto');
      }

      alert('Produto cadastrado com sucesso!');
      navigate('/');
    } catch (error) {
      console.error('Erro ao cadastrar produto:', error);
      alert('Erro ao cadastrar produto');
    }
  };

  return (
    <div className="cadastro-produto-container">
      <h1>Cadastro de Produto</h1>
      <form onSubmit={handleCadastroProduto}>
        <div>
          <label htmlFor="nome">Nome:</label>
          <input type="text" id="nome" value={nome} onChange={(e) => setNome(e.target.value)} required />
        </div>
        <div>
          <label htmlFor="preco">Preço:</label>
          <input type="text" id="preco" value={preco} onChange={(e) => setPreco(e.target.value)} required />
        </div>
        <div>
          <label htmlFor="descricao">Descrição:</label>
          <input type="text" id="descricao" value={descricao} onChange={(e) => setDescricao(e.target.value)} required />
        </div>
        <div>
          <label htmlFor="imagem">Imagem:</label>
          <input type="text" id="imagem" value={imagem} onChange={(e) => setImagem(e.target.value)} required />
        </div>
        <button type="submit">Cadastrar Produto</button>
      </form>
    </div>
  );
}

export default App;
*/

import { useEffect, useState } from 'react';
import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import AlterarProduto from './componentes/alterarproduto/AlterarProduto';

type ProdutoType = {
  id: number;
  nome: string;
  preco: string;
  descricao: string;
  imagem: string;
};

type UsuarioType = {
  id: number;
  nome: string;
  email: string;
  created_at: string;
  updated_at: string;
};

function App() {
  const [produtos, setProdutos] = useState<ProdutoType[]>([]);
  const [usuarios, setUsuarios] = useState<UsuarioType[]>([]);

  useEffect(() => {
    const fetchProdutos = async () => {
      try {
        const response = await fetch('http://localhost:8000/produtos');
        if (!response.ok) {
          throw new Error('Erro ao buscar produtos');
        }
        const dados = await response.json();
        setProdutos(dados);
      } catch (error) {
        console.error('Erro ao buscar produtos:', error);
      }
    };

    const fetchUsuarios = async () => {
      try {
        const response = await fetch('http://localhost:8000/usuarios');
        if (!response.ok) {
          throw new Error('Erro ao buscar usuários');
        }
        const dados = await response.json();
        setUsuarios(dados);
      } catch (error) {
        console.error('Erro ao buscar usuários:', error);
      }
    };

    fetchProdutos();
    fetchUsuarios();
  }, []);

  const handleExcluir = async (id: number) => {
    alert(`Excluir o produto com id ${id}`);
    try {
      const response = await fetch(`http://localhost:8000/produtos/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Erro ao excluir o produto');
      }
      alert('Produto excluído com sucesso');
      window.location.reload();
    } catch (error) {
      console.error('Erro ao excluir o produto:', error);
      alert('Erro ao excluir o produto: Confira o terminal do backend');
    }
  };

  return (
    <div className="app-container">
      <header className="site-header">
        <nav className="navigation">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/cadastro-produto">Cadastro de Produto</Link></li>
            <li><Link to="/usuarios">Usuários</Link></li>
          </ul>
        </nav>
      </header>

      <div className="content-container">
        <Routes>
          <Route path="/" element={<HomePage produtos={produtos} handleExcluir={handleExcluir} />} />
          <Route path="/usuarios" element={<UsuariosPage usuarios={usuarios} />} />
          <Route path="/cadastro-produto" element={<CadastroProdutoPage />} />
          <Route path="/alterar-produto/:id" element={<AlterarProduto />} />
        </Routes>
      </div>
    </div>
  );
}

function HomePage({ produtos, handleExcluir }: { produtos: ProdutoType[], handleExcluir: (id: number) => void }) {
  return (
    <div className="produtos-container">
      <h1 className="titulo-produto">Produtos</h1>
      <div className="produtos-list">
        {produtos.map((produto) => (
          <div key={produto.id} className="produto-item">
            <h3 className="produto-nome">{produto.nome}</h3>
            <div className="container-imagem">
              <img src={produto.imagem} alt="Imagem do produto" />
            </div>
            <p className="produto-preco">{produto.preco}</p>
            <p className="produto-descricao">{produto.descricao}</p>
            <button className="botao-comprar">Comprar</button>
            <button onClick={() => handleExcluir(produto.id)}>Excluir</button>
            <Link to={`/alterar-produto/${produto.id}`}>Alterar</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

function UsuariosPage({ usuarios }: { usuarios: UsuarioType[] }) {
  return (
    <div className="usuarios-container">
      <h1 className="titulo-usuario">Usuários</h1>
      <div className="usuarios-list">
        {usuarios.map((usuario) => (
          <div key={usuario.id} className="usuario-item">
            <h2 className="usuario-nome">{usuario.nome}</h2>
            <p>Email: {usuario.email}</p>
            <p>Criado em: {new Date(usuario.created_at).toLocaleDateString()}</p>
            <p>Atualizado em: {new Date(usuario.updated_at).toLocaleDateString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function CadastroProdutoPage() {
  const [nome, setNome] = useState('');
  const [preco, setPreco] = useState('');
  const [descricao, setDescricao] = useState('');
  const [imagem, setImagem] = useState('');
  const navigate = useNavigate();

  const handleCadastroProduto = async (e: React.FormEvent) => {
    e.preventDefault();
    const produto = { nome, preco, descricao, imagem };

    try {
      const response = await fetch('http://localhost:8000/produtos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(produto),
      });

      if (!response.ok) {
        throw new Error('Erro ao cadastrar produto');
      }

      alert('Produto cadastrado com sucesso!');
      navigate('/');
    } catch (error) {
      console.error('Erro ao cadastrar produto:', error);
      alert('Erro ao cadastrar produto');
    }
  };

  return (
    <div className="cadastro-produto-container">
      <h1>Cadastro de Produto</h1>
      <form onSubmit={handleCadastroProduto}>
        <div>
          <label htmlFor="nome">Nome:</label>
          <input type="text" id="nome" value={nome} onChange={(e) => setNome(e.target.value)} required />
        </div>
        <div>
          <label htmlFor="preco">Preço:</label>
          <input type="text" id="preco" value={preco} onChange={(e) => setPreco(e.target.value)} required />
        </div>
        <div>
          <label htmlFor="descricao">Descrição:</label>
          <input type="text" id="descricao" value={descricao} onChange={(e) => setDescricao(e.target.value)} required />
        </div>
        <div>
          <label htmlFor="imagem">Imagem:</label>
          <input type="text" id="imagem" value={imagem} onChange={(e) => setImagem(e.target.value)} required />
        </div>
        <button type="submit">Cadastrar Produto</button>
      </form>
    </div>
  );
}

export default App;

