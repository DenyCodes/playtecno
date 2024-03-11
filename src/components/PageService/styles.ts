import styled from 'styled-components'
import { cores } from '../../styles'

export const Page = styled.section`
  background: linear-gradient(112deg, #ded9fc 16.24%, #d4b5ff 62.81%);
  width: 100%;
  height: 768px;
  margin-top: 243px;
  position: relative;
`
export const Titulo = styled.h1`
  color: #1c1340;
  font-family: Prompt;
  font-size: 30px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 66.667% */
  padding-top: 69px;
  margin-left: 700px;
  @media (max-width: 1200px) {
    margin-left: 20px;
  }
`
export const Image6 = styled.div`
  margin-top: 65px;
  margin-left: 1050px;
  @media (max-width: 1200px) {
    margin-left: 0px;
    img {
      margin-left: 100px;
      padding-top: 390px;
      width: 200px;
    }
  }
`
export const Lista = styled.li`
  color: var(--524F59, #524f59);
  font-family: Prompt;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 100% */
  margin: 35px;
`
export const ListaUl = styled.ul`
  width: 500px;
  height: 500px;
  margin-left: 360px;
  list-style: none;
  padding-top: 130px;
  position: absolute;
  @media (max-width: 1200px) {
    margin-left: 0;
    padding-top: 0;
    width: 390px;
  }
`
export const FaleConosco = styled.div`
  cursor: pointer;
  display: inline-flex;
  padding: 10px 20px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 8px;
  background: #6907f2;
  margin-left: 860px;
  color: #fff;
  font-family: Prompt;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 120% */
  list-style: none;
  @media (max-width: 1200px) {
    margin-top: -300px;
    position: absolute;
    margin-left: 80px;
  }
`
export const Play = styled.aside`
  display: flex;
  position: absolute;
  margin-left: -30px;
  padding-top: 20px;
`
