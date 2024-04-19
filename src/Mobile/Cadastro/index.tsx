import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Div } from './styles'

interface Member {
  id: number
  name: string
  email: string
  telefone: string
}

const Cadastro = () => {
  const [members, setMembers] = useState<Member[]>([])
  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [telefone, setTelefone] = useState<string>('')

  const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value)
  }

  const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value)
  }

  const handleChangeTelefone = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTelefone(event.target.value)
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    try {
      await axios.post(
        'https://66204b2c3bf790e070af7e54.mockapi.io/api/cadastro',
        { name, email, telefone }
      )
      alert('Member added successfully!')
      setName('')
      setEmail('')
      setTelefone('')
      fetchMembers() // Buscar membros novamente após adicionar um novo membro
    } catch (error) {
      console.error('Failed to add member:', error)
      alert('Failed to add member. Please try again.')
    }
  }

  const fetchMembers = async () => {
    try {
      const response = await axios.get<Member[]>(
        'https://66204b2c3bf790e070af7e54.mockapi.io/api/cadastro'
      )
      setMembers(response.data)
    } catch (error) {
      console.error('Failed to fetch members:', error)
    }
  }

  const deleteMember = async (id: number) => {
    try {
      await axios.delete(
        `https://66204b2c3bf790e070af7e54.mockapi.io/api/cadastro/${id}`
      )
      fetchMembers() // Atualizar a lista de membros após a exclusão
    } catch (error) {
      console.error('Failed to delete member:', error)
    }
  }

  useEffect(() => {
    fetchMembers()
  }, [])

  return (
    <Div>
      <h1>Cadastro</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={handleChangeName} />
        </label>
        <label>
          Email:
          <input type="text" value={email} onChange={handleChangeEmail} />
        </label>
        <label>
          Telefone:
          <input type="text" value={telefone} onChange={handleChangeTelefone} />
        </label>
        <button type="submit">Add Member</button>
      </form>
      <h2>Members List</h2>
      <ul>
        {members.map((member) => (
          <li key={member.id}>
            {member.name} - {member.email} - {member.telefone}
            <button onClick={() => deleteMember(member.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </Div>
  )
}

export default Cadastro
