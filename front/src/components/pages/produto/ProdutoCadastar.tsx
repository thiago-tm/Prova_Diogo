import { useEffect, useState } from "react";
import { Produto } from "../../../models/Produto";
import axios from "axios";

function ProdutoCadastrar() {
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [quantidade, setQuantidade] = useState("");
  const [preco, setPreco] = useState("");
  const [categoriaId, setCategoriaId] = useState(0);
  const [categorias, setCategorias] = useState<any[]>([]);

  useEffect(() => {
    axios
      .get<any[]>("http://localhost:5085/api/categoria/listar")
      .then((resposta) => {
        setCategorias(resposta.data);
      });
  }, []);

  function enviarProduto(event: any) {
    event.preventDefault();
    const produto: Produto = {
      nome: nome,
      descricao: descricao,
      quantidade: Number(quantidade),
      valor: Number(preco),
      categoriaId: categoriaId,
    };

    //AXIOS - Biblioteca de requisições HTTP

    fetch("http://localhost:5085/api/produto/cadastrar", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(produto),
    })
      .then((resposta) => resposta.json())
      .then((produto) => {
        console.log(produto);
      });
  }

  return (
    <div>
      <h1>Cadastrar Produto</h1>
      <form onSubmit={enviarProduto} id="form-cadastro">
        <div className="form-group">
          <label htmlFor="nome">Nome:</label>
          <input
            type="text"
            id="nome"
            name="nome"
            required
            onChange={(event: any) => setNome(event.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="descricao">Descrição:</label>
          <input
            type="text"
            id="descricao"
            name="descricao"
            required
            onChange={(event: any) => setDescricao(event.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="quantidade">Quantidade:</label>
          <input
            type="number"
            id="quantidade"
            name="quantidade"
            min="1"
            required
            onChange={(event: any) => setQuantidade(event.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="valor">Preço:</label>
          <input
            type="number"
            id="valor"
            name="valor"
            min="0"
            step="0.01"
            required
            onChange={(event: any) => setPreco(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="categoria">Categorias:</label>
          <select onChange={(event: any) => setCategoriaId(event.target.value)}>
            {categorias.map((categoria) => (
              <option value={categoria.id} key={categoria.id}>
                {categoria.nome}
              </option>
            ))}
          </select>
        </div>

        <button type="submit">Cadastrar Produto</button>
      </form>
    </div>
  );
}

export default ProdutoCadastrar;
