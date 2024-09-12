import React, { memo } from 'react'

import * as S from './styles'

type Props = {
  icon: React.ReactNode
  message: string
}

export const ListEmpty: React.NamedExoticComponent<Props> = memo(
  function ListEmpty({ icon, message }) {
    return (
      <S.ListEmptyContainer>
        {icon}
        <S.Message>{message}</S.Message>
      </S.ListEmptyContainer>
    )
  },
)
