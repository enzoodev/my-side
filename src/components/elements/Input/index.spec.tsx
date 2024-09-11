import React from 'react'
import { ThemeProvider } from 'styled-components'
import { render, screen } from '@testing-library/react'

import { lightTheme } from '@/styles/theme/light'
import { Input } from './'

describe('Input Component', () => {
  const renderInput = (props = {}) =>
    render(
      <ThemeProvider theme={lightTheme}>
        <Input placeholder="Type something" {...props} />
      </ThemeProvider>,
    )

  it('should render the input with the correct placeholder', () => {
    renderInput()
    const inputElement = screen.getByPlaceholderText('Type something')
    expect(inputElement).toBeInTheDocument()
  })

  it('should apply the correct styles from the theme', () => {
    renderInput()
    const inputElement = screen.getByPlaceholderText('Type something')

    expect(inputElement).toHaveStyle(
      `background-color: ${lightTheme.colors.inputBackground}`,
    )
  })

  it('should update the value when typing', () => {
    renderInput()
    const inputElement = screen.getByPlaceholderText(
      'Type something',
    ) as HTMLInputElement
    expect(inputElement.value).toBe('')
    inputElement.value = 'New value'
    expect(inputElement.value).toBe('New value')
  })
})
