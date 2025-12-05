import { Analytics } from '@vercel/analytics/react'

import Banner from '../../Banner'
import Faqs from '../../Faqs'
import Footer from '../../Footer'
import Header from '../../Header'
import Product from '../../Product'
import Section from '../../Clientes'
import Frame from '../../Planos'
import Ad from './../../adcional/index'
import MenuDenSpotlight from '../../../../src/Pages/index'
const Home = () => (
  <>
    <Analytics />
    <Header />
    <Banner />
    <Ad />
    <MenuDenSpotlight />
    <Product />
    <Section />
    <Frame />
    <Faqs />
    <Footer />
  </>
)

export default Home
