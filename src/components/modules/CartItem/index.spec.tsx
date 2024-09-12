import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import { CartItem } from './index'
import { ThemeProvider } from 'styled-components'
import { lightTheme } from '@/styles/theme/light'

jest.mock('@tabler/icons-react', () => ({
  IconMinus: () => <span>-</span>,
  IconPlus: () => <span>+</span>,
  IconTrash: () => <span>🗑</span>,
}))

const mockProduct: TCartProduct = {
  product: {
    id: 1,
    title: 'Test Product',
    price: 100,
    discount: 10,
    image: 'https://via.placeholder.com/150',
    description: '',
    brand: '',
    model: '',
    color: '',
    category: '',
  },
  quantity: 2,
  isSelected: false,
}

describe('<CartItem />', () => {
  const mockIncreaseQuantity = jest.fn()
  const mockDecreaseQuantity = jest.fn()
  const mockRemove = jest.fn()
  const mockToggleSelect = jest.fn()

  const setup = (item = mockProduct) =>
    render(
      <ThemeProvider theme={lightTheme}>
        <CartItem
          item={item}
          onIncreaseQuantity={mockIncreaseQuantity}
          onDecreaseQuantity={mockDecreaseQuantity}
          onRemove={mockRemove}
          onToggleSelect={mockToggleSelect}
        />
      </ThemeProvider>,
    )

  it('calls the correct function when increasing quantity', () => {
    setup()

    const increaseButton = screen.getByText('+')
    fireEvent.click(increaseButton)

    expect(mockIncreaseQuantity).toHaveBeenCalledWith(1)
  })

  it('calls the correct function when decreasing quantity', () => {
    setup()

    const decreaseButton = screen.getByText('-')
    fireEvent.click(decreaseButton)

    expect(mockDecreaseQuantity).toHaveBeenCalledWith(1)
  })

  it('calls the remove function when clicking remove button', () => {
    setup()

    const removeButton = screen.getByText('Excluir')
    fireEvent.click(removeButton)

    expect(mockRemove).toHaveBeenCalledWith(1)
  })

  it('calls the toggle select function when clicking the checkbox', () => {
    setup()

    const checkbox = screen.getByRole('checkbox')
    fireEvent.click(checkbox)

    expect(mockToggleSelect).toHaveBeenCalledWith(1)
  })

  it('renders the product image correctly', () => {
    setup()

    const productImage = screen.getByAltText('Test Product')
    expect(productImage).toBeInTheDocument()
    expect(productImage).toHaveAttribute(
      'src',
      'https://via.placeholder.com/150',
    )
  })

  it('displays the discount text correctly', () => {
    setup()

    expect(screen.getByText('10% de desconto')).toBeInTheDocument()
  })
})
