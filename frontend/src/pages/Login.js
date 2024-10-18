import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica de autenticação com email e senha
    console.log("Email:", email, "Password:", password);
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1>Bem-vindo de volta!</h1>
        <p>Faça login para acessar sua conta.</p>
        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Digite seu e-mail"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Senha</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Digite sua senha"
              required
            />
          </div>
          <button type="submit" className="login-button">Entrar</button>
        </form>
        <p className="register-link">
          Ainda não tem conta? <Link to="/register">Cadastre-se</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
