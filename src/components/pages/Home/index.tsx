import Banner from '../../Banner'
import Faqs from '../../Faqs'
import Footer from '../../Footer'
import Header from '../../Header'
import PageService from '../../PageService'
import Product from '../../Product'

const Home = () => (
  <>
    <Header />
    <Banner />
    <Product />
    <PageService />
    <Faqs />
    <Footer />
  </>
)

export default Home
