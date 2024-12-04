// Importando os hooks do React e componentes de navegação do React Router
import { useEffect, useState } from 'react';
import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import './App.css'; // Importando os estilos CSS

// Tipagem para os dados de um usuário (definindo como deve ser a estrutura de dados dos usuários)
type UsuarioType = {
  id: number; // ID único do usuário
  nome: string; // Nome do usuário
  email: string; // Email do usuário
  enderecoEntrega: string; // Endereço de entrega do usuário
};

// Tipagem para os dados de um produto (nesse caso, um livro)
type ProdutoType = {
  id: number; // ID único do produto
  titulo: string; // Título do livro
  autor: string; // Autor do livro
  numeroDePaginas: number; // Número de páginas do livro
  editora: string; // Editora do livro
  imagem: string; // URL da imagem do livro
  descricao: string; // Descrição do livro
  genero: string; // Gênero do livro
  preco: string; // Preço do livro (em formato string, pode ser convertido)
};

// Componente principal do aplicativo
function App() {
  // Definindo os estados para armazenar a lista de usuários e produtos
  const [usuarios, setUsuarios] = useState<UsuarioType[]>([]);
  const [produtos, setProdutos] = useState<ProdutoType[]>([]);

  // Usando useEffect para buscar os dados da API quando o componente for montado
  useEffect(() => {
    // Fazendo a requisição para obter os usuários da API
    fetch('http://localhost:8000/usuarios')
      .then((resposta) => resposta.json()) // Convertendo a resposta para JSON
      .then((dados) => setUsuarios(dados)); // Atualizando o estado com os dados dos usuários

    // Fazendo a requisição para obter os produtos da API
    fetch('http://localhost:8000/produtos')
      .then((resposta) => resposta.json()) // Convertendo a resposta para JSON
      .then((dados) => setProdutos(dados)); // Atualizando o estado com os dados dos produtos
  }, []); // O array vazio faz com que o efeito seja executado apenas uma vez após a montagem

  // JSX retornado para renderizar a interface
  return (
    <div className="app-container">
      <header className="site-header">
        {/* Logo */}
        <div className="logo-container">
          <img src="logo.png" alt="Logo" className="logo" />
        </div>
        <nav className="navigation">
          {/* Links de navegação */}
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/usuarios">Usuários</Link></li>
          </ul>
        </nav>
        <div className="button-container">
          {/* Botões para cadastrar usuário e produto */}
          <Link to="/cadastro">
            <button className="cadastro-btn">Cadastrar Usuário</button>
          </Link>
          <Link to="/cadastro-produto">
            <button className="cadastro-produto-btn">Cadastrar Produto</button>
          </Link>
        </div>
      </header>

      <div className="content-container">
        {/* Configuração de rotas */}
        <Routes>
          <Route path="/" element={<HomePage produtos={produtos} />} /> {/* Rota para a página inicial (produtos) */}
          <Route path="/usuarios" element={<UsuariosPage usuarios={usuarios} />} /> {/* Rota para listar os usuários */}
          <Route path="/cadastro" element={<CadastroPage />} /> {/* Rota para cadastro de usuário */}
          <Route path="/cadastro-produto" element={<CadastroProdutoPage />} /> {/* Rota para cadastro de produto */}
        </Routes>
      </div>
    </div>
  );
}

// Página inicial que lista os produtos
function HomePage({ produtos }: { produtos: ProdutoType[] }) {
  return (
    <div className="home-container">
      <h1>Produtos</h1>
      <div className="produtos-list">
        {/* Verifica se há produtos cadastrados e os exibe */}
        {produtos.length > 0 ? (
          produtos.map((produto) => (
            <div key={produto.id} className="produto-item">
              {/* Exibindo as informações de cada produto */}
              <img src={produto.imagem} alt={produto.titulo} className="produto-imagem" />
              <h2>{produto.titulo}</h2>
              <p><strong>Autor:</strong> {produto.autor}</p>
              <p><strong>Preço:</strong> R${Number(produto.preco).toFixed(2)}</p>
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

// Página de cadastro de usuário
function CadastroPage() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [endereco, setEndereco] = useState('');
  const navigate = useNavigate();

  // Função para cadastrar o usuário
  const handleCadastro = async (e: React.FormEvent) => {
    e.preventDefault(); // Previne o comportamento padrão de envio de formulário

    const usuario = { nome, email, enderecoEntrega: endereco };

    // Enviando os dados para a API
    const response = await fetch('http://localhost:8000/usuarios', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(usuario),
    });

    // Verificando se a requisição foi bem-sucedida
    if (response.ok) {
      alert('Usuário cadastrado com sucesso!');
      navigate('/usuarios'); // Redireciona para a página de usuários
    } else {
      alert('Erro ao cadastrar usuário');
    }
  };

  return (
    <div className="cadastro-container">
      <h1>Cadastro de Usuário</h1>
      {/* Formulário de cadastro */}
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

// Página de cadastro de produto (livro)
function CadastroProdutoPage() {
  const [titulo, setTitulo] = useState('');
  const [autor, setAutor] = useState('');
  const [imagem, setImagem] = useState('');
  const [genero, setGenero] = useState('');
  const [preco, setPreco] = useState(0);
  const navigate = useNavigate();

  // Função para cadastrar o produto
  const handleCadastroProduto = async (e: React.FormEvent) => {
    e.preventDefault();

    const produto = { titulo, autor, imagem, genero, preco };

    // Enviando os dados para a API
    const response = await fetch('http://localhost:8000/produtos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(produto),
    });

    // Verificando se a requisição foi bem-sucedida
    if (response.ok) {
      alert('Produto cadastrado com sucesso!');
      navigate('/'); // Redireciona para a página inicial (produtos)
    } else {
      alert('Erro ao cadastrar produto');
    }
  };

  return (
    <div className="cadastro-produto-container">
      <h1>Cadastro de Produto (Livro)</h1>
      {/* Formulário de cadastro */}
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

// Página que exibe os usuários cadastrados
function UsuariosPage({ usuarios }: { usuarios: UsuarioType[] }) {
  return (
    <div className="usuarios-container">
      <h1>Usuários Cadastrados</h1>
      <div className="usuarios-list">
        {/* Verifica se há usuários cadastrados e os exibe */}
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

// Exporta o componente principal para ser usado na aplicação
export default App;