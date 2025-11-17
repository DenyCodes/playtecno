import bannerDark from '../../assets/images/capa.png'
import bannerLight from '../../assets/images/capa.png'

import { BannerSection, Botao, Paragrafo } from './styles'
import { Div, H3, Imagem } from './styles'
import { useThemeContext } from '../../contexts/ThemeContext'


const Banner = () => {
  const { isDark } = useThemeContext()

  const bannerAtual = isDark ? bannerDark : bannerLight
  return (
    <BannerSection>
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
