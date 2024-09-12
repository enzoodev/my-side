import { render, screen, fireEvent } from '@testing-library/react'
import { toast } from 'react-toastify'
import Cart from '@/pages/cart'
import { useCartProducts } from '../../../store/cart'
import { formatPrice } from '../../../utils/formatPrice'
import { ThemeProvider } from 'styled-components'
import { lightTheme } from '@/styles/theme/light'

jest.mock('../../../store/cart', () => ({
  useCartProducts: jest.fn(),
}))

jest.mock('../../../utils/formatPrice', () => ({
  formatPrice: jest.fn(),
}))

jest.mock('react-toastify', () => ({
  toast: {
    success: jest.fn(),
  },
}))

describe('Cart Page', () => {
  beforeEach(() => {
    ;(useCartProducts as jest.Mock).mockReturnValue({
      cart: [
        {
          product: {
            id: '1',
            name: 'Product 1',
            price: 100,
            discount: 10,
          },
          quantity: 1,
          isSelected: true,
        },
      ],
      removeProductFromCart: jest.fn(),
      increaseProductQuantity: jest.fn(),
      decreaseProductQuantity: jest.fn(),
      toggleSelectProduct: jest.fn(),
    })
    ;(formatPrice as jest.Mock).mockImplementation(
      (price: number) => `R$ ${price.toFixed(2)}`,
    )
  })

  it('should display empty cart message when no items are in the cart', () => {
    ;(useCartProducts as jest.Mock).mockReturnValue({
      cart: [],
    })

    render(
      <ThemeProvider theme={lightTheme}>
        <Cart />
      </ThemeProvider>,
    )

    expect(screen.getByText('Seu carrinho está vazio.')).toBeInTheDocument()
  })

  it('should display formatted prices correctly', () => {
    render(
      <ThemeProvider theme={lightTheme}>
        <Cart />
      </ThemeProvider>,
    )

    const prices = screen.getAllByText('R$ 90.00')
    expect(prices[0]).toBeInTheDocument()
  })

  it('should handle checkout and show toast success message', () => {
    render(
      <ThemeProvider theme={lightTheme}>
        <Cart />
      </ThemeProvider>,
    )

    fireEvent.click(screen.getByText('Finalizar compra'))
    expect(toast.success).toHaveBeenCalledWith('Compra realizada com sucesso!')
  })

  it('should call product actions when interacting with cart items', () => {
    render(
      <ThemeProvider theme={lightTheme}>
        <Cart />
      </ThemeProvider>,
    )

    fireEvent.click(screen.getByTestId('increase-button'))
    expect(useCartProducts().increaseProductQuantity).toHaveBeenCalled()

    fireEvent.click(screen.getByTestId('decrease-button'))
    expect(useCartProducts().decreaseProductQuantity).toHaveBeenCalled()
  })
})
