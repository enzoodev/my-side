import { render, screen, fireEvent } from '@testing-library/react'
import Home from '@/pages/index'
import { useRouter } from 'next/router'
import { useGetCategories } from '../../hooks/products/useGetCategories'
import { useGetProducts } from '../../hooks/products/useGetProducts'
import { useCartProducts } from '../../store/cart'
import { ThemeProvider } from 'styled-components'
import { lightTheme } from '@/styles/theme/light'

jest.mock('../../hooks/products/useGetProducts')
jest.mock('../../hooks/products/useGetCategories')
jest.mock('../../store/cart')
jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}))

jest.mock('../../utils/cutText', () => ({
  cutText: jest.fn(),
}))

describe('Home Page', () => {
  beforeEach(() => {
    jest.clearAllMocks()
    ;(useRouter as jest.Mock).mockReturnValue({ push: jest.fn() })
    ;(useCartProducts as jest.Mock).mockReturnValue({
      addProductToCart: jest.fn(),
    })
  })

  it('should render the product title and filters', () => {
    ;(useGetCategories as jest.Mock).mockReturnValue({
      categories: ['categoria1', 'categoria2'],
      isFetchingCategories: false,
    })
    ;(useGetProducts as jest.Mock).mockReturnValue({
      products: [],
      isFetchingProducts: false,
      page: 1,
      category: '',
      searchText: '',
      setSearchText: jest.fn(),
      handleSetCategory: jest.fn(),
      handleSetPage: jest.fn(),
      handleGoToPreviousPage: jest.fn(),
      handleGoToNextPage: jest.fn(),
    })

    render(
      <ThemeProvider theme={lightTheme}>
        <Home />
      </ThemeProvider>,
    )

    expect(screen.getByText(/Produtos/i)).toBeInTheDocument()
    expect(
      screen.getByPlaceholderText('Qual produto você procura?'),
    ).toBeInTheDocument()
  })

  it('should display loading skeleton when fetching products', () => {
    ;(useGetProducts as jest.Mock).mockReturnValue({
      products: [],
      isFetchingProducts: true,
      page: 1,
      category: '',
      searchText: '',
      setSearchText: jest.fn(),
      handleSetCategory: jest.fn(),
      handleSetPage: jest.fn(),
      handleGoToPreviousPage: jest.fn(),
      handleGoToNextPage: jest.fn(),
    })

    render(
      <ThemeProvider theme={lightTheme}>
        <Home />
      </ThemeProvider>,
    )

    expect(screen.getAllByTestId('skeleton')).toHaveLength(30)
  })

  it('should display empty list message when no products are found', () => {
    ;(useGetProducts as jest.Mock).mockReturnValue({
      products: [],
      isFetchingProducts: false,
      page: 1,
      category: '',
      searchText: '',
      setSearchText: jest.fn(),
      handleSetCategory: jest.fn(),
      handleSetPage: jest.fn(),
      handleGoToPreviousPage: jest.fn(),
      handleGoToNextPage: jest.fn(),
    })

    render(
      <ThemeProvider theme={lightTheme}>
        <Home />
      </ThemeProvider>,
    )

    expect(screen.getByText(/Nenhum produto encontrado/i)).toBeInTheDocument()
  })

  it('should allow adding products to the cart', () => {
    const mockAddProductToCart = jest.fn()
    const mockRouterPush = jest.fn()

    ;(useCartProducts as jest.Mock).mockReturnValue({
      addProductToCart: mockAddProductToCart,
    })
    ;(useRouter as jest.Mock).mockReturnValue({
      push: mockRouterPush,
    })
    ;(useGetProducts as jest.Mock).mockReturnValue({
      products: [{ id: 1, name: 'Produto Teste' }],
      isFetchingProducts: false,
      page: 1,
      category: '',
      searchText: '',
      setSearchText: jest.fn(),
      handleSetCategory: jest.fn(),
      handleSetPage: jest.fn(),
      handleGoToPreviousPage: jest.fn(),
      handleGoToNextPage: jest.fn(),
    })

    render(
      <ThemeProvider theme={lightTheme}>
        <Home />
      </ThemeProvider>,
    )

    const addToCartButton = screen.getByRole('button', {
      name: /Adicionar ao carrinho/i,
    })
    fireEvent.click(addToCartButton)

    expect(mockAddProductToCart).toHaveBeenCalledWith({
      id: 1,
      name: 'Produto Teste',
    })
    expect(mockRouterPush).toHaveBeenCalledWith('/cart')
  })
})
