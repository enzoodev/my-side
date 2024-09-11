import { DefaultTheme } from 'styled-components'
import { baseTheme } from './base'

export const lightTheme: DefaultTheme = {
  ...baseTheme,
  colors: {
    main: '#E13C22',
    secondary: '#6C757D',
    text: '#212529',
    textGray: '#70757B',
    background: '#F1F1F1',
    card: '#FFFFFF',
    header: '#FDFDFD',
    border: '#DEE2E6',
    button: '#E1E1E1',
    buttonHover: '#CCCCCC',
    inputBackground: '#E8E9E9',
    inputBorder: '#C2C4C7',
    inputText: '#46494A',
    inputPlaceholder: '#7A7D7F',
    inputFocus: '#999B9D',
    scrollbarTrack: '#F1F1F1',
    scrollbarThumb: '#C2C4C7',
    scrollbarThumbHover: '#999B9D',
    scrollbarThumbActive: '#70757B',
  },
}
