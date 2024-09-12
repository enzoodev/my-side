import styled, { css, keyframes } from 'styled-components'

const skeletonPulse = keyframes`
  0% {
    background-color: #e0e0e0;
  }
  50% {
    background-color: #f0f0f0;
  }
  100% {
    background-color: #e0e0e0;
  }
`

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
  flex-direction: row;
  justify-content: space-between;
  ${({ theme }) => css`
    gap: ${theme.layout[6]};
    padding: ${theme.layout[4]};
  `};

  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }
`

export const InfoContainer = styled.main`
  width: 60%;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.layout[4]};

  @media (max-width: 768px) {
    width: 100%;
  }
`

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${({ theme }) => theme.layout[2]};
`

export const InfoSubtitle = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.text};
    font-size: ${theme.fontSizes.md};
  `};
`

export const InfoTitle = styled.span`
  font-weight: 600;
  ${({ theme }) => css`
    color: ${theme.colors.text};
    font-size: ${theme.fontSizes.md};
  `};
`

export const Title = styled.h1`
  ${({ theme }) => css`
    width: 80%;
    font-weight: bold;
    font-size: ${theme.fontSizes['3xl']};
    color: ${theme.colors.text};
    margin: ${theme.layout[2]} 0 ${theme.layout[4]};
  `};
`

export const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  ${({ theme }) => css`
    gap: ${theme.layout[2]};
    margin-bottom: ${theme.layout[2]};
  `};

  @media (max-width: 540px) {
    flex-direction: column;
    align-self: flex-start;
  }
`

export const PreviousPrice = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.fontSizes.xl};
    color: ${theme.colors.text};
    text-decoration: line-through;
    font-weight: 600;
  `};
`

export const Price = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.fontSizes['3xl']};
    color: ${theme.colors.text};
    font-weight: bold;
  `};
`

export const Discount = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.fontSizes.md};
    color: ${theme.colors.text};
  `};
`

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  ${({ theme }) => css`
    gap: ${theme.layout[2]};
    margin: ${theme.layout[2]} 0 ${theme.layout[6]};
  `};
`

export const DescriptionLabel = styled.span`
  font-weight: 500;
  ${({ theme }) => css`
    font-size: ${theme.fontSizes.md};
    color: ${theme.colors.text};
  `};
`

export const Description = styled.p`
  width: 80%;
  ${({ theme }) => css`
    font-size: ${theme.fontSizes.sm};
    color: ${theme.colors.textGray};
  `};
`

export const AddToCartButton = styled.button`
  ${({ theme }) => css`
    height: ${theme.layout[12]};
    width: ${theme.layout[96]};
    max-width: 90%;
    background-color: ${theme.colors.main};
    color: ${theme.colors.mainContrast};
    border-radius: ${theme.borderRadius.md};
    font-size: ${theme.fontSizes.md};
    transition: background-color 0.3s;
    font-weight: 500;

    &:hover {
      background-color: ${theme.colors.mainHover};
    }

    @media (max-width: 768px) {
      align-self: center;
    }
  `};
`

export const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    width: 100%;
  }
`

export const ProductImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  border-radius: ${({ theme }) => theme.borderRadius.md};
`

export const Skeleton = styled.div`
  width: 100%;
  height: 100%;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  animation: ${skeletonPulse} 1.5s infinite;
`
