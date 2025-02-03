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
        const response = await fetch('https://papelaria-marketplace-back-end.onrender.com/produtos');
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
      const response = await fetch(`https://papelaria-marketplace-back-end.onrender.com/produtos/${id}`, {
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
            <h3 className="produto-preco">{produto.preco}</h3>
            <p className="produto-descricao">{produto.descricao}</p>
            <p className="produto-genero">{produto.genero}</p>
            <p className="produto-autor">{produto.autor}</p>
            <button onClick={() => handleExcluir(produto.id)}>Excluir</button>
            <button><Link to={`/alterar-produto/${produto.id}`}>Alterar</Link> </button>
          </div>
        ))}
      </div>
    </div>
  );
}




export default App;


