import {
  Action,
  Card,
  Pergunta,
  Quebra,
  Resposta,
  Section,
  Titulo,
  UList
} from './styles'
import GroupImg from '../../assets/images/Avatar group.svg'
import icon from '../../assets/images/Icon.png'
import icon2 from '../../assets/images/Icon2.png'
import Buttom from '../Buttom'
import { useState } from 'react'

const faqs = [
  {
    id: 1,
    pergunta: 'Quais serviços sua empresa oferece?',
    resposta:
      'Nós oferecemos serviços de desenvolvimento de sites completos e personalizados, em página única, com formulários, simuladores e seções para cada produto, além de aplicativos mobile para iOS e Android.'
  },
  {
    id: 2,
    pergunta:
      'Vocês oferecem serviços de manutenção e atualização para os sites e aplicativos desenvolvidos por vocês?',
    resposta:
      'Sim, oferecemos serviços de manutenção e alterações futuras conforme sua necessidade.'
  },
  {
    id: 3,
    pergunta:
      'Qual é o tempo médio de desenvolvimento para um site ou aplicativo mobile?',
    resposta:
      'O prazo de entrega pode variar de acordo com o modelo contratado, com média de 14 a 28 dias úteis.'
  },
  {
    id: 4,
    pergunta: 'Informações do Site',
    resposta:
      'As informações fornecidas para a criação do site institucional e/ou Landing Page são de responsabilidade do contratante.'
  },
  {
    id: 5,
    pergunta: 'Alterações',
    resposta:
      'Após a apresentação da prévia, estão autorizadas apenas duas rodadas de alterações em até 7 dias corridos. Após isso, novas alterações terão custo adicional mediante nova proposta comercial.'
  },
  {
    id: 6,
    pergunta: 'Serviço de Domínio do Site ou Landing Page',
    resposta:
      'O domínio é oferecido como cortesia no primeiro ano. Caso o cliente já possua domínio, o valor não será abatido nem convertido em outro produto.'
  },
  {
    id: 7,
    pergunta: 'Outras ferramentas',
    resposta:
      'Não estão inclusos serviços como redes sociais, chatbot, chat online, e-mails adicionais, aumento de capacidade, painel dedicado e afins.'
  }
]

const Faqs = () => {
  const [active, setActive] = useState<number | null>(null)

  const toggle = (id: number) => {
    setActive(active === id ? null : id)
  }

  return (
    <Section>
      <Titulo>Perguntas frequentes</Titulo>
      <UList>
        {faqs.map((item) => (
          <li key={item.id}>
            <Pergunta>
              {item.pergunta}
              <Action onClick={() => toggle(item.id)}>
                <img src={active === item.id ? icon : icon2} alt="Ícone" />
              </Action>
            </Pergunta>
            <Resposta visible={active === item.id}>{item.resposta}</Resposta>
            <Quebra />
          </li>
        ))}
      </UList>

      <Card>
        <div>
          <img src={GroupImg} alt="Grupo de pessoas" />
        </div>
        <h2>Ainda com dúvidas?</h2>
        <p className="paragrafo">
          Não consegue achar o que procura? Por favor, entre em contato conosco!
        </p>
        <Buttom />
      </Card>
    </Section>
  )
}

export default Faqs
