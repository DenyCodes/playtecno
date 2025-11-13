import React, { useState, useEffect } from 'react'

import home from '../../assets/images/home-02.svg'
import tool from '../../assets/images/tool-02.svg'
import users from '../../assets/images/users-03.svg'
import wwww from '../../assets/images/worldw.svg'
import frame1 from '../../assets/images/servidor.svg'
import frame2 from '../../assets/images/ideia.svg'
import frame3 from '../../assets/images/aplicativo-movel 1.svg'

import {
  BarraUP,
  H1,
  H2,
  HeaderBar,
  Li,
  NavBar,
  Ul,
  LinkStyled,
  LinkRef,
  Div,
  Button,
  Imageico
} from './styles'
import Buttom from '../Buttom'
import { useThemeContext } from '../../contexts/ThemeContext'

const Header = () => {
  const [ShowDropDown, SetDropDown] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { isDark, toggleTheme } = useThemeContext()

  const OnClick = () => SetDropDown(!ShowDropDown)

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY
      setIsScrolled(position > 0) // Se a posição de rolagem for maior que 0, define isScrolled como true
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <HeaderBar>
      <BarraUP>
        <H1>Fale conosco | playtecno@outlook.com.br</H1>
      </BarraUP>
      <NavBar className={isScrolled ? 'scrolled' : ''}>
        <button onClick={toggleTheme}>{isDark ? '🌙' : '☀️'}</button>
        <H2>PlayTecno</H2>
        <Ul>
          <img src={home} />
          <Li>
            <LinkRef href="/" className="Alinhed">
              Inicio
            </LinkRef>
          </Li>
          <Li className="Cta">
            <Buttom />
          </Li>
        </Ul>
      </NavBar>
    </HeaderBar>
  )
}

export default Header
