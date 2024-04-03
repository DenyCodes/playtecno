import styled, { createGlobalStyle } from 'styled-components'

export const cores = {
  roxo: '#6907F2',
  preto: '#000000',
  branco: '#FFFFFF',
  magenta: '#5A42F233'
}

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
  }

  body {
    background-color: ${cores.branco};
    color: ${cores.branco};
    overflow-x: hidden;
    width: 100%;
    margin: 0;
    line-height: normal;
`
export const Container = styled.div`
@media (max-width: 768px) {
  width: 100%;
  height: auto;
  @media (min-width: 700px) {
    width: 80%;
  }
`
