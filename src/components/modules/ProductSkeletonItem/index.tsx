import React from 'react'

import * as S from './styles'

export const ProductSkeletonItem: React.FC = () => {
  return (
    <S.ProductSkeletonCard data-testid="skeleton">
      <S.SkeletonImage />
      <S.SkeletonInfo>
        <S.SkeletonTitle />
        <S.SkeletonInfoWrapper>
          <S.SkeletonText />
          <S.SkeletonText />
          <S.SkeletonText />
        </S.SkeletonInfoWrapper>
      </S.SkeletonInfo>
    </S.ProductSkeletonCard>
  )
}
