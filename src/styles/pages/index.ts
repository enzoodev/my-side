import styled, { css } from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  ${({ theme }) => css`
    background-color: ${theme.colors.background};
  `};
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  ${({ theme }) => css`
    gap: ${theme.layout[4]};
    padding: ${theme.layout[4]};
  `};
`

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const Title = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.text};
    font-size: ${theme.fontSizes['2xl']};
  `};
`

export const FilterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  ${({ theme }) => css`
    gap: ${theme.layout[4]};
  `};
`

export const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: ${({ theme }) => theme.layout[4]};

  @media (max-width: 1440px) {
    grid-template-columns: repeat(5, 1fr);
  }

  @media (max-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`
