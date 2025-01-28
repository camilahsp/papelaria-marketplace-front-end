import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './App.css';


type ProdutoType = {
  id: number;
  titulo: string;
  preco: string;
  descricao: string;
  imagem: string;
  autor: string;
  genero: string;
};

function App() {
  const [produtos, setProdutos] = useState<ProdutoType[]>([]);


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
        console.log('Erro ao buscar produtos:', error);
      }
    };

    fetchProdutos();
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
      console.log('Erro ao excluir o produto:', error);
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
          </ul>
        </nav>
      </header>

      <div className="content-container">
            <HomePage produtos={produtos} handleExcluir={handleExcluir}/>
      </div>
    </div>
  );
}

function HomePage({ produtos, handleExcluir }: { produtos: ProdutoType[], handleExcluir: (id: number) => void }) {
  return (
    <div className="produtos-container">
      <h1>Produtos</h1>
      <div className="produtos-list">
        {produtos.map((produto) => (
          <div key={produto.id} className="produto-item">
            <h3 className="produto-titulo">{produto.titulo}</h3>
            <div className="container-imagem">
              <img src={produto.imagem} alt="Imagem do produto" />
            </div>
            <p className="produto-preco">{produto.preco}</p>
            <p className="produto-descricao">{produto.descricao}</p>
            <p className="produto-genero">{produto.genero}</p>
            <p className="produto-autor">{produto.autor}</p>
            <button>Comprar</button>
            <button onClick={() => handleExcluir(produto.id)}>Excluir</button>
            <button><Link to={`/alterar-produto/${produto.id}`}>Alterar</Link> </button>
          </div>
        ))}
      </div>
    </div>
  );
}



function CadastroProdutoPage() {
  const [titulo, setTitulo] = useState('');
  const [preco, setPreco] = useState('');
  const [descricao, setDescricao] = useState('');
  const [genero, setGenero] = useState('');
  const [autor, setAutor] = useState('');
  const [imagem, setImagem] = useState('');
  const navigate = useNavigate();

  const handleCadastroProduto = async (e: React.FormEvent) => {
    e.preventDefault();
    const produto = { titulo, genero, autor, preco, descricao, imagem };

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
      console.log('Erro ao cadastrar produto:', error);
      alert('Erro ao cadastrar produto');
    }
  };

  return (
    <div className="cadastro-produto-container">
      <h1>Cadastro de Produto</h1>
      <form onSubmit={handleCadastroProduto}>
        <div>
          <label htmlFor="titulo">Título:</label>
          <input type="text" id="titulo" value={titulo} onChange={(e) => setTitulo(e.target.value)} required />
        </div>
        <div>
          <label htmlFor="preco">Preço:</label>
          <input type="text" id="preco" value={preco} onChange={(e) => setPreco(e.target.value)} required />
        </div>
        <div>
        <label htmlFor="genero">Gênero:</label>
          <input type="text" id="genero" value={genero} onChange={(e) => setGenero(e.target.value)} required />
        </div>
        <div>
        <label htmlFor="autor">Autor:</label>
          <input type="text" id="autor" value={autor} onChange={(e) => setAutor(e.target.value)} required />
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


