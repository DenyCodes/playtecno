import { styled, keyframes } from 'styled-components'

const scroll = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`

export const Card = styled.div`
  background-color: ${({ theme }) => theme.cores.card};
  border-radius: 16px;
  padding: 3rem 1rem;
  text-align: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  margin-top: 2rem;
  overflow: hidden;

  h1 {
    font-size: 2rem;
    margin-bottom: 2rem;
    color: ${({ theme }) => theme.cores.preto};
  }
`

export const Carousel = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  display: flex;
  justify-content: center;
`

export const CarouselTrack = styled.div`
  display: flex;
  gap: 3rem;
  animation: ${scroll} 25s linear infinite;
  width: max-content;

  &:hover {
    animation-play-state: paused;
  }
`

export const ClienteItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 200px;
  transition: transform 0.3s ease;

  img {
    width: 500px;
    height: 350px;
    object-fit: contain;
    filter: grayscale(40%);
    border-radius: 12px;
    background: ${({ theme }) => theme.cores.fundo};
    padding: 1rem;
    transition: all 0.3s ease;

    &:hover {
      filter: grayscale(0);
      transform: scale(1.1);
    }
  }

  p {
    margin-top: 0.8rem;
    font-size: 1rem;
    color: ${({ theme }) => theme.cores.textoSecundario};
  }
`
