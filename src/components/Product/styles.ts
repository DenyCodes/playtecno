import styled from 'styled-components'
import { cores } from '../../styles'

export const Cards = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: auto;
  gap: 10px; /* Espaçamento entre os itens */
  .Carda {
    align-items: center;
    grid-column: 2;
    @media (max-width: 1400px) {
      grid-column: 3;
    }
  }
`
export const Card = styled.li`
  width: 345px;
  height: 276px;
  flex-shrink: 0;
  background-color: ${cores.magenta};
  text-align: center;
  margin-right: 25px;
  border-radius: 4px;
  @media (max-width: 1400px) {
    align-items: center;
    grid-column: 3;
    gap: 24px;
  }
`
export const Carde = styled.div`
  width: 100%;
  text-align: center;
`
export const Span = styled.h1`
  margin-bottom: 64px;
  background-color: ${cores.branco};
  color: #000;
  font-family: Prompt;
  font-size: 30px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px; /* 73.333% */
  @media (max-width: 1400px) {
    text-align: center;
  }
`
export const Span2 = styled.span`
  color: var(--d-9-d-9-d-9, #6907f2);
  font-family: Prompt;
  font-size: 30px;
  font-style: normal;
  font-weight: 600;
  line-height: 22px;
`
export const Titulo = styled.h2`
  color: #1d1340;
  font-family: Prompt;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px; /* 110% */
`
export const Descricao = styled.p`
  color: #524f59;
  text-align: center;
  font-family: Prompt;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px; /* 106.667% */
  padding-top: 23px;
`
export const LogoCard = styled.image`
  color: #524f59;
  text-align: center;
  font-family: Prompt;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px; /* 106.667% */
  margin-left: 136px;
  margin-top: 30px;
  display: flex;
`
export const Botao = styled.a`
  color: #6907f2;
  text-align: center;
  font-family: Prompt;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px; /* 146.667% */
  text-decoration: none;
`
export const Section = styled.section`
  padding-top: 86px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
