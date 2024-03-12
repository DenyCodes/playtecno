import styled from 'styled-components'
import { Quebra } from '../Faqs/styles'

export const Foot = styled.section`
  background-color: #f0f0f0;
`
export const Titulo = styled.h2`
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
`
export const Descricao = styled.p`
  color: var(--1C1340, #1c1340);
  font-family: Prompt;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 15px; /* 75% */
  padding-top: 14px;
`
export const Secs = styled.a`
  color: var(--524F59, #524f59);
  font-family: Prompt;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 15px; /* 75% */
`
export const Rodape = styled.aside`
  height: 100px;
  padding: 32px 714px 32px 183px;
  flex-shrink: 0;
  background: #060606;
  @media (max-width: 840px) {
    padding: 0;
    margin-top: 20px;
    align-items: center;
  }
`
export const TituloRodape = styled.h3`
  color: #fff;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-left: 210px;
  @media (max-width: 840px) {
    width: 90%;
    margin: 10px;
    padding-top: 30px;
  }
`
export const Layer = styled.div`
  display: flex;
  flex-direction: column;
  align-self: stretch;
  position: relative;
  margin-left: 400px;
  padding-top: 50px;
  @media (max-width: 840px) {
    align-items: center;
    gap: 20px;
    margin: 0;
    padding-top: 30px;
  }
`
export const FaleConosco1 = styled.aside`
margin: 0 10px;
text-align: center;
flex: 0 0 auto; /*
`
export const QuebraLinha = styled.hr`
  margin-left: 400px;
  margin-right: 400px;
`
export const Layer2 = styled.div`
  display: flex;
  flex-direction: column;
  align-self: stretch;
  position: relative;
  margin-left: 1000px;
  top: -50px;
  @media (max-width: 840px) {
    align-items: center;
    margin: 0;
    top: 0;
  }
`
export const Titulo2 = styled.h3`
  color: var(--524F59, #524f59);
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 15px; /* 75% */
  @media (max-width: 840px) {
    display: none;
  }
`
export const Descricao2 = styled.p`
  color: var(--1C1340, #1c1340);
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 15px; /* 75% */
  padding-top: 15px;
`
export const Titulo4 = styled.h4`
  color: var(--524F59, #524f59);
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 15px; /* 75% */
  margin-left: 400px;
  padding-top: 30px;
  margin-bottom: 130px;
  @media (max-width: 840px) {
    display: none;
    margin: 0;
    padding: 0;
  }
`
