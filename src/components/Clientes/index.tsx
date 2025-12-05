import multidrop from '../../assets/multidrop.png'
import menuden from '../../assets/menuden.png'
import impulso from '../../assets/impulso.png'
import lri from '../../assets/lri.png'
import lri2 from '../../assets/lri2.png'
import rollfor from '../../assets/rollfor.png'
import braseiro from '../../assets/braseiro da lapa.png'
import imobiliaria from '../../assets/imobiliaria.png'
import { Card, Carousel, CarouselTrack, ClienteItem } from './styles'

const clientes = [
  { id: 0, link: 'https://imobiliariaoliveira.vercel.app/', nome: 'imobiliaria', logo: imobiliaria },
  { id: 1, link: 'https://blog.lri.com.br/', nome: 'Lri', logo: lri },
  { id: 2, link: 'https://rollfor.com.br/', nome: 'Rollfor', logo: rollfor },
  { id: 3, link: 'https://menuden.com.br', nome: 'MenuDen', logo: menuden },
  { id: 4, link: 'https://projetos.lri.com.br/', nome: 'Lri2', logo: lri2 },
  {
    id: 5,
    link: 'https://impulsojuridicoagencia.com.br/',
    nome: 'impulso',
    logo: impulso
  },
  {
    id: 6,
    link: 'https://multidrop.vercel.app/dashboard',
    nome: 'MultiDrop',
    logo: multidrop
  },
  {
    id: 7,
    link: 'https://braseirodalapa.com.br/',
    nome: 'Braseiro',
    logo: braseiro
  }
]

const Section = () => {
  return (
    <Card>
      <h1>Alguns de nossos clientes</h1>

      <Carousel>
        <CarouselTrack>
          {clientes.concat(clientes).map((cliente, index) => (
            <ClienteItem key={`${cliente.id}-${index}`}>
              <a
                href={cliente.link || '#'}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={cliente.logo}
                  alt={cliente.nome}
                  title={cliente.nome}
                />
              </a>
              <p>{cliente.nome}</p>
            </ClienteItem>
          ))}
        </CarouselTrack>
      </Carousel>
    </Card>
  )
}

export default Section
