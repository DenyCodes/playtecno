import { Section, Subtitulo } from './styles'
import {
  BolaImg,
  Image1,
  Image2,
  Image3,
  Image4,
  List,
  Products
} from './styles'
import Produto from '../../models/Produto'
import ProductCard from '../ProductCard'
import Imagem1 from '../../assets/images/Ellipse 1.svg'
import Imagem2 from '../../assets/images/Ellipse 3.svg'
import Imagem3 from '../../assets/images/Ellipse 4.svg'
import Imagem4 from '../../assets/images/Ellipse 5.svg'
import Imagem5 from '../../assets/images/Wavy_Bus-10_Single-03 1.svg'

export type Props = {
  produtos: Produto[]
}

const ProductList = ({ produtos }: Props) => (
  <div>
    <Section>
      <Products>
        <Subtitulo>
          Aumente sua <span>visibilidade</span> e conquiste mais clientes com a
          experiência e a qualidade da <span>PlayTecno</span>
        </Subtitulo>
        <List>
          {produtos.map((produto) => (
            <ProductCard
              key={produto.id}
              image={produto.image}
              title={produto.title}
              description={produto.description}
              id={produto.id}
            />
          ))}
        </List>
      </Products>
      <Image3>
        <img src={Imagem5} alt="" />
      </Image3>
      <Image4>
        <img src={Imagem2} alt="" />
      </Image4>
      <Image1 className="ellipse">
        <img src={Imagem1} alt="" />
      </Image1>
      <Image2>
        <img src={Imagem4} alt="" />
      </Image2>
      <BolaImg>
        <img src={Imagem3} alt="" />
      </BolaImg>
    </Section>
  </div>
)

export default ProductList
