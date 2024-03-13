import { styled } from 'styled-components'

export const Section = styled.section`
  display: grid;
  align-items: stretch;
  width: auto;
  height: 894.124px;
  flex-shrink: 0;
  background: #d4b5ff;
  justify-content: space-evenly;
  flex-wrap: wrap;
`
export const H1 = styled.h1`
  width: 648.351px;
  color: var(--gray-900, #18181b);
  text-align: center;
  /* PJ/Bold/42px */
  font-family: 'Plus Jakarta Sans';
  font-size: 42px;
  font-style: normal;
  font-weight: 700;
  line-height: 48px; /* 114.286% */
`
export const Paragrafo = styled.p`
  width: 468.687px;
  height: 25.136px;
  flex-shrink: 0;
  color: var(--1C1340, #1c1340);
  text-align: center;
  /* PJ/Regular/18px */
  font-family: 'Plus Jakarta Sans';
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px; /* 155.556% */
`
export const H2 = styled.h2`
  width: 283.371px;
  height: 25.136px;
  flex-shrink: 0;
  color: var(--gray-900, #18181b);
  text-align: center;
  font-family: Inter;
  font-size: 21px;
  font-style: normal;
  font-weight: 700;
  line-height: 28px; /* 133.333% */
`
export const Descricao = styled.p`
  width: 296.865px;
  height: 70.022px;
  flex-shrink: 0;
  color: var(--1C1340, #1c1340);
  text-align: center;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 26px; /* 162.5% */
`
export const Card = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`
export const CardList = styled.div`
  display: flex;
  grid-template-columns: 2fr 2fr 2fr;
  display: grid;
`
export const Nav = styled.nav`
  align-items: center;
  display: flex;
  flex-direction: column;
`
