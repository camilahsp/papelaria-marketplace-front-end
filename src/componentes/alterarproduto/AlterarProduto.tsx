
import { useParams } from "react-router-dom";
import {FormEvent, useState , useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";

function AlterarProduto() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [titulo, setTitulo] = useState("");
    const [descricao, setDescricao] = useState("");
    const [preco, setPreco] = useState("");
    const [genero, setGenero] = useState("");
    const [autor, setAutor] = useState("");
    const [imagem, setImagem] = useState("");

    useEffect(() => {
        fetch(`https://papelaria-marketplace-back-end.onrender.com/produtos/${id}`)
            .then(resposta => resposta.json())
            .then(dados => {
                setTitulo(dados.titulo);
                setDescricao(dados.descricao);
                setPreco(dados.preco);
                setGenero(dados.genero);
                setAutor(dados.autor);
                setImagem(dados.imagem);
            })
            .catch(() => {
                alert("Erro ao buscar dados do produto.");
            });
    }, [id]);

    async function handleForm(event: FormEvent) {
        event.preventDefault();
        try {
            const resposta = await fetch(`https://papelaria-marketplace-back-end.onrender.com/produtos/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    titulo: titulo,
                    descricao: descricao,
                    preco: preco,
                    genero: genero,
                    autor: autor,
                    imagem: imagem
                })
            });
            if (resposta.ok) {
                alert("Produto alterado com sucesso");
                navigate("/");
            } else {
                const mensagem = await resposta.text();
                alert("Erro ao alterar produto: " + mensagem);
            }
        } catch (e) {
            alert("Servidor não está respondendo.");
        }
    }

    return (
        <>
              <header className="site-header">
                <nav className="navigation">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/cadastro-produto">Cadastro de Produto</Link></li>
                </ul>
                </nav>
             </header>
             
            <h1>Alterar Produto</h1>
            <form onSubmit={handleForm}>
                <div>
                    <label htmlFor="id">Id</label>
                    <input placeholder="Id" type="text" name="id" id="id" value={id} readOnly />
                </div>
                <div>
                    <label htmlFor="titulo">Titulo</label>
                    <input placeholder="Titulo" type="text" name="titulo" id="titulo" value={titulo} onChange={(e) => setTitulo(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="descricao">Descrição</label>
                    <input placeholder="Descrição" type="text" name="descricao" id="descricao" value={descricao} onChange={(e) => setDescricao(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="preco">Preço</label>
                    <input placeholder="Preço" type="text" name="preco" id="preco" value={preco} onChange={(e) => setPreco(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="genero">Gênero</label>
                    <input placeholder="Genero" type="text" name="genero" id="genero" value={genero} onChange={(e) => setGenero(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="autor">Autor</label>
                    <input placeholder="Autor" type="text" name="autor" id="autor" value={autor} onChange={(e) => setAutor(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="imagem">URL Imagem</label>
                    <input placeholder="URL Imagem" type="text" name="imagem" id="imagem" value={imagem} onChange={(e) => setImagem(e.target.value)} />
                    {imagem && <img className="imagem-produto-reduzida" src={imagem} alt="Imagem do Produto" />}
                </div>
                <div>
                    <input type="submit" value="Alterar" />
                </div>
            </form>
        </>
    );
}

export default AlterarProduto;
