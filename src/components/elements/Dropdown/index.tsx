import React, {
  memo,
  useState,
  useCallback,
  useMemo,
  HTMLAttributes,
} from 'react'
import { IconChevronDown } from '@tabler/icons-react'

import { generateId } from '@/utils/generateId'

import * as S from './styles'

type Option = {
  label: string
  value: string
}

type Props = HTMLAttributes<HTMLDivElement> & {
  placeholder: string
  options: Array<Option>
  selectedOption?: string
  onSelectValue: (option: string | undefined) => void
}

export const Dropdown: React.NamedExoticComponent<Props> = memo(
  function Dropdown({
    placeholder,
    options,
    selectedOption,
    onSelectValue,
    ...rest
  }) {
    const [isOpen, setIsOpen] = useState(false)

    const value = useMemo(() => {
      if (!selectedOption) {
        return placeholder
      }

      const selected = options.find((option) => option.value === selectedOption)

      return selected?.label ?? placeholder
    }, [options, placeholder, selectedOption])

    const handleToggle = useCallback(() => {
      setIsOpen((prevState) => !prevState)
    }, [])

    const handleSelect = useCallback(
      (option: string | undefined) => {
        onSelectValue(option)
        setIsOpen(false)
      },
      [onSelectValue],
    )

    return (
      <S.DropdownContainer {...rest}>
        <S.DropdownButton onClick={handleToggle}>
          {value}
          <S.IconWrapper>
            <IconChevronDown size={20} />
          </S.IconWrapper>
        </S.DropdownButton>
        {isOpen && (
          <S.DropdownMenu>
            <S.DropdownItem
              key={generateId()}
              onClick={() => handleSelect(undefined)}
            >
              {placeholder}
            </S.DropdownItem>
            {options.map((option) => (
              <S.DropdownItem
                key={generateId()}
                onClick={() => handleSelect(option.value)}
              >
                {option.label}
              </S.DropdownItem>
            ))}
          </S.DropdownMenu>
        )}
      </S.DropdownContainer>
    )
  },
)
