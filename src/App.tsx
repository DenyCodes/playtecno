import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useMediaQuery } from 'react-responsive'
import { GlobalCss, Container } from './styles'
import { ThemeProviderCustom } from './contexts/ThemeContext' // Importante para o tema

// Componentes das Páginas
import Home from './components/pages/Home'
import Login from './login/login'
import Register from './login/register'
// Correção do caminho de importação:
import MenuDenLandingPage from './Pages/index'

export interface AppProps {
  toggleTheme?: () => void
  isDark?: boolean
}

const App: React.FC<AppProps> = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' })

  return (
    <ThemeProviderCustom>
      <GlobalCss />
      <Container>
        <Router>
          <Routes>
            {/* Rota Raiz */}
            <Route path="/" element={<Home />} />

            {/* Rotas Principais */}
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            {/* Rota da Landing Page do Menu Den */}
            <Route path="/menuden" element={<MenuDenLandingPage />} />
          </Routes>
        </Router>
      </Container>
    </ThemeProviderCustom>
  )
}

export default App
