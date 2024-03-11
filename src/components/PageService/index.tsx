import {
  FaleConosco,
  Image6,
  Lista,
  ListaUl,
  Page,
  Play,
  Titulo
} from './styles'
import Imagem6 from '../../assets/images/4758689-removebg-preview 1.svg'
import play from '../../assets/images/play.svg'
import whatsapp from '../../assets/images/whatsapp.svg'
const PageService = () => (
  <Page>
    <div>
      <Titulo>Seu site de onde você estiver</Titulo>
      <ListaUl>
        <Lista>
          <Play>
            <img src={play} />
          </Play>
          Gerencie seu site de qualquer lugar utilizando um computador,
          smartphone ou tablet.
        </Lista>
        <Lista>
          <Play>
            <img src={play} />
          </Play>
          Proporcionamos uma experiência de navegação simples e intuitiva, tanto
          para você quanto para seu cliente.
        </Lista>
        <Lista>
          <Play>
            <img src={play} />
          </Play>
          Estatísticas mostram que 80% dos usuários acessam e pesquisam empresas
          através de dispositivos móveis.
        </Lista>
      </ListaUl>
      <Image6>
        <img src={Imagem6} />
      </Image6>
      <FaleConosco className="Cta">
        <img src={whatsapp} alt="" />
        Fale Conosco
      </FaleConosco>
    </div>
  </Page>
)

export default PageService
