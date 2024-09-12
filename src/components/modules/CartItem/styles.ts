import styled, { css } from 'styled-components'

export const CartItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${({ theme }) => css`
    gap: ${theme.layout[4]};
    padding: ${theme.layout[4]};
    border-top: 1px solid ${theme.colors.borderInner};
  `};

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`

export const LeftSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${({ theme }) => theme.layout[4]};

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`

export const ProductSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${({ theme }) => theme.layout[4]};
`

export const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  ${({ theme }) => css`
    width: ${theme.layout[6]};
    height: ${theme.layout[6]};
    appearance: none;
    border: 1px solid ${theme.colors.borderInner};
    border-radius: ${theme.borderRadius.sm};
    cursor: pointer;
    position: relative;

    &:checked {
      background-color: ${theme.colors.main};
      border-color: ${theme.colors.main};
    }

    &:checked::after {
      content: '✔';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 14px;
      color: white;
    }
  `}
`

export const ProductImage = styled.img`
  object-fit: cover;
  ${({ theme }) => css`
    height: ${theme.layout[24]};
    width: ${theme.layout[24]};
    border-radius: ${theme.borderRadius.md};
  `};
`

export const ProductTitle = styled.span`
  ${({ theme }) => css`
    flex: 1;
    margin-right: ${theme.layout[4]};
    font-size: ${theme.fontSizes.md};
    color: ${theme.colors.text};
    font-weight: 500;
  `};
`

export const ActionsSection = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: ${({ theme }) => theme.layout[3]};

  @media (max-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
  }
`

export const QuantitySection = styled.div`
  display: flex;
  align-items: center;
  ${({ theme }) => css`
    gap: ${theme.layout[4]};
    padding: ${theme.layout[2]} ${theme.layout[4]};
    border: 1px solid ${theme.colors.borderInner};
    border-radius: ${theme.borderRadius.md};
  `};
`

export const QuantityButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const QuantityText = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.fontSizes.md};
    color: ${theme.colors.text};
  `};
`

export const RemoveButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  ${({ theme }) => css`
    gap: ${theme.layout[1]};
    background-color: transparent;
    color: ${theme.colors.text};
    font-size: ${theme.fontSizes.md};
    cursor: pointer;
    transition: color 0.3s;
  `};
`

export const RightSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${({ theme }) => theme.layout[4]};

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`

export const PriceSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: ${({ theme }) => theme.layout[1]};
  width: ${({ theme }) => theme.layout[40]};

  @media (max-width: 768px) {
    align-items: flex-start;
  }
`

export const FinalPrice = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.fontSizes.lg};
    color: ${theme.colors.text};
    font-weight: bold;
  `};
`

export const DiscountText = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.fontSizes.sm};
    color: ${theme.colors.textGray};
  `};
`
