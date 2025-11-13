import WorldImg from '../../assets/images/worldw.svg'
import servidor from '../../assets/images/servidor.svg'
import ideia from '../../assets/images/ideia.svg'
import movel from '../../assets/images/aplicativo-movel 1.png'
import { Cards } from './styles'

const Card = [
  {
    id: 1,
    img: WorldImg,
    titulo: '100% Customizavel',
    descricao:
      'Seu site com logo, cores e informações de produtos e contatos da sua empresa, feito sob medida para você.'
  },
  {
    id: 2,
    img: servidor,
    titulo: 'Domínio e hospedagem grátis no 1º ano',
    descricao:
      'Já entregamos seu site no ar. Após esse período, renovação de apenas R$150/ano.'
  },
  {
    id: 3,
    img: ideia,
    titulo: 'Sem mensalidade',
    descricao:
      'Você paga apenas pelo desenvolvimento. Alterações futuras são combinadas conforme sua necessidade.'
  },
  {
    id: 4,
    img: movel,
    titulo: 'WhatsApp e formulários integrados',
    descricao:
      'Cards chamam no WhatsApp ou preenchem formulário, você recebe na hora.'
  }
]

const Ofertas = () => {
  return (
    <Cards>
      <h1>Alguns de nossos clientes</h1>
      <div className="clientes-grid">
        {Card.map((cliente) => (
          <div key={cliente.id} className="cliente-item">
            <img src={cliente.img} title={cliente.titulo} />
            <p>{cliente.descricao}</p>
          </div>
        ))}
      </div>
    </Cards>
  )
}

export default Ofertas
