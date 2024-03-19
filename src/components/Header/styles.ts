import styled from 'styled-components'
import { cores } from '../../styles'

export const HeaderBar = styled.header`
  color: ${cores.preto};
  text-decoration: none;
  display: flex;
  flex-direction: column;
`
export const BarraUP = styled.nav`
  background-color: ${cores.roxo};
  padding: 15px;
  color: ${cores.branco};
  width: 100%;
  display: flex;
`
export const NavBar = styled.div`
padding: 16px;
align-items: center;
display: flex;
justify-content: space-evenly;
  background-color: ${cores.branco};
&.scrolled {
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  right: 0;
  padding: 18px;
  background-color: ${cores.branco};
  @media (max-width: 1280px) {
    width: 80%;
    &.scrolled {
      position: relative;
  }
`
export const H1 = styled.h1`
  font-size: 11px;
  margin-left: 370px;
  @media (max-width: 1400px) {
    margin-left: 0;
  }
`
export const H2 = styled.h2`
  font-family: Prompt;
  font-size: 25px;
  font-style: normal;
  font-weight: 800;
  line-height: 24px; /* 96% */
  background: radial-gradient(
    100% 100% at 0% 50%,
    #fe7966 0%,
    #f84e8a 24%,
    #ea3cab 57%,
    #ef42b8 100%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  @media (max-width: 1400px) {
    display: none;
  }
`
export const Ul = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  @media (max-width: 1400px) {
    padding-left: 0;
  }
`
export const Li = styled.li`
  @media (max-width: 1400) {
    margin: 0;
    padding: 0;
  }
  .Cta {
    text-decoration: none;
    color: #fff;
    font-family: Inter;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 22px; /* 110% */
    padding: 10px 20px;
    border-radius: 8px;
    background-color: ${cores.roxo};
    @media (max-width: 1400px) {
      display: none;
      margin: 10px;
      padding: 10px;
    }
  }
`
export const LinkStyled = styled.a`
  text-decoration: none;
  list-style: none;
  color: ${cores.preto};
  font-size: 14px;
  margin: 34px;
  color: #000;
  font-family: Prompt;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px; /* 137.5% */
  @media (max-width: 1200px) {
    margin: 20px;
  }
  .Cta {
    background-color #000000;
    width: 127px;
    height: 22px;
  }
`
export const LinkRef = styled.a`
  text-decoration: none;
  color: var(--6907F2, #6907f2);
  font-family: Prompt;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px; /* 137.5% */
  margin-right: 50px;
  @media (max-width: 1400px) {
    padding: 0;
  }
  .Cta {
    padding-left: 20px;
    margin-left: 40px;
  }
`
export const Div = styled.div`
cursor: pointer;
align-items: center;
text-decoration: none;
  color: #000;
  font-family: Prompt;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px; /* 110% */
  padding: 10px 20px;
  border-radius: 8px;
  @media (max-width: 1400px) {
    display: none;
    margin: 10px;
    padding: 10px;
  }
  .dropdown {
    position: relative;
    display: inline-block;
  }
  .dropdown-menu {
    margin-left: -70px;
    list-style: none;
    z-index: 1;
    background-color: #fff;
    position: absolute;
    text-decoration: none;
    color: #000;
    font-family: Prompt;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 22px; /* 110% */
    border-radius: 8px;
    li {
      text {
        color: #fff;
      }
      &:hover {
        background-color: ${cores.roxo}
      }
      margin: 0;
      display: flex;
      width: 180px;
      height: 42px;
      padding: 10px;
      align-items: center;
      gap: 10px;
      flex-shrink: 0;
      border-bottom: 1px solid #D3D3D3;
background: #FFF;
color: #000;
font-family: Inter;
font-size: 13px;
font-style: normal;
font-weight: 400;
line-height: 22px; /* 169.231% */
    }
    @media (max-width: 1400px) {
      display: none;
      margin: 10px;
      padding: 10px;
  }
  dropdown-btn {
    text-decoration: none;
    color: #fff;
    font-family: Prompt;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 22px; /* 110% */
    padding: 10px 20px;
    border-radius: 8px;
    background-color: ${cores.roxo};
    @media (max-width: 1400px) {
      display: none;
      margin: 10px;
      padding: 10px;
  }
`
export const Button = styled.div`
font-family: Prompt;
.dropdown-btn {
  text-decoration: none;
  color: #fff;
  font-family: Prompt;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px; /* 110% */
  padding: 10px 20px;
  border-radius: 8px;
  background-color: #000000;
  @media (max-width: 1400px) {
    display: none;
    margin: 10px;
    padding: 10px;
`
