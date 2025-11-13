import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useMediaQuery } from 'react-responsive'
import { GlobalCss, Container } from './styles'
import Home from './components/pages/Home'
import WebDeveloper from './components/pages/WebDeveloper'

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
            <Route path="/web" element={<WebDeveloper />} />
          </Routes>
        </Router>
      </Container>
    </>
  )
}

export default App
