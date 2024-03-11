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
`
export const Container = styled.div`
width: 100%;
max-width: 1920px;
@media (max-width: 1024px) {
  width: 100%;

`
