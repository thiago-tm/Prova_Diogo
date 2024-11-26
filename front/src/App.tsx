import React from "react";
import ConsultarCEP from "";
import ComponenteExemplo from "";
import ProdutoListar from "";
import ProdutoCadastrar from "";
import { BrowserRouter, Link, Route, Routes } from "";

function App() {
  return (
    <div id="app">
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/pages/tarefa/listar">Listar tarefa</Link>
            </li>
            <li>
              <Link to="/pages/tarefa/cadastrar">Cadastrar tarefa</Link>
            </li>
            <li>
              <Link to="/pages/tarefa/consultar">Consultar tarefa</Link>
            </li>
          </ul>
        </nav>
        <Routes>
        
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
