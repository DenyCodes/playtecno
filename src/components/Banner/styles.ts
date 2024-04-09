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
  font-size: 48px;
  font-style: normal;
  font-weight: 700;
  line-height: 41px;
  width: 600px;
  @media (max-width: 1400px) {
    line-height: 30px;
    width: 99%;
  }
`
export const Paragrafo = styled.p`
  padding-top: 32px;
  width: 600px;
  height: 60px;
  color: #42307d;
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
export const Botao = styled.a`
  text-decoration: none;
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
  width: 474px;
  height: 486px;
  position: absolute;
  margin-left: 1000px;
  @media (max-width: 768px) {
    margin-left: 0;
    img {
      width: 50%;
      padding-top: 250px;
      margin-left: 150px;
    }
  }
`
