import { styled } from 'styled-components'
import { theme } from '../../styles/theme'

export const Cards = styled.div`
  background-color: ${({ theme }) => theme.cores.card};
  border-radius: 16px;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  margin-top: 2rem;
  transition: all 0.3s ease;

  h1 {
    font-size: 1.8rem;
    margin-bottom: 1.5rem;
    color: ${({ theme }) => theme.cores.texto};
  }

  .clientes-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 2rem;
    justify-items: center;
  }

  .cliente-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
      transform: translateY(-4px);
    }

    img {
      width: 150px;
      height: 100px;
      object-fit: contain;
      filter: grayscale(30%);
      transition: all 0.3s ease;
      border-radius: 12px;
      background: ${({ theme }) => theme.cores.fundo};
      padding: 0.5rem;

      &:hover {
        filter: grayscale(0);
        transform: scale(1.05);
      }
    }

    p {
      margin-top: 0.5rem;
      font-size: 0.95rem;
      color: ${({ theme }) => theme.cores.textoSecundario};
    }
  }
`
