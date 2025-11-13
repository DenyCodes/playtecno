import React, { useState } from 'react'
import axios from 'axios'
import { Div } from './styles'

function Signup() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [phone, setPhone] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    try {
      const response = await axios.post(
        'https://66204b2c3bf790e070af7e54.mockapi.io/api/cadastro',
        { name, email, password, phone }
      )
      console.log(response.data) // Você pode lidar com a resposta conforme necessário
      alert('User registered successfully!')
      // Redirecionar o usuário para a página de login após o cadastro bem-sucedido
      window.location.href = '/login'
    } catch (error) {
      setError('Failed to register user. Please try again.')
    }
  }

  return (
    <Div>
      <h1>Signup</h1>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
        <label>
          Phone:
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Signup</button>
      </form>
    </Div>
  )
}

export default Signup
