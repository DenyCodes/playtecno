import { styled } from 'styled-components'

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
  padding-top: 96px;
  margin-bottom: 40px;
  transition: all 0.3s ease;
  @media (max-width: 1200px) {
    width: 100%;
    padding: 60px 16px;
  }
`

export const Titulo = styled.h1`
  color: var(--Gray-900, #101828);
  text-align: center;
  font-family: Inter;
  font-size: 36px;
  font-weight: 600;
  line-height: 44px;
  letter-spacing: -0.72px;
  transition: all 0.3s ease;
`

export const UList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 32px;
  width: 800px;
  padding: 0 32px;
  transition: all 0.3s ease;
  @media (max-width: 1200px) {
    width: 100%;
    padding: 0;
  }
`

export const Pergunta = styled.div`
  color: var(--Gray-900, #101828);
  font-family: Inter;
  font-size: 18px;
  font-weight: 500;
  line-height: 28px;
  position: relative;
  padding-right: 40px;
  transition: all 0.3s ease;
`

export const Resposta = styled.div<{ visible: boolean }>`
  display: ${(props) => (props.visible ? 'flex' : 'none')};
  color: var(--Gray-500, #667085);
  font-family: Inter;
  font-size: 16px;
  line-height: 24px;
  margin-top: 8px;
  transition: all 0.3s ease;
`

export const Quebra = styled.hr`
  border: none;
  border-top: 1px solid #e5e7eb;
  margin: 8px 0;
`

export const Card = styled.section`
  color: ${({ theme }) => theme.cores.pb};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;
  width: 100%;
  max-width: 1125px;
  padding: 32px;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.cores.fundo};
  transition: all 0.3s ease;

  h2 {
    color: #000;
    transition: all 0.3s ease;
  }

  @media (max-width: 1200px) {
    width: 90%;
  }
`

export const Action = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  cursor: pointer;
  img {
    filter: ${({ theme }) => theme.cores.iconFilter};
    transition: filter 0.3s ease;
  }
`
