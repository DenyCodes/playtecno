import path from 'path'
import Home from './components/pages/Home'
import { GlobalCss, Container } from './styles'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Web from './components/pages/WebDeveloper'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/web',
    element: <Web />
  }
])

function App() {
  return (
    <>
      <GlobalCss />
      <Container>
        <RouterProvider router={rotas} />
      </Container>
    </>
  )
}

export default App
