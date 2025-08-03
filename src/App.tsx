import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Dropshipping from './components/pages/Dropshipping'
import { GlobalCss, Container } from './styles'

function App() {
  return (
    <>
      <GlobalCss />
      <Container>
        <Router>
          <Routes>
            <Route path="/" element={<Dropshipping />} />
          </Routes>
        </Router>
      </Container>
    </>
  )
}

export default App
