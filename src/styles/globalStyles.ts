import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body,
  h1, h2, h3, h4, h5, h6,
  p, ol, ul,
  figure, blockquote, dl, dd {
    margin: 0;
    padding: 0;
  }

  ul, ol {
    list-style: none;
  }

  body {
    font-size: 16px;
    line-height: 1.5;
    color: ${({ theme }) => theme.colors.text};
  }

  img {
    max-width: 100%;
    display: block;
  }

  input, button, textarea, select {
    border: none;
    background: none;
    font: inherit;
  }

  video, canvas, audio, iframe {
    display: block;
    max-width: 100%;
  }

  @media (prefers-reduced-motion: reduce) {
    * {
      animation: none;
      transition: none;
      scroll-behavior: auto;
    }
  }

  button, input {
    background: transparent;
    border: 0;
    padding: 0;
    margin: 0;
    font: inherit;
    color: inherit;
    outline: none;
  }

  button, img, input:focus, button:focus, button:active, img:focus, img:active, a, a:focus, a:active {
    outline: none;
  }

  :focus {
    outline: 2px solid ${({ theme }) => theme.colors.border};
    outline-offset: 2px;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  a, button {
    cursor: pointer;
  }

  h1, h2, h3, h4, h5, h6 {
    line-height: 1.2;
    font-weight: 600;
  }

  ::-webkit-scrollbar {
    width: 14px;
  }

  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.scrollbarTrack};
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.scrollbarThumb};
    border-radius: 6px;
    border: 3px solid ${({ theme }) => theme.colors.scrollbarTrack};
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: ${({ theme }) => theme.colors.scrollbarThumbHover};
  }

  ::-webkit-scrollbar-thumb:active {
    background-color: ${({ theme }) => theme.colors.scrollbarThumbActive};
  }
`
