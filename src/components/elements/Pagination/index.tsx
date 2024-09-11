import React, { memo } from 'react'
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react'

import * as S from './styles'

type Props = {
  totalPages: number
  currentPage: number
  onSetPage: (page: number) => void
  onGoToPreviousPage: () => void
  onGoToNextPage: () => void
}

export const Pagination: React.NamedExoticComponent<Props> = memo(
  function Pagination({
    totalPages,
    currentPage,
    onSetPage,
    onGoToPreviousPage,
    onGoToNextPage,
  }) {
    const pages = Array.from({ length: totalPages }, (_, index) => index + 1)
    const hasPreviousPage = currentPage > 1
    const hasNextPage = currentPage < totalPages

    return (
      <S.PaginationContainer>
        {hasPreviousPage && (
          <button onClick={onGoToPreviousPage} disabled={currentPage === 1}>
            <IconChevronLeft size={25} stroke={2} />
          </button>
        )}
        <S.PageNumbers>
          {pages.map((page) => (
            <S.PageNumberButton
              key={page}
              active={page === currentPage}
              onClick={() => onSetPage(page)}
            >
              {page}
            </S.PageNumberButton>
          ))}
        </S.PageNumbers>
        {hasNextPage && (
          <button
            onClick={onGoToNextPage}
            disabled={currentPage === totalPages}
          >
            <IconChevronRight size={25} stroke={2} />
          </button>
        )}
      </S.PaginationContainer>
    )
  },
)
