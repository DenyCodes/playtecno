import styled from 'styled-components'

export const BannerSection = styled.section`
  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: flex-start;
  }
`

export const Imagem = styled.div`
  height: 470px;
  background-size: cover;
  display: block;
  @media (max-width: 1024px) {
    display: block;
    width: 100%;
  }
`
export const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 140px 140px;
  margin-left: 250px;
  @media (max-width: 1400px) {
    display: flex;
    flex-direction: column;
    margin-left: 0;
    width: 100%;
    padding: 80px 20px;
  }
`

export const H3 = styled.h1`
  color: #fff;
  font-family: Prompt;
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
  width: 460px;
  height: 60px;
  @media (max-width: 1400px) {
    line-height: 30px;
    width: 99%;
  }
`
export const Paragrafo = styled.p`
  padding-top: 32px;
  width: 600px;
  height: 60px;
  color: #1d1340;
  font-family: Prompt;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px; /* 110% */
  @media (max-width: 1024px) {
    width: 100%;
    padding-top: 60px;
  }
`
export const Botao = styled.div`
  cursor: pointer;
  display: inline-flex;
  padding: 10px 20px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 8px;
  background: #6907f2;
  color: #fff;
  font-family: Prompt;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 120% */
  margin-top: 32px;
  @media (max-width: 1280px) {
    position: relative;
    margin-top: 100px;
  }
`
export const Mockup = styled.div`
  position: absolute;
  padding-left: 1151px;
  @media (max-width: 1024px) {
    margin-left: 120px;
    margin-top: 150px;
    width: 80%;
    padding: 80px 20px;
    display: flex;
    justify-content: flex-end;
  }
  img {
    @media (max-width: 1024px) {
      width: 80%;
    }
  }
`
