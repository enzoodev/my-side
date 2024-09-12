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

export const Title = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.text};
    font-size: ${theme.fontSizes['2xl']};
  `};
`

export const CartContainer = styled.div`
  display: flex;
  flex-direction: row;
  ${({ theme }) => css`
    gap: ${theme.layout[8]};
  `};

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`

export const CartItemsContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`

export const PaymentContainer = styled.div`
  width: 23%;
  min-width: 20rem;
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  ${({ theme }) => css`
    background-color: ${theme.colors.cardDark};
    border: 1px solid ${theme.colors.border};
    border-radius: ${theme.borderRadius.md};
  `}
`

export const PaymentHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.layout[2]};
  padding: ${({ theme }) => theme.layout[3]};
  ${({ theme }) => css`
    border-bottom: 1px solid ${theme.colors.border};
  `}
`

export const PaymentConclusion = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.layout[3]};
  padding: ${({ theme }) => theme.layout[3]};
`

export const PaymentInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: ${({ theme }) => theme.layout[4]};
`

export const PaymentInfoTitle = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.text};
    font-size: ${theme.fontSizes.md};
    font-weight: 500;
  `};
`

export const PaymentInfoSubtitle = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.text};
    font-size: ${theme.fontSizes.md};
  `};
`

export const PaymentTotalTitle = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.text};
    font-size: ${theme.fontSizes.lg};
    font-weight: 600;
  `};
`

export const PaymentTotalSubtitle = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.text};
    font-size: ${theme.fontSizes.md};
  `};
`

export const PaymentButton = styled.button`
  ${({ theme }) => css`
    background-color: ${theme.colors.main};
    color: ${theme.colors.mainContrast};
    padding: ${theme.layout[3]};
    border-radius: ${theme.borderRadius.md};
    font-weight: 600;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color: ${theme.colors.mainHover};
    }
  `}
`
