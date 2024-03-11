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
  align-content: space-around;
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
