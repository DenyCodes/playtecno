import { Analytics } from '@vercel/analytics/react'

import Banner from '../../Banner'
import Faqs from '../../Faqs'
import Footer from '../../Footer'
import Header from '../../Header'
import PageService from '../../PageService'
import Planos from '../../Planos'
import Product from '../../Product'
import Promocoes from '../../Promocoes'
import Section from '../../Clientes'
import Ofertas from '../../Ofertas'
import Frame from '../../Planos'

const Home = () => (
  <>
    <Analytics />
    <Header />
    <Banner />
    <Product />
    <Section />
    <Frame />
    <Faqs />
    <Footer />
  </>
)

export default Home
