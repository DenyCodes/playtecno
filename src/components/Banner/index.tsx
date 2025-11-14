import bannerDark from '../../assets/images/banner.svg'
import bannerLight from '../../assets/images/banner2.png'

import { BannerSection, Botao, Mockup, Paragrafo } from './styles'
import { Div, H3, Imagem } from './styles'
import main from '../../assets/images/Dell XPS.png'
import { useThemeContext } from '../../contexts/ThemeContext'


const Banner = () => {
  const { isDark } = useThemeContext()

  const bannerAtual = isDark ? bannerDark : bannerLight
  return (
    <BannerSection>
      <Mockup>
        <img alt="Imagem principal do banner" src={main} />
      </Mockup>
      <Imagem style={{ backgroundImage: `url(${bannerAtual})` }}>
        <Div>
          <H3>Crie seu negócio on-line em apenas um lugar</H3>
          <Paragrafo>Seu negócio do seu jeito!</Paragrafo>
          <Botao href="https://wa.link/s46js8">
            {' '}
            Fale Conosco
          </Botao>
        </Div>
      </Imagem>
    </BannerSection>
  )
}

export default Banner
