import styled, { css } from 'styled-components'

export const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
  width: 100%;
`

export const DropdownButton = styled.button`
  ${({ theme }) => css`
    width: 100%;
    padding: ${theme.layout[3]};
    font-size: ${theme.fontSizes.md};
    border-radius: ${theme.borderRadius.md};
    border: 1px solid ${theme.colors.inputBorder};
    background-color: ${theme.colors.inputBackground};
    color: ${theme.colors.inputText};
    cursor: pointer;
    text-align: left;
    transition: all 0.3s ease-in-out;
    display: flex;
    align-items: center;
    justify-content: space-between;

    &:hover {
      border-color: ${theme.colors.inputFocus};
    }

    &:focus {
      outline: none;
      border-color: ${theme.colors.inputFocus};
    }
  `};
`

export const IconWrapper = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const DropdownMenu = styled.ul`
  ${({ theme }) => css`
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background-color: ${theme.colors.inputBackground};
    border-radius: ${theme.borderRadius.md};
    border: 1px solid ${theme.colors.inputBorder};
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    list-style: none;
    padding: 0;
    margin: 0;
    margin-top: ${theme.layout[2]};
    z-index: 10;
    max-height: 200px;
    overflow-y: auto;
    transition: all 0.3s ease-in-out;
  `};
`

export const DropdownItem = styled.li`
  ${({ theme }) => css`
    padding: ${theme.layout[2]};
    cursor: pointer;
    transition: background-color 0.3s ease-in-out;

    &:hover {
      background-color: ${theme.colors.inputFocus};
      color: #fff;
    }
  `};
`
