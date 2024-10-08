import 'styled-components'

interface BaseTheme {
  fontSizes: {
    xs: string
    sm: string
    md: string
    lg: string
    xl: string
    '2xl': string
    '3xl': string
  }
  layout: {
    1: string
    2: string
    3: string
    4: string
    5: string
    6: string
    7: string
    8: string
    9: string
    10: string
    12: string
    16: string
    20: string
    24: string
    28: string
    32: string
    40: string
    48: string
    56: string
    64: string
    72: string
    80: string
    96: string
  }
  borderRadius: {
    sm: string
    md: string
    lg: string
  }
}

declare module 'styled-components' {
  export interface DefaultTheme extends BaseTheme {
    colors: {
      main: string
      mainHover: string
      mainContrast: string
      secondary: string
      text: string
      textGray: string
      background: string
      card: string
      cardDark: string
      header: string
      border: string
      borderInner: string
      button: string
      buttonHover: string
      inputBackground: string
      inputBorder: string
      inputText: string
      inputPlaceholder: string
      inputFocus: string
      scrollbarTrack: string
      scrollbarThumb: string
      scrollbarThumbHover: string
      scrollbarThumbActive: string
      listEmptyBackground: string
      listEmptyBorder: string
    }
  }
}
