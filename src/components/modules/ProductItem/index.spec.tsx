import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import { ProductItem } from './index'
import { ThemeProvider } from 'styled-components'
import { lightTheme } from '@/styles/theme/light'
import { formatPrice } from '../../../utils/formatPrice'

jest.mock('@tabler/icons-react', () => ({
  IconShoppingCart: () => <span>🛒</span>,
}))

jest.mock('../../../utils/formatPrice', () => ({
  formatPrice: jest.fn(),
}))

const mockProduct: TProduct = {
  id: 1,
  title: 'Test Product',
  price: 100,
  description: 'Test description',
  category: 'Test category',
  image: 'https://via.placeholder.com/150',
  discount: 10,
  brand: '',
  model: '',
  color: '',
}

describe('<ProductItem />', () => {
  const mockAddProductToCart = jest.fn()

  const setup = (item = mockProduct) =>
    render(
      <ThemeProvider theme={lightTheme}>
        <ProductItem item={item} onAddProductToCart={mockAddProductToCart} />
      </ThemeProvider>,
    )

  beforeEach(() => {
    ;(formatPrice as jest.Mock).mockReturnValue('R$ 100,00')
  })

  it('calls the add to cart function when clicking the add to cart button', () => {
    setup()

    const addToCartButton = screen.getByText('🛒')
    fireEvent.click(addToCartButton)

    expect(mockAddProductToCart).toHaveBeenCalledTimes(1)
  })

  it('renders the product title correctly', () => {
    setup()

    expect(screen.getByText('Test Product')).toBeInTheDocument()
  })

  it('renders the formatted product price correctly', () => {
    setup()

    expect(screen.getByText('R$ 100,00')).toBeInTheDocument()
  })

  it('renders the product category and description correctly', () => {
    setup()

    expect(screen.getByText('Categoria:')).toBeInTheDocument()
    expect(screen.getByText('Test category')).toBeInTheDocument()
    expect(screen.getByText('Descrição:')).toBeInTheDocument()
    expect(screen.getByText('Test description')).toBeInTheDocument()
  })
})
