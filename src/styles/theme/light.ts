import { DefaultTheme } from 'styled-components'
import { baseTheme } from './base'

export const lightTheme: DefaultTheme = {
  ...baseTheme,
  colors: {
    main: '#007BFF',
    secondary: '#6C757D',
    text: '#212529',
    textGray: '#70757B',
    background: '#F1F1F1',
    card: '#FFFFFF',
    header: '#FDFDFD',
    border: '#DEE2E6',
    button: '#E1E1E1',
    buttonHover: '#CCCCCC',
  },
}
