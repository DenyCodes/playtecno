import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/pages/Home'
import WebDeveloper from './components/pages/WebDeveloper'
import Mobile from '../src/Mobile'
import { GlobalCss, Container } from './styles'
import { useMediaQuery } from 'react-responsive'
import Cadastro from './Mobile/Cadastro'
import Login from './Mobile/login'

function App() {
  // Define a condição para verificar se a tela é menor
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' })

  return (
    <>
      <GlobalCss />
      <Container>
        <Router>
          <Routes>
            {/* Verifica se a tela é menor e renderiza o componente MobileDeveloper */}
            {isMobile ? (
              <Route path="/" element={<Mobile />} />
            ) : (
              /* Se não, renderiza o componente WebDeveloper */
              <Route path="/" element={<Home />} />
            )}
            {/* Renderiza outras rotas normalmente */}
            <Route path="/home" element={<Home />} />
            <Route path="/web" element={<WebDeveloper />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Router>
      </Container>
    </>
  )
}

export default App
