import styled, { css } from 'styled-components'

export const StyledInput = styled.input`
  ${({ theme }) => css`
    width: 100%;
    transition: all 0.3s ease-in-out;
    padding: ${theme.layout[3]};
    font-size: ${theme.fontSizes.md};
    border-radius: ${theme.borderRadius.md};
    border: 1px solid ${theme.colors.inputBorder};
    background-color: ${theme.colors.inputBackground};
    color: ${theme.colors.inputText};

    &::placeholder {
      color: ${theme.colors.inputPlaceholder};
    }

    &:hover {
      border-color: ${theme.colors.inputFocus};
    }

    &:focus {
      outline: none;
      border-color: ${({ theme }) => theme.colors.inputFocus};
    }

    &::selection {
      background-color: ${theme.colors.inputFocus};
      color: ${theme.colors.mainContrast};
    }
  `};
`
