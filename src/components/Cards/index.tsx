import { Botao, Caixabotao } from '../Planos/styles'
import zap from '../../assets/images/zap.svg'
import checkicon from '../../assets/images/Check icon.svg'

const Card = () => (
  <div>
    <aside>
      <div>
        <img src={zap} />
      </div>
      <h3>Plano Básico</h3>
      <h4>Gratuito</h4>
      <ul>
        <li>
          <td>
            <img src={checkicon} />
            Gratuito para testar por 30 dias
          </td>
        </li>
        <li>
          <td>
            <img src={checkicon} />
            Acesso a loja online
          </td>
        </li>
        <li>
          <td>
            <img src={checkicon} />
            Suporte 24H
          </td>
        </li>
      </ul>
      <Caixabotao>
        <Botao>Começar agora</Botao>
      </Caixabotao>
    </aside>
  </div>
)
export default Card
