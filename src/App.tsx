import Header from './components/Header'
import Banner from './components/Banner'
import PageService from './components/PageService'
import { GlobalCss, Container } from './styles'
import Product from './components/Product'
import Home from './components/pages/Home'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Footer from './components/Footer'
import Faqs from './components/Faqs'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  }
])

function App() {
  return (
    <>
      <GlobalCss />
      <Container>
        <Header />
        <Banner />
        <Product />
        <RouterProvider router={rotas} />
        <PageService />
        <Faqs />
        <Footer />
      </Container>
    </>
  )
}

export default App
