import type { FunctionComponent } from 'react'
import {
  Section,
  Nav,
  CardSection,
  Card,
  Icon,
  Caixabotao,
  Botao
} from './styles'

import zap from '../../assets/images/zap.svg'
import layer from '../../assets/images/2-layers.svg'
import layer2 from '../../assets/images/3-layers.svg'
import checkbox from '../../assets/images/Check icon.svg'

const Frame: FunctionComponent = () => {
  const handleContratar = () => {
    window.open('https://wa.link/xveu6p', '_blank')
  }

  return (
    <Section>
      <Nav>
        <h1>Planos e Preços</h1>
        <h2>Desenvolvimento de Sites Profissionais</h2>
        <p>
          Escolha o plano ideal para o seu negócio. Todos incluem suporte
          técnico, hospedagem segura e design responsivo.
        </p>
      </Nav>

      <CardSection>
        {/* Plano Básico */}
        <Card>
          <Icon>
            <img src={zap} alt="Ícone plano básico" />
          </Icon>
          <ul>
            <li>
              <img src={checkbox} alt="" />
              <span>LadingPage</span>
            </li>
            <li>
              <img src={checkbox} alt="" />
              <span>Design responsivo (mobile e desktop)</span>
            </li>
            <li>
              <img src={checkbox} alt="" />
              <span>Formulário de contato integrado</span>
            </li>
            <li>
              <img src={checkbox} alt="" />
              <span>Integração com redes sociais</span>
            </li>
            <li>
              <img src={checkbox} alt="" />
              <span>Suporte técnico por e-mail</span>
            </li>
          </ul>

          <Caixabotao>
            <Botao onClick={handleContratar}>Contratar Plano</Botao>
          </Caixabotao>
        </Card>

        {/* Plano Profissional */}
        <Card style={{ background: '#f4ebff' }}>
          <Icon>
            <img src={layer} alt="Ícone plano plus" />
          </Icon>
          <ul>
            <li>
              <img src={checkbox} alt="" />
              <span>Site institucional completo com até 6 páginas</span>
            </li>
            <li>
              <img src={checkbox} alt="" />
              <span>Integração com WhatsApp e Google Maps</span>
            </li>
            <li>
              <img src={checkbox} alt="" />
              <span>Otimização SEO inicial</span>
            </li>
            <li>
              <img src={checkbox} alt="" />
              <span>Hospedagem e suporte 24h</span>
            </li>
          </ul>

          <Caixabotao>
            <Botao onClick={handleContratar}>Contratar Plano</Botao>
          </Caixabotao>
        </Card>

        {/* Plano Premium */}
        <Card>
          <Icon>
            <img src={layer2} alt="Ícone plano premium" />
          </Icon>
          <ul>
            <li>
              <img src={checkbox} alt="" />
              <span>Site personalizado com layout exclusivo</span>
            </li>
            <li>
              <img src={checkbox} alt="" />
              <span>Loja, Eccomerces</span>
            </li>
            <li>
              <img src={checkbox} alt="" />
              <span>SEO completo e Google Analytics</span>
            </li>
            <li>
              <img src={checkbox} alt="" />
              <span>Suporte técnico prioritário</span>
            </li>
          </ul>

          <Caixabotao>
            <Botao onClick={handleContratar}>Contratar Plano</Botao>
          </Caixabotao>
        </Card>
      </CardSection>
    </Section>
  )
}

export default Frame
