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

const Header = () => {
  const [ShowDropDown, SetDropDown] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

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
        <H2>PlayTecno</H2>
        <Ul>
          <img src={home} />
          <Li>
            <LinkRef href="/home" className="Alinhed">
              Inicio
            </LinkRef>
          </Li>
          <Div className="dropdown">
            <div className="icoimages">
              <img src={tool} />
            </div>
            <Button className="dropdown-btn" onMouseEnter={OnClick}>
              Serviços
            </Button>
            {ShowDropDown && (
              <ul className="dropdown-menu">
                <li className="text">
                  {' '}
                  <Imageico src={wwww} />
                  Desenvolvimento de Sites
                </li>
                <li>
                  {' '}
                  <Imageico src={frame1} /> Hospedagem de Sites
                </li>
                <li>
                  {' '}
                  <Imageico src={frame2} />
                  Identidade de Visual
                </li>
                <li>
                  {' '}
                  <Imageico src={frame3} />
                  Desenvolvimento de App
                </li>
              </ul>
            )}
          </Div>
          <Li>
            <LinkStyled href="#" className="Alinhed">
              <div className="icoimages">
                <img src={users} />
              </div>
              Sobre Nós
            </LinkStyled>
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
