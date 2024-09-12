import { renderHook, waitFor } from '@testing-library/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useGetCategories } from '@/hooks/products/useGetCategories'
import { getAllCategories } from '../../../query/products/getAllCategories'
import { toast } from 'react-toastify'

jest.mock('../../../query/products/getAllCategories')
jest.mock('react-toastify', () => ({
  toast: {
    error: jest.fn(),
  },
}))

const queryClient = new QueryClient()

describe('useGetCategories', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should fetch categories successfully', async () => {
    const mockCategories = [{ id: 1, name: 'Electronics' }]
    ;(getAllCategories as jest.Mock).mockResolvedValue(mockCategories)

    const { result } = renderHook(() => useGetCategories(), {
      wrapper: ({ children }) => (
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      ),
    })

    await waitFor(() => expect(result.current.isFetchingCategories).toBe(false))
    expect(result.current.categories).toEqual(mockCategories)
  })

  it('should handle errors when fetching categories', async () => {
    const mockError = 'Failed to fetch categories'
    ;(getAllCategories as jest.Mock).mockRejectedValue(mockError)

    const { result } = renderHook(() => useGetCategories(), {
      wrapper: ({ children }) => (
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      ),
    })

    await waitFor(() => expect(result.current.isFetchingCategories).toBe(true))
  })
})
