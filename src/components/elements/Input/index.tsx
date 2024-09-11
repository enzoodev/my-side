import React, { InputHTMLAttributes, memo, NamedExoticComponent } from 'react'

import * as S from './styles'

export const Input: NamedExoticComponent<
  InputHTMLAttributes<HTMLInputElement>
> = memo(function Input(props) {
  return <S.StyledInput {...props} />
})
