import { DefaultTheme } from 'styled-components'
import { baseTheme } from './base'

export const lightTheme: DefaultTheme = {
  ...baseTheme,
  colors: {
    main: '#007BFF',
    secondary: '#6C757D',
    text: '#212529',
    background: '#ECECEC',
    card: '#D5D5D5',
    border: '#DEE2E6',
  },
}
