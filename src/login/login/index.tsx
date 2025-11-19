import React, { useState } from "react";
import AuthLayout from "../components/AuthLayout";
import Input from "../components/Input";
import { apiPost } from "../services/api";
import "../auth.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  async function handleLogin() {
    try {
      const resp = await apiPost("/auth/login", { email, password: senha });
      localStorage.setItem("token", resp.token);
      alert("Login realizado!");
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (e: any) {
      alert(e.message);
    }
  }

  return (
    <AuthLayout title="Entrar na PlayTecno">
      <Input label="E-mail" value={email} onChange={setEmail} />
      <Input label="Senha" type="password" value={senha} onChange={setSenha} />

      <button className="auth-btn" onClick={handleLogin}>
        Entrar
      </button>

      <p className="auth-switch">
        Ainda não tem conta? <a href="/register">Criar conta</a>
      </p>
    </AuthLayout>
  );
}
