import styled, { css } from 'styled-components'
import { IconShoppingCart } from '@tabler/icons-react'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${({ theme }) => css`
    padding: ${theme.layout[3]} ${theme.layout[4]};
    background-color: ${theme.colors.header};
    border-bottom: 1px solid ${theme.colors.border};
  `};
`

export const ShoppingCartIcon = styled(IconShoppingCart)`
  ${({ theme }) => css`
    width: ${theme.layout[7]};
    height: ${theme.layout[7]};
    color: ${theme.colors.text};
  `};
`
