import { styled } from 'styled-components'

export const Section = styled.section`
  display: flex;
  width: 1440px;
  height: 1026px;
  flex-direction: column;
  align-items: center;
  background: var(--White, #fff);
  @media (max-width: 1020px) {
    width: 80%;
  }
  @media (min-width: 1200px) {
    width: 100%;
  }
`
export const Nav = styled.nav`
  display: flex;
  padding-top: 96px;
  flex-direction: column;
  align-items: center;
  align-self: stretch;
  @media (max-width: 1020px) {
    width: 80%;
  }
  @media (min-width: 1200px) {
    width: 100%;
  }
  h1 {
    position: relative;
    margin-bottom: 20px;
    color: var(--Primary-700, #6941c6);
    text-align: center;
    width: 184px;
    /* Text sm/Medium */
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px; /* 142.857% */
    display: flex;
    padding: 4px 12px;
    justify-content: center;
    align-items: center;
    border-radius: 16px;
    background: var(--Primary-50, #f9f5ff);
  }
  h2 {
    color: var(--Primary-900, #42307d);
    text-align: center;
    margin-bottom: 24px;
    width: 1024px;
    /* Display lg/Semibold */
    font-family: Inter;
    font-size: 48px;
    font-style: normal;
    font-weight: 600;
    line-height: 60px; /* 125% */
    letter-spacing: -0.96px;
  }
  p {
    margin-bottom: 146px;
    color: var(--Primary-700, #6941c6);
    text-align: center;
    /* Text xl/Normal */
    font-family: Inter;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 30px;
    width: 1024px;
  }
`
export const CardSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 32px;
  align-self: stretch;
`
export const Card = styled.aside`
  display: flex;
  width: 336.667px;
  height: 400px auto;
  flex-direction: column;
  align-items: center;
  border-radius: 16px;
  border: 1px solid var(--Gray-200, #eaecf0);
  background: var(--White, #fff);
  /* Shadow/lg */
  box-shadow: 0px 12px 16px -4px rgba(16, 24, 40, 0.08),
    0px 4px 6px -2px rgba(16, 24, 40, 0.03);

  Card2 {
    display: flex;
    width: 336.667px;
    flex-direction: column;
    align-items: flex-start;
    border-radius: 16px;
    border: 1px solid var(--Gray-200, #eaecf0);
    background: #d6bbfb;
    /* Shadow/lg */
    box-shadow: 0px 12px 16px -4px rgba(16, 24, 40, 0.08),
      0px 4px 6px -2px rgba(16, 24, 40, 0.03);
  }
  h3 {
    color: var(--Primary-700, #6941c6);
    text-align: center;
    align-self: stretch;
    /* Text xl/Semibold */
    font-family: Inter;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 30px; /* 150% */
  }
  h4 {
    margin-bottom: 32px;
    align-self: stretch;
    color: var(--Gray-900, #101828);
    text-align: center;
    /* Display lg/Semibold */
    font-family: Inter;
    font-size: 48px;
    font-style: normal;
    font-weight: 600;
    line-height: 60px; /* 125% */
    letter-spacing: -0.96px;
  }
  ul {
    display: flex;
    padding: 32px;
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;
    align-self: stretch;
  }
  li {
    display: flex;
    align-items: flex-start;
    gap: 30px;
    align-self: stretch;
    td {
      display: flex;
      align-items: flex-start;
      gap: 12px;
      align-self: stretch;
      color: var(--Gray-500, #667085);

      /* Text md/Normal */
      font-family: Inter;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 24px; /* 150% */
    }
  }
`
export const Botao = styled.div`
  display: flex;
  padding: 12px 20px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  flex: 1 0 0;
  border-radius: 8px;
  border: 1px solid var(--Primary-600, #7f56d9);
  background: var(--Primary-600, #7f56d9);

  /* Shadow/xs */
  box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
`
export const Caixabotao = styled.div`
  display: flex;
  padding: 32px;
  flex-direction: column;
  gap: 24px;
  align-self: stretch;
  background: var(--Gray-50, #f9fafb);
`
export const Icon = styled.div`
  display: flex;
  width: 40px;
  height: 40px;
  padding: 10px;
  justify-content: center;
  align-items: center;
  border-radius: 28px;
  border: 6px solid var(--Primary-50, #f9f5ff);
  background: var(--Primary-100, #f4ebff);
  position: relative;
  flex-shrink: 0;
  margin-bottom: 20px;
  margin-top: 32px;
`
