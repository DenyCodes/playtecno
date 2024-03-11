import { Card, Descricao, Images, Titulo } from './styles'

type Props = {
  image: string
  title: string
  description: string
  id: number
}

const ProductCard = ({ image, title, description, id }: Props) => (
  <Card>
    <Images>
      <img src={image} />
    </Images>
    <Titulo>{title}</Titulo>
    <Descricao>{description}</Descricao>
  </Card>
)

export default ProductCard
