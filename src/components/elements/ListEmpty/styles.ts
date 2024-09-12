import styled, { css } from 'styled-components'

export const ListEmptyContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  ${({ theme }) => css`
    gap: ${theme.layout[4]};
    background-color: ${theme.colors.listEmptyBackground};
    border: 1px solid ${theme.colors.listEmptyBorder};
    border-radius: ${theme.borderRadius.md};
    padding: ${theme.layout[4]};
  `};
`

export const Message = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.fontSizes.lg};
    color: ${theme.colors.text};
  `}
`
