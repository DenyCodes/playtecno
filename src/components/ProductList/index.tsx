import { Div, Section, Subtitulo, List, Products } from './styles'
import Produto from '../../models/Produto'
import ProductCard from '../ProductCard'

export type Props = {
  produtos: Produto[]
}

const ProductList = ({ produtos }: Props) => (
  <Div>
    <Section>
      <Subtitulo>
        Aumente sua <span>visibilidade</span> e conquiste mais clientes com a
        experiência e a qualidade da <span>PlayTecno</span>
      </Subtitulo>

      <Products>
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
    </Section>
  </Div>
)

export default ProductList
