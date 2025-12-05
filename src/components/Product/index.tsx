import { Container, Cards, Card, LogoCard } from './styles'
import WorldImg from '../../assets/images/worldw.svg'
import servidor from '../../assets/images/servidor.svg'
import ideia from '../../assets/images/ideia.svg'
import movel from '../../assets/images/aplicativo-movel 1.png'
import google from '../../assets/images/pesquisa 1.svg'
import mapa from '../../assets/images/mapa 1.svg'
const Product = () => {
  return (
    <Container>
      <h1>
        {' '}
        O jeito certo de impulsionar <span>o seu negócio!</span>{' '}
      </h1>{' '}
      <Cards>
        <Card>
          <LogoCard>
            <img src={movel} alt="Google" />
          </LogoCard>
          <h3>100% Customizavel</h3>
          <p>
            Seu site com logo, cores e informações de produtos e contatos da sua
            empresa, feito sob medida para você.
          </p>
        </Card>
        <Card>
          <LogoCard>
            <img src={google} alt="Google" />
          </LogoCard>
          <h3>Domínio grátis no 1º ano</h3>
          <p>
            Já entregamos seu site no ar. Após esse período, renovação de apenas
            R$150/ano.
          </p>
        </Card>
        <Card>
          <LogoCard>
            <img src={movel} alt="Google" />
          </LogoCard>
          <h3>WhatsApp e formulários integrados</h3>
          <p>
            Cards chamam no WhatsApp ou preenchem formulário, você recebe na
            hora
          </p>
        </Card>
        <Card>
          <LogoCard>
            <img src={WorldImg} alt="Google" />
          </LogoCard>
          <h3>Desenvolvimento de sites</h3>
          <p>Sites personalizados e responsivos para o seu negócio</p>
        </Card>
        <Card>
          <LogoCard>
            <img src={ideia} alt="Mapa" />
          </LogoCard>
          <h3>Identidade Visual</h3>
          <p>Transforme a sua marca em referência</p>
        </Card>
        <Card>
          <LogoCard>
            <img src={servidor} alt="Servidor" />
          </LogoCard>
          <h3>Infraestrutura Escalável</h3>
          <p>Servidores otimizados para performance e estabilidade.</p>
        </Card>
        <Card>
          <LogoCard>
            <img src={ideia} alt="Email" />
          </LogoCard>
          <h3>Pesquisas do Google</h3>
          <p>
            Destaque-se no Google com nosso serviço de SEO, apareça nas
            pesquisas!
          </p>
        </Card>
      </Cards>
    </Container>
  )
}

export default Product
