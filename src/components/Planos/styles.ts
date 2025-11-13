import { styled } from 'styled-components'

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 80px 0;
  width: 100%;
  background: #fff;
`

export const Nav = styled.nav`
  text-align: center;
  margin-bottom: 64px;

  h1 {
    color: #6941c6;
    font-size: 14px;
    font-weight: 500;
    background: #f9f5ff;
    border-radius: 16px;
    padding: 6px 12px;
    display: inline-block;
  }

  h2 {
    margin-top: 16px;
    font-size: 42px;
    font-weight: 600;
    color: #42307d;
  }

  p {
    color: #6941c6;
    margin-top: 16px;
    max-width: 720px;
    font-size: 18px;
    line-height: 28px;
  }
`

export const CardSection = styled.div`
  display: flex;
  gap: 32px;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  max-width: 1200px;
`

export const Card = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 340px;
  border-radius: 16px;
  border: 1px solid #eaecf0;
  background: #fff;
  box-shadow: 0 12px 16px -4px rgba(16, 24, 40, 0.08),
    0 4px 6px -2px rgba(16, 24, 40, 0.03);
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
  }

  h3 {
    font-size: 22px;
    color: #6941c6;
    font-weight: 600;
    margin-bottom: 8px;
  }

  h4 {
    font-size: 38px;
    color: #101828;
    font-weight: 700;
    margin-bottom: 16px;
  }

  ul {
    list-style: none;
    width: 100%;
    padding: 0 24px;
    margin-bottom: 24px;

    li {
      display: flex;
      align-items: center;
      gap: 10px;
      margin-bottom: 14px;

      td {
        color: #667085;
        font-size: 16px;
      }
    }
  }
`

export const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: #f4ebff;
  border: 6px solid #f9f5ff;
  margin-top: 32px;
  margin-bottom: 12px;

  img {
    width: 24px;
    height: 24px;
  }
`

export const Caixabotao = styled.div`
  width: 100%;
  background: #f9fafb;
  border-radius: 0 0 16px 16px;
  padding: 20px;
  display: flex;
  justify-content: center;
`

export const Botao = styled.button`
  background: #7f56d9;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 12px 24px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  transition: background 0.2s;

  &:hover {
    background: #6941c6;
  }
`
