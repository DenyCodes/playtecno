import { Card, CardList, H1, H2, Paragrafo, Section } from './styles'
import phone from '../../assets/images/pag2/headphones-3 1.svg'

const StepUser = () => (
  <Section>
    <nav>
      <H1>Cada etapa centrada no usuário</H1>
      <Paragrafo>Tudo para o sucesso do seu site em um só lugar</Paragrafo>
    </nav>
    <CardList>
      <Card>
        <img src={phone} alt="" />
        <H2>Suporte</H2>
        <p>Todo nosso time de suporte em sua disposição 24 horas</p>
      </Card>
      <Card>
        <img src={phone} alt="" />
        <H2>Suporte</H2>
        <p>Todo nosso time de suporte em sua disposição 24 horas</p>
      </Card>
      <Card>
        <img src={phone} alt="" />
        <H2>Suporte</H2>
        <p>Todo nosso time de suporte em sua disposição 24 horas</p>
      </Card>
      <Card>
        <img src={phone} alt="" />
        <H2>Suporte</H2>
        <p>Todo nosso time de suporte em sua disposição 24 horas</p>
      </Card>
      <Card>
        <img src={phone} alt="" />
        <H2>Suporte</H2>
        <p>Todo nosso time de suporte em sua disposição 24 horas</p>
      </Card>
      <Card>
        <img src={phone} alt="" />
        <H2>Suporte</H2>
        <p>Todo nosso time de suporte em sua disposição 24 horas</p>
      </Card>
    </CardList>
  </Section>
)

export default StepUser
