import React from "react";
import { Link } from "react-router-dom";
import "./Home.css"; // Importar os estilos para responsividade

const Home = () => {
  return (
    <div className="home-container">
      <h1>Bem-vindo ao Casal Resolve</h1>
      <p>
        Está enfrentando dificuldades em resolver discussões com seu parceiro? O
        <strong> Casal Resolve</strong> está aqui para ajudar! Nossa plataforma oferece
        ferramentas práticas para melhorar o diálogo e encontrar soluções
        juntos.
      </p>
      <div className="action-links">
        <Link to="/login" className="btn-primary">Entrar</Link>
        <Link to="/register" className="btn-secondary">Cadastrar</Link>
      </div>
    </div>
  );
};

export default Home;
