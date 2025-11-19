import React, { useState } from "react";
import AuthLayout from "../components/AuthLayout";
import Input from "../components/Input";
import { apiPost } from "../services/api";
import "../auth.css";

export default function Register() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  async function handleRegister() {
    try {
      await apiPost("/auth/register", { nome, email, senha });
      alert("Cadastro criado com sucesso!");
      window.location.href = "/login";
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (e: any) {
      alert(e.message);
    }
  }

  return (
    <AuthLayout title="Criar conta na PlayTecno">
      <Input label="Nome" value={nome} onChange={setNome} />
      <Input label="E-mail" value={email} onChange={setEmail} />
      <Input label="Senha" type="password" value={senha} onChange={setSenha} />

      <button className="auth-btn" onClick={handleRegister}>
        Criar Conta
      </button>

      <p className="auth-switch">
        Já possui conta? <a href="/login">Entrar</a>
      </p>
    </AuthLayout>
  );
}
