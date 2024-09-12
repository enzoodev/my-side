import { act, renderHook, waitFor } from '@testing-library/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { getProductsByCategory } from '../../../query/products/getProductsByCategory'
import { getProductsByPage } from '../../../query/products/getProductsByPage'
import { useGetProducts } from '@/hooks/products/useGetProducts'

jest.mock('../../../query/products/getProductsByCategory')
jest.mock('../../../query/products/getProductsByPage')

jest.mock('react-toastify', () => ({
  toast: {
    error: jest.fn(),
  },
}))

const queryClient = new QueryClient()

describe('useGetProducts', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should fetch products by category', async () => {
    const mockCategory = 'electronics'
    const mockProducts = [{ id: 1, name: 'Laptop' }]

    ;(getProductsByCategory as jest.Mock).mockResolvedValue(mockProducts)

    const { result } = renderHook(() => useGetProducts(), {
      wrapper: ({ children }) => (
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      ),
    })

    act(() => {
      result.current.handleSetCategory(mockCategory)
    })

    await waitFor(() => expect(result.current.isFetchingProducts).toBe(false))
    expect(result.current.products).toEqual(mockProducts)
  })

  it('should fetch products by page', async () => {
    const mockPage = 1
    const mockProducts = [{ id: 2, name: 'Phone' }]

    ;(getProductsByPage as jest.Mock).mockResolvedValue(mockProducts)

    const { result } = renderHook(() => useGetProducts(), {
      wrapper: ({ children }) => (
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      ),
    })

    act(() => {
      result.current.handleSetPage(mockPage)
    })

    await waitFor(() => expect(result.current.isFetchingProducts).toBe(false))
    expect(result.current.products).toEqual(mockProducts)
  })

  it('should update search text and filter products', async () => {
    const mockProducts = [
      { id: 1, name: 'Laptop' },
      { id: 2, name: 'Phone' },
    ]
    const filteredProducts = [{ id: 1, name: 'Laptop' }]

    ;(getProductsByPage as jest.Mock).mockResolvedValue(mockProducts)

    const { result } = renderHook(() => useGetProducts(), {
      wrapper: ({ children }) => (
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      ),
    })

    await waitFor(() => expect(result.current.isFetchingProducts).toBe(false))

    act(() => {
      result.current.setSearchText('Laptop')
    })

    expect(result.current.products).toEqual(filteredProducts)
  })

  it('should handle page navigation', () => {
    const { result } = renderHook(() => useGetProducts(), {
      wrapper: ({ children }) => (
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      ),
    })

    act(() => {
      result.current.handleGoToNextPage()
    })

    expect(result.current.page).toBe(2)

    act(() => {
      result.current.handleGoToPreviousPage()
    })

    expect(result.current.page).toBe(1)
  })
})
