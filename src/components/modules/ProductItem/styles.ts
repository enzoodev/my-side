import styled, { css } from 'styled-components'

export const ProductCard = styled.div`
  position: relative;
  cursor: pointer;
  ${({ theme }) => css`
    border: 1px solid ${theme.colors.border};
    border-radius: ${theme.borderRadius.md};
    background-color: ${theme.colors.card};
    transition: transform 0.2s ease; /* Adiciona uma leve animação ao passar o mouse */

    &:hover {
      transform: scale(1.02); /* Efeito de "hover" */
    }
  `};
`

export const ProductImage = styled.img`
  width: 100%;
  height: auto;
  ${({ theme }) => css`
    border-top-left-radius: ${theme.borderRadius.md};
    border-top-right-radius: ${theme.borderRadius.md};
  `};
`

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  ${({ theme }) => css`
    border-top: 1px solid ${theme.colors.border};
    padding: ${theme.layout[4]};
    gap: ${theme.layout[3]};
  `};
`

export const ProductTitle = styled.h3`
  text-align: center;
  ${({ theme }) => css`
    font-size: ${theme.fontSizes.sm};
    color: ${theme.colors.text};
  `};
`

export const ProductInfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  ${({ theme }) => css`
    gap: ${theme.layout[4]};
  `};
`

export const ProductInfoContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  ${({ theme }) => css`
    gap: ${theme.layout[1]};
  `};
`

export const ProductInfoSubtitle = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.fontSizes.xs};
    color: ${theme.colors.textGray};
  `};
`

export const ProductInfoTitle = styled.h5`
  ${({ theme }) => css`
    font-size: ${theme.fontSizes.xs};
    color: ${theme.colors.textGray};
  `};
`

export const AddToCartButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 8px 12px;
  ${({ theme }) => css`
    background-color: ${theme.colors.background};
    color: ${theme.colors.header};
    border: none;
    border-radius: ${theme.borderRadius.sm};
    cursor: pointer;
    font-size: ${theme.fontSizes.xs};

    &:hover {
      background-color: ${theme.colors.secondary};
    }
  `};
`
