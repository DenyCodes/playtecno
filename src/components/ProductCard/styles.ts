import { styled } from 'styled-components'

export const Card = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: 316px;
  height: 160px;
  margin: 25px;
  padding-top: 62px;
  @media (max-width: 1200px) {
    width: 90%;
    margin-bottom: 150px;
    gap: 20px;
  }
`
export const Titulo = styled.h1`
  color: #1d1340;
  font-family: Prompt;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px; /* 110% */
`
export const Descricao = styled.p`
  color: var(--524F59, #524f59);
  text-align: center;
  font-family: Prompt;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px; /* 146.667% */
`
export const Images = styled.div`
  border-radius: 54px;
  background: var(--524F59, #524f59);
  display: flex;
  width: 53px;
  height: 52px;
  padding: 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
`
