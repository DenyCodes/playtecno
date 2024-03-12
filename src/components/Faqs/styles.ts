import { styled } from 'styled-components'
import { cores } from '../../styles'

export const Section = styled.section`
  color: ${cores.preto};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
  align-self: stretch;
  position: relative;
  margin-bottom: 40px;
  padding-top: 96px;
  @media (max-width: 1200px) {
    width: 100%;
  }
`
export const Titulo = styled.h1`
  color: var(--Gray-900, #101828);
  text-align: center;
  font-family: Inter;
  font-size: 36px;
  font-style: normal;
  font-weight: 600;
  line-height: 44px; /* 122.222% */
  letter-spacing: -0.72px;
`
export const UList = styled.ul`
  list-style: none;
  display: flex;
  width: 800px;
  padding: 0px 32px;
  flex-direction: column;
  gap: 32px;
  @media (max-width: 1200px) {
    width: 100%;
    padding: 0;
    margin: 0;
  }
`
export const Pergunta = styled.div`
  color: var(--Gray-900, #101828);
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 28px; /* 155.556% */
  align-self: stretch;

  buttom {
    align-items: center;
    margin-top: 50px;
  }
`
export const Resposta = styled.div<{ visible: boolean }>`
  display: ${(props) => (props.visible ? 'flex' : 'none')};
  align-self: stretch;
  color: var(--Gray-500, #667085);
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 150% */
  style-list: none;
`
export const Quebra = styled.hr`
  padding: 0;
  margin: 0;
`
export const Card = styled.section`
  display: flex;
  width: 1125px;
  padding: 32px 300px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;
  border-radius: 16px;
  background: var(--Gray-50, #f9fafb);
  @media (max-width: 1200px) {
    width: 80%;
    padding: 0;
  }
`
export const Botao = styled.a`
  text-decoration: none;
  cursor: pointer;
  display: flex;
  padding: 10px 20px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 8px;
  background: #6907f2;
  color: #fff;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 120% */
`
export const Butt = styled.button`
  background-color: #000000;
`
export const Action = styled.div`
  position: absolute;
  margin-top: -25px;
  cursor: pointer;
  margin-left: 700px;
  @media (max-width: 1200px) {
    margin-left: 350px;
  }
`
