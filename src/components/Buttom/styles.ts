import { styled } from 'styled-components'
import { cores } from '../../styles'

export const Botao = styled.a`
  text-decoration: none;
  margin: 2px;
  transition: all 0.3s ease;
  cursor: pointer;
  display: inline-flex;
  padding: 10px 20px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.cores.up};
  color: #fff;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 120% */
  @media (max-width: 720px) {
    position: relative;
    width: 50%;
    height: auto;
  }
`
