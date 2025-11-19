import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useMediaQuery } from 'react-responsive'
import { GlobalCss, Container } from './styles'
import Home from './components/pages/Home'
import Login from './login/login'
import Register from './login/register'
export interface AppProps {
  toggleTheme: () => void
  isDark: boolean
}

const App: React.FC<AppProps> = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' })
  return (
    <>
      <GlobalCss />
      <Container>
        <Router>
          <Routes>
            {isMobile ? (
              <Route path="/" element={<Home />} />
            ) : (
              <Route path="/" element={<Home />} />
            )}
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />}/>
            <Route path="/register" element={<Register />}/>
          </Routes>
        </Router>
      </Container>
    </>
  )
}

export default App
