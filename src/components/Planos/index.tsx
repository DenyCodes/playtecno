import * as S from './styles'

import zap from '../../assets/images/zap.svg'
import layer from '../../assets/images/2-layers.svg'
import checkicon from '../../assets/images/Check icon.svg'
import Card from '../Cards'
import Cards from '../Cards'

const Planos = () => (
  <S.Section>
    <S.Nav>
      <h1>Conheça nossos planos</h1>
      <h2>Planos para todos os negócios</h2>
      <p>
        Preços simples e transparentes que crescem com você. Experimente
        qualquer plano gratuitamente por 30 dias.
      </p>
    </S.Nav>
    <S.CardSection>
      <S.Card>
        <Cards />
      </S.Card>
      <S.Card>
        <Cards />
      </S.Card>
      <S.Card>
        <Cards />
      </S.Card>
    </S.CardSection>
  </S.Section>
)

export default Planos
