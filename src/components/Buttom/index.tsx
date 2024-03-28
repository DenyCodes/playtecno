import { Botao } from './styles'
import whatsapp from '../../assets/images/whatsapp.svg'

const Buttom = () => (
  <Botao href="https://wa.link/ozj877">
    {' '}
    <img src={whatsapp} alt="" />
    Fale Conosco
  </Botao>
)

export default Buttom
