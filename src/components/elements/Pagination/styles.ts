import styled, { css } from 'styled-components'

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.layout[4]};
  margin: ${({ theme }) => theme.layout[4]} 0;
`

export const PageNumbers = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${({ theme }) => theme.layout[2]};
`

export const PageNumberButton = styled.button<{ active: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  ${({ theme, active }) => css`
    height: ${theme.layout[12]};
    width: ${theme.layout[12]};
    background-color: ${active ? theme.colors.main : theme.colors.button};
    color: ${active ? '#fff' : theme.colors.text};
    border: 1px solid ${active ? theme.colors.main : theme.colors.inputBorder};
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    font-weight: 500;
    &:hover {
      border-color: ${theme.colors.main};
    }
    &:focus {
      outline: none;
      border-color: ${theme.colors.main};
    }
  `}
`
