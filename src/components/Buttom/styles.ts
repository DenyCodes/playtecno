import { styled } from 'styled-components'

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
  @media (max-width: 720px) {
    position: relative;
    width: 80%;
    height: auto;
  }
`
