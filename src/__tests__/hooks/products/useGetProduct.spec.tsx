import { renderHook, waitFor } from '@testing-library/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { toast } from 'react-toastify'
import { getProductById } from '../../../query/products/getProductById'
import { useGetProduct } from '@/hooks/products/useGetProduct'

jest.mock('../../../query/products/getProductById')

jest.mock('react-toastify', () => ({
  toast: {
    error: jest.fn(),
  },
}))

const queryClient = new QueryClient()

describe('useGetProduct', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should fetch product data by ID', async () => {
    const mockProductId = 1
    const mockProduct = { id: mockProductId, name: 'Product A' }

    ;(getProductById as jest.Mock).mockResolvedValue(mockProduct)

    const { result } = renderHook(() => useGetProduct(mockProductId), {
      wrapper: ({ children }) => (
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      ),
    })

    await waitFor(() => {
      expect(result.current.isFetchingProduct).toBe(false)
    })

    expect(result.current.product).toEqual(mockProduct)
  })

  it('should handle error when fetching product data', async () => {
    const mockProductId = 2
    const mockError = 'Failed to fetch product'

    ;(getProductById as jest.Mock).mockRejectedValue(new Error(mockError))

    const { result } = renderHook(() => useGetProduct(mockProductId), {
      wrapper: ({ children }) => (
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      ),
    })

    await waitFor(() => {
      expect(result.current.isFetchingProduct).toBe(true)
    })

    expect(result.current.product).toBeUndefined()
    expect(toast.error).toHaveBeenCalledWith(new Error(mockError))
  })

  it('should not fetch data if productId is not provided', () => {
    const { result } = renderHook(() => useGetProduct(0), {
      wrapper: ({ children }) => (
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      ),
    })

    expect(result.current.product).toBeUndefined()
    expect(result.current.isFetchingProduct).toBe(false)
  })
})
