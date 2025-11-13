import styled from 'styled-components'

export const Container = styled.section`
  padding: 80px 0;
  transition: all 0.3s ease;
  background-color: #fff;
  color: #000;
  transition: background-color 0.3s, color 0.3s;
  h1 {
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 60px;
    span {
      color: ${({ theme }) => theme.cores.span};
    }
  }
`

export const Cards = styled.div`
  transition: all 0.3s ease;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 32px;
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
`

export const Card = styled.div`
  background-color: ${({ theme }) => theme.cores.card};
  border-radius: 16px;
  padding: 30px;
  text-align: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  transition: background-color 0.3s, color 0.3s;

  h3 {
    color: ${({ theme }) => theme.cores.span};
    margin-bottom: 10px;
  }

  p {
    font-size: 14px;
    line-height: 1.6;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
  }
`

export const LogoCard = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 15px;

  img {
    width: 64px;
    height: 64px;
    transition: filter 0.3s ease;
    filter: ${({ theme }) => theme.cores.iconFilter};
  }
`
