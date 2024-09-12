import { render, screen, fireEvent } from '@testing-library/react'
import Product from '@/pages/products/[id]'
import { useRouter } from 'next/router'
import { useGetProduct } from '../../../hooks/products/useGetProduct'
import { useCartProducts } from '../../../store/cart'
import { ThemeProvider } from 'styled-components'
import { lightTheme } from '@/styles/theme/light'

jest.mock('../../../hooks/products/useGetProduct')
jest.mock('../../../store/cart')
jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}))

describe('Product Page', () => {
  beforeEach(() => {
    jest.clearAllMocks()
    ;(useRouter as jest.Mock).mockReturnValue({
      push: jest.fn(),
      query: { id: '1' },
    })
    ;(useCartProducts as jest.Mock).mockReturnValue({
      addProductToCart: jest.fn(),
    })
  })

  it('should render product details correctly', () => {
    ;(useGetProduct as jest.Mock).mockReturnValue({
      product: {
        id: 1,
        title: 'Produto Teste',
        category: 'Categoria Teste',
        price: 100,
        discount: 10,
        description: 'Descrição do produto',
        image: '/path/to/image.jpg',
        brand: 'Marca Teste',
        model: 'Modelo Teste',
        color: 'Cor Teste',
      },
      isFetchingProduct: false,
    })

    render(
      <ThemeProvider theme={lightTheme}>
        <Product />
      </ThemeProvider>,
    )

    expect(screen.getByText('Produto Teste')).toBeInTheDocument()
    expect(screen.getByText('Categoria Teste')).toBeInTheDocument()
    expect(screen.getByText(/R\$?\s*100,00/)).toBeInTheDocument()
    expect(screen.getByText('10% OFF')).toBeInTheDocument()
    expect(screen.getByText('Descrição do produto')).toBeInTheDocument()
    expect(screen.getByAltText('Produto Teste')).toHaveAttribute(
      'src',
      '/path/to/image.jpg',
    )
  })

  it('should display loading skeleton when fetching product data', () => {
    ;(useGetProduct as jest.Mock).mockReturnValue({
      product: null,
      isFetchingProduct: true,
    })

    render(
      <ThemeProvider theme={lightTheme}>
        <Product />
      </ThemeProvider>,
    )

    expect(screen.getAllByTestId('skeleton')).toHaveLength(9)
  })

  it('should display "Product not found" message when no product is found', () => {
    ;(useGetProduct as jest.Mock).mockReturnValue({
      product: null,
      isFetchingProduct: false,
    })

    render(
      <ThemeProvider theme={lightTheme}>
        <Product />
      </ThemeProvider>,
    )

    expect(screen.getByText(/Produto não encontrado/i)).toBeInTheDocument()
  })

  it('should allow adding product to cart and redirect to cart', () => {
    const mockAddProductToCart = jest.fn()
    const mockRouterPush = jest.fn()

    ;(useCartProducts as jest.Mock).mockReturnValue({
      addProductToCart: mockAddProductToCart,
    })
    ;(useRouter as jest.Mock).mockReturnValue({
      push: mockRouterPush,
      query: { id: '1' },
    })
    ;(useGetProduct as jest.Mock).mockReturnValue({
      product: {
        id: 1,
        title: 'Produto Teste',
      },
      isFetchingProduct: false,
    })

    render(
      <ThemeProvider theme={lightTheme}>
        <Product />
      </ThemeProvider>,
    )

    const addToCartButton = screen.getByRole('button', {
      name: /Adicionar ao Carrinho/i,
    })
    fireEvent.click(addToCartButton)

    expect(mockAddProductToCart).toHaveBeenCalledWith({
      id: 1,
      title: 'Produto Teste',
    })
    expect(mockRouterPush).toHaveBeenCalledWith('/cart')
  })
})
