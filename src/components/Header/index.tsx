import React, { useState, useEffect } from 'react'
import {
  BarraUP,
  H1,
  H2,
  HeaderBar,
  Li,
  NavBar,
  Ul,
  LinkStyled,
  LinkRef
} from './styles'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)

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
        <H1>Fale conosco (21) 9999-9999 | playtecno@outlook.com.br</H1>
      </BarraUP>
      <NavBar className={isScrolled ? 'scrolled' : ''}>
        <H2>PlayTecno</H2>
        <Ul>
          <Li>
            <LinkRef href="#">Inicio</LinkRef>
          </Li>
          <Li>
            <LinkStyled href="#">Serviços</LinkStyled>
          </Li>
          <Li>
            <LinkStyled href="#">Sobre Nós</LinkStyled>
          </Li>
          <Li className="Cta">
            <LinkStyled className="Cta" href="https://wa.link/ozj877">
              Fale Conosco
            </LinkStyled>
          </Li>
        </Ul>
      </NavBar>
    </HeaderBar>
  )
}

export default Header
