import { Botao } from './styles'
import whatsapp from '../../assets/images/whatsapp.svg'

const Buttom = () => (
  <Botao href="https://wa.link/xveu6p">
    {' '}
    <img src={whatsapp} alt="" />
    Fale Conosco
  </Botao>
)

export default Buttom
