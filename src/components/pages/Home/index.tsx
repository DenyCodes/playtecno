import { Analytics } from '@vercel/analytics/react'

import Banner from '../../Banner'
import Faqs from '../../Faqs'
import Footer from '../../Footer'
import Header from '../../Header'
import Product from '../../Product'
import Section from '../../Clientes'
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
