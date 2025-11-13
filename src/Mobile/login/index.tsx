import React, { useState } from 'react'
import axios from 'axios'
import { Div } from './styles'

function Login() {
  const [name, setname] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    try {
      // Faz uma solicitação para a API de cadastro para obter os dados do usuário com base no nome de usuário fornecido
      const response = await axios.get(
        'https://66204b2c3bf790e070af7e54.mockapi.io/api/cadastro',
        {
          params: {
            name: name
          }
        }
      )

      // Verifica se os dados do usuário foram encontrados
      if (response.data.length > 0) {
        // Verifica se a senha fornecida corresponde à senha armazenada na API
        if (response.data[0].password === password) {
          // Senha correta, redireciona o usuário para a página principal
          window.location.href = '/dashboard'
        } else {
          // Senha incorreta, exibe uma mensagem de erro
          setError('Invalid name or password.')
        }
      } else {
        // Usuário não encontrado, exibe uma mensagem de erro
        setError('User not found.')
      }
    } catch (error) {
      // Se ocorrer um erro durante a solicitação, exibe uma mensagem de erro
      setError('Failed to login. Please try again.')
    }
  }

  return (
    <Div>
      <h1>Login</h1>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          name:
          <input
            type="text"
            value={name}
            onChange={(e) => setname(e.target.value)}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
    </Div>
  )
}

export default Login
