import { styled } from 'styled-components'

export const Div = styled.div`
  background-color: ${({ theme }) => theme.cores.card};
  border-radius: 20px;
  padding: 60px 40px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: background-color 0.3s, color 0.3s;
`

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 50px;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
`

export const Subtitulo = styled.h1`
  color: ${({ theme }) => theme.cores.texto};

  font-size: 2rem;
  font-weight: 500;
  line-height: 1.3;
  max-width: 900px;

  span {
    color: ${({ theme }) => theme.cores.primaria};
    font-weight: 600;
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
    padding: 0 20px;
  }
`

export const Products = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

export const List = styled.ul`
  color: ${({ theme }) => theme.cores.texto};

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
  width: 100%;
  max-width: 1200px;
  padding: 0;
  list-style: none;
  transition: all 0.3s ease;

  li {
    display: flex;
    justify-content: center;
  }
`
