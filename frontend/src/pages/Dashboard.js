import React from "react";
import { useNavigate } from "react-router-dom"; // Altere esta linha
import "./Dashboard.css";

const Dashboard = () => {
  const navigate = useNavigate(); // Altere esta linha

  const handleLogout = () => {
    // Aqui você pode adicionar a lógica para remover o token de autenticação ou informações do usuário
    console.log("Usuário deslogado");
    // Redireciona para a página de login após logout
    navigate("/login"); // Altere esta linha
  };

  return (
    <div className="dashboard-container">
      <h1>Painel do Usuário</h1>
      <p>Bem-vindo ao seu painel! Aqui você pode gerenciar suas informações.</p>

      <div className="user-info">
        <h2>Informações do Usuário</h2>
        <p><strong>Nome:</strong> [Nome do Usuário]</p>
        <p><strong>Email:</strong> [Email do Usuário]</p>
        {/* Adicione mais informações conforme necessário */}
      </div>

      <button className="logout-button" onClick={handleLogout}>
        Sair
      </button>
    </div>
  );
};

export default Dashboard;
