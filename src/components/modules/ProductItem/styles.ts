import styled, { css } from 'styled-components'
import { IconShoppingCart } from '@tabler/icons-react'

export const ProductCard = styled.div`
  position: relative;
  cursor: pointer;
  ${({ theme }) => css`
    border: 1px solid ${theme.colors.border};
    border-radius: ${theme.borderRadius.md};
    background-color: ${theme.colors.card};
    transition:
      transform 0.2s ease,
      box-shadow 0.2s ease;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);

    &:hover {
      transform: scale(1.02);
      box-shadow: 0 6px 10px rgba(0, 0, 0, 0.1);
    }
  `};
`

export const ProductImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  ${({ theme }) => css`
    border-top-left-radius: ${theme.borderRadius.md};
    border-top-right-radius: ${theme.borderRadius.md};
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

export const ProductImageSkeleton = styled.div`
  width: 100%;
  height: 250px;
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: loading 1.5s infinite;
  ${({ theme }) => css`
    border-top-left-radius: ${theme.borderRadius.md};
    border-top-right-radius: ${theme.borderRadius.md};
  `};

  @keyframes loading {
    0% {
      background-position: 100% 0;
    }
    100% {
      background-position: -100% 0;
    }
  }
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
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  border-radius: 50%;
  ${({ theme }) => css`
    right: ${theme.layout[2]};
    top: ${theme.layout[2]};
    height: ${theme.layout[9]};
    width: ${theme.layout[9]};
    background-color: ${theme.colors.button};

    &:hover {
      background-color: ${theme.colors.buttonHover};
    }
  `};
`

export const AddToCartIcon = styled(IconShoppingCart).attrs(({ theme }) => ({
  size: 18,
  stroke: 1.5,
  color: theme.colors.text,
}))``
