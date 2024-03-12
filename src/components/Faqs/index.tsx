import {
  Action,
  Botao,
  Card,
  Pergunta,
  Quebra,
  Resposta,
  Section,
  Titulo,
  UList
} from './styles'
import GroupImg from '../../assets/images/Avatar group.svg'
import whatsapp from '../../assets/images/whatsapp.svg'
import { useState } from 'react'
import icon from '../../assets/images/Icon.png'
import icon2 from '../../assets/images/Icon2.png'
const Faqs = () => {
  const [isClick, SetClick] = useState(false)
  const [isClick2, SetClick2] = useState(false)
  const [isClick3, SetClick3] = useState(false)
  const [isClick4, SetClick4] = useState(false)
  const [isClick5, SetClick5] = useState(false)
  const [iconeClicado, SeticoneClicado] = useState(false)
  const [iconeClicado2, SeticoneClicado2] = useState(false)
  const [iconeClicado3, SeticoneClicado3] = useState(false)
  const [iconeClicado4, SeticoneClicado4] = useState(false)
  const [iconeClicado5, SeticoneClicado5] = useState(false)

  const MostrarSection = () => {
    SetClick(!isClick)
  }
  const MostrarSection2 = () => {
    SetClick2(!isClick2)
  }
  const MostrarSection3 = () => {
    SetClick3(!isClick3)
  }
  const MostrarSection4 = () => {
    SetClick4(!isClick4)
  }
  const MostrarSection5 = () => {
    SetClick5(!isClick5)
  }
  const toggleIcon = () => {
    SeticoneClicado(!iconeClicado)
  }
  const toggleIcon2 = () => {
    SeticoneClicado2(!iconeClicado2)
  }
  const toggleIcon3 = () => {
    SeticoneClicado3(!iconeClicado3)
  }
  const toggleIcon4 = () => {
    SeticoneClicado4(!iconeClicado4)
  }
  const toggleIcon5 = () => {
    SeticoneClicado5(!iconeClicado5)
  }

  return (
    <Section>
      <Titulo>Perguntas frequentes</Titulo>
      <UList>
        <li>
          <Pergunta>
            Quais serviços sua empresa oferece?
            <Action
              onClick={() => {
                MostrarSection()
                toggleIcon()
              }}
            >
              <img src={iconeClicado ? icon : icon2} alt="Ícone" />
            </Action>
          </Pergunta>
          <Resposta visible={isClick}>
            Nós oferecemos serviços de desenvolvimento de sites personalizados e
            aplicativos mobile para diversas plataformas, incluindo iOS e
            Android.
          </Resposta>
        </li>
        <Quebra />
        <li>
          <Pergunta>
            Qual é o processo de desenvolvimento que sua empresa segue?
            <Action
              onClick={() => {
                MostrarSection2()
                toggleIcon2()
              }}
            >
              <img src={iconeClicado2 ? icon : icon2} alt="Ícone" />
            </Action>
          </Pergunta>
          <Resposta visible={isClick2}>
            Nosso processo de desenvolvimento é dividido em várias etapas,
            incluindo consulta inicial, análise de requisitos, design,
            desenvolvimento, teste e implementação.
          </Resposta>
        </li>
        <Quebra />
        <li>
          <Pergunta>
            Vocês desenvolvem tanto para iOS quanto para Android?
            <Action
              onClick={() => {
                MostrarSection3()
                toggleIcon3()
              }}
            >
              <img src={iconeClicado3 ? icon : icon2} alt="Ícone" />
            </Action>
          </Pergunta>
          <Resposta visible={isClick3}>
            Sim, nossa equipe de desenvolvimento é capaz de criar aplicativos
            para ambas as plataformas, iOS e Android, garantindo uma presença
            abrangente em dispositivos móveis.
          </Resposta>
        </li>
        <Quebra />
        <li>
          <Pergunta>
            Vocês oferecem serviços de manutenção e atualização para os sites e
            aplicativos desenvolvidos por vocês?
            <Action
              onClick={() => {
                MostrarSection4()
                toggleIcon4()
              }}
            >
              <img src={iconeClicado4 ? icon : icon2} alt="Ícone" />
            </Action>
          </Pergunta>
          <Resposta visible={isClick4}>
            Sim, nós oferecemos serviços de manutenção contínua, suporte técnico
            e atualizações para garantir que seu site ou aplicativo permaneça
            funcional e relevante ao longo do tempo.
          </Resposta>
        </li>
        <Quebra />
        <li>
          <Pergunta>
            Qual é o tempo médio de desenvolvimento para um site ou aplicativo
            mobile?
            <Action
              onClick={() => {
                MostrarSection5()
                toggleIcon5()
              }}
            >
              <img src={iconeClicado5 ? icon : icon2} alt="Ícone" />
            </Action>
          </Pergunta>
          <Resposta visible={isClick5}>
            O tempo de desenvolvimento varia dependendo da complexidade do
            projeto. Projetos simples podem levar algumas semanas, enquanto
            projetos mais complexos podem levar alguns meses para serem
            concluídos.
          </Resposta>
        </li>
        <Quebra />
      </UList>
      <Card>
        <div>
          <img src={GroupImg} />
        </div>
        <h2>Ainda com dúvidas?</h2>
        <p>
          Não consegue achar o que procura? Por favor, entre em contato conosco!
        </p>
        <Botao href="https://wa.link/ozj877">
          <img src={whatsapp} />
          Fale Conosco
        </Botao>
      </Card>
    </Section>
  )
}
export default Faqs
