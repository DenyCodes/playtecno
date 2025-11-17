import React, { useState, useEffect } from 'react'

import {
  BarraUP,
  H1,
  HeaderBar,
  NavBar,
} from './styles'
import Buttom from '../Buttom'
import { useThemeContext } from '../../contexts/ThemeContext'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const { isDark, toggleTheme } = useThemeContext()


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
            <Buttom />
      </NavBar>
    </HeaderBar>
  )
}

export default Header
