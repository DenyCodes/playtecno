import bannerimg from '../../assets/images/banner.svg'
import { BannerSection, Botao, Mockup, Paragrafo } from './styles'
import { Div, H3, Imagem } from './styles'
import whatsapp from '../../assets/images/whatsapp.svg'
import main from '../../assets/images/Group 3.svg'

const Banner = () => (
  <>
    <BannerSection>
      <Mockup>
        <img src={main} />
      </Mockup>
      <Imagem style={{ backgroundImage: `url(${bannerimg})` }}>
        <Div>
          <H3>Procurando por Especialistas em desenvolvimento de sites?</H3>
          <Paragrafo>
            Temos a solução para você que busca um site do seu jeito!
          </Paragrafo>
          <Botao href="https://wa.link/ozj877">
            {' '}
            <img src={whatsapp} alt="" />
            Fale Conosco
          </Botao>
        </Div>
      </Imagem>
    </BannerSection>
  </>
)

export default Banner
