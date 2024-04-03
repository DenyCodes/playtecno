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
          <H3>Crie seu negócio on-line em apenas um lugar</H3>
          <Paragrafo>Seu negócio do seu jeito!</Paragrafo>
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
