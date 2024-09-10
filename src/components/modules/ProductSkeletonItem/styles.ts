import styled, { css } from 'styled-components'

export const ProductSkeletonCard = styled.div`
  ${({ theme }) => css`
    border: 1px solid ${theme.colors.border};
    border-radius: ${theme.borderRadius.md};
    background-color: ${theme.colors.card};
    display: flex;
    flex-direction: column;
    width: 100%;
    position: relative;
    overflow: hidden;
  `};
`

export const SkeletonImage = styled.div`
  width: 100%;
  height: 14.5rem;
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: loading 1.5s infinite;
  border-top-left-radius: ${({ theme }) => theme.borderRadius.md};
  border-top-right-radius: ${({ theme }) => theme.borderRadius.md};

  @keyframes loading {
    0% {
      background-position: 100% 0;
    }
    100% {
      background-position: -100% 0;
    }
  }
`

export const SkeletonInfo = styled.div`
  display: flex;
  flex-direction: column;
  ${({ theme }) => css`
    gap: ${theme.layout[4]};
    padding: ${theme.layout[4]};
    border-top: 1px solid ${theme.colors.border};
  `};
`

export const SkeletonTitle = styled.div`
  align-self: center;
  ${({ theme }) => css`
    height: ${theme.layout[4]};
    width: 60%;
    background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
    background-size: 200% 100%;
    animation: loading 1.5s infinite;
    border-radius: ${theme.borderRadius.lg};
  `};
`

export const SkeletonText = styled.div`
  ${({ theme }) => css`
    height: ${theme.layout[4]};
    width: 90%;
    background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
    background-size: 200% 100%;
    animation: loading 1.5s infinite;
    border-radius: ${theme.borderRadius.md};
  `};
`

export const SkeletonInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  ${({ theme }) => css`
    gap: ${theme.layout[2]};
  `};
`
