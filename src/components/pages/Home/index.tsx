import Banner from '../../Banner'
import Faqs from '../../Faqs'
import Footer from '../../Footer'
import Header from '../../Header'
import PageService from '../../PageService'
import Product from '../../Product'
import Promocoes from '../../Promocoes'

const Home = () => (
  <>
    <Header />
    <Banner />
    <Product />
    <Promocoes />
    <PageService />
    <Faqs />
    <Footer />
  </>
)

export default Home
