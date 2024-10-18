import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css"; // Importar os estilos para responsividade

const Home = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle("dark-mode", !isDarkMode);
  };

  return (
    <div className={`home-container ${isDarkMode ? "dark" : ""}`}>
      <h1 className="animated-title">Bem-vindo ao Casal Resolve</h1>
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
      <button onClick={toggleDarkMode} className="toggle-button">
        {isDarkMode ? "Modo Dia" : "Modo Noite"}
      </button>
    </div>
  );
};

export default Home;
