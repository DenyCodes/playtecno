import Produto from '../../../models/Produto'
import vector from '../../../assets/images/Vector 1.svg'
import ProductList from '../../ProductList'
import Start from '../../../assets/images/Star 1.svg'
import Vector from '../../../assets/images/Vector.svg'
import Pergunta from '../../../assets/images/pergunta 1.svg'
import Profisionais from '../../../assets/images/profissionais 1.svg'
import Eficiencia from '../../../assets/images/eficiencia 1.svg'

const promocoes: Produto[] = [
  {
    id: 1,
    title: 'Qualidade',
    description:
      'Qualidade superior utilizando tecnologias de ponta para garantir excelência em seu website ou produto web.',
    image: vector
  },
  {
    id: 2,
    title: 'Experiencia',
    description:
      'Estamos preparados para enfrentar desafios complexos e entregar soluções de alta qualidade.',
    image: Start
  },
  {
    id: 3,
    title: 'Personalização',
    description:
      'Cada projeto é personalizado para atender às suas necessidades específicas, desde o design até os recursos e funcionalidades.',
    image: Vector
  },
  {
    id: 4,
    title: 'Suporte',
    description:
      'Oferecemos suporte contínuo para garantir o sucesso a longo prazo do seu investimento, com uma equipe sempre disponível para ajudar.',
    image: Pergunta
  },
  {
    id: 5,
    title: 'Profissionais especializados',
    description:
      'Nossa equipe é composta por profissionais altamente qualificados em diversas áreas do desenvolvimento web.',
    image: Profisionais
  },
  {
    id: 6,
    title: 'Eficiencia',
    description:
      'Valorizamos seu tempo e recursos, garantindo uma entrega rápida e eficaz sem comprometer a qualidade.',
    image: Eficiencia
  }
]

const Home = () => (
  <>
    <ProductList produtos={promocoes} />
  </>
)

export default Home
