import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Div } from './styles'

interface Member {
  id: number
  name: string
}

const Cadastro = () => {
  const [members, setMembers] = useState<Member[]>([])
  const [name, setName] = useState<string>('')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value)
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    try {
      await axios.post('http://localhost:5000/add_member', { name })
      alert('Member added successfully!')
      setName('')
      fetchMembers() // Buscar membros novamente após adicionar um novo membro
    } catch (error) {
      console.error('Failed to add member:', error)
      alert('Failed to add member. Please try again.')
    }
  }

  const fetchMembers = async () => {
    try {
      const response = await axios.get<Member[]>(
        'http://localhost:5000/members'
      ) // Especificar o tipo de resposta como Member[]
      setMembers(response.data)
    } catch (error) {
      console.error('Failed to fetch members:', error)
    }
  }

  const deleteMember = async (id: number) => {
    try {
      await axios.delete(`http://localhost:5000/members/${id}`) // Enviar a requisição DELETE para a rota /members/:id
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
          <input type="text" value={name} onChange={handleChange} />
        </label>
        <button type="submit">Add Member</button>
      </form>
      <h2>Members List</h2>
      <ul>
        {members.map((member) => (
          <li key={member.id}>
            {member.name} {member.id}
            <button onClick={() => deleteMember(member.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </Div>
  )
}

export default Cadastro
