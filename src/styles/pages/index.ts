import styled, { css } from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  ${({ theme }) => css`
    gap: ${theme.layout[4]};
    padding: ${theme.layout[4]};
    background-color: ${theme.colors.background};
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
