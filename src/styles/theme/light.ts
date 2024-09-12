import { DefaultTheme } from 'styled-components'
import { baseTheme } from './base'

export const lightTheme: DefaultTheme = {
  ...baseTheme,
  colors: {
    main: '#E13C22',
    mainHover: '#D13C22',
    mainContrast: '#FFF',
    secondary: '#6C757D',
    text: '#212529',
    textGray: '#70757B',
    background: '#F1F1F1',
    card: '#FFFFFF',
    cardDark: '#F7F7F7',
    header: '#FDFDFD',
    border: '#DEE2E6',
    borderInner: '#D0D2D5',
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
    listEmptyBackground: '#DEE1E4',
    listEmptyBorder: '#C0C2C6',
  },
}
