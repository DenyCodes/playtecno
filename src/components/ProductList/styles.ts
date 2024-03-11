import { styled } from 'styled-components'

export const Products = styled.div`
  align-items: center;
  width: 316px;
  height: 160px;
  @media (max-width: 1400px) {
    width: 10%;
  }
`
export const List = styled.ul`
  margin-left: 350px;
  grid-template-columns: 1fr 1fr;
  display: grid;
  @media (max-width: 1400px) {
    margin-left: 80px;
    gap: 30px;
  }
`
export const Image1 = styled.div`
  margin-left: -500px;
  top: 600px;
  display: flex;
  position: relative;
  @media (max-width: 1020px) {
    margin: 0;
  }
`
export const Image2 = styled.div`
  position: relative;
  margin-left: 440px;
  top: 50px;
`
export const Image3 = styled.div`
  width: 50%;
  position: absolute;
  padding-top: 250px;
  margin-left: 250px;
  @media (max-width: 1020px) {
    display: none;
  }
`
export const Image4 = styled.div`
  padding-top: 123px;
  margin-left: 120px;
`
export const BolaImg = styled.div`
  position: absolute;
  margin-left: 1450px;
  top: 1560px;
`
export const Subtitulo = styled.h1`
  margin-left: 166px;
  margin-bottom: 166px;
  padding-top: 90px;
  width: 756px;
  height: 72px;
  color: #000;
  font-family: Prompt;
  font-size: 30px;
  font-style: normal;
  font-weight: 500;
  line-height: 36px; /* 120% */
  span {
    color: var(--d-9-d-9-d-9, #6907f2);
    font-family: Prompt;
    font-size: 30px;
    font-style: normal;
    font-weight: 500;
    line-height: 36px;
  }
  @media (max-width: 1400px) {
    width: 400px;
    margin-left: 100px;
    margin-bottom: 166px;
  }
`
export const Section = styled.section`
  display: grid;
  align-items: stretch;
  width: 1440px;
  height: 1100px;
  justify-content: space-around;
  @media (max-width: 1400px) {
    width: 90%;
    margin-bottom: 400px;
  }
`
