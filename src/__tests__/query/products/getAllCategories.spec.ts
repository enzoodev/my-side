import { getAllCategories } from '@/query/products/getAllCategories'
import { HttpServices } from '../../../services/HttpServices'

jest.mock('../../../services/HttpServices')

describe('getAllCategories', () => {
  const mockGet = HttpServices.get as jest.MockedFunction<
    typeof HttpServices.get
  >

  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should fetch all categories', async () => {
    const mockCategories = [
      { id: 1, name: 'Electronics' },
      { id: 2, name: 'Books' },
    ]
    mockGet.mockResolvedValueOnce({ categories: mockCategories })

    const categories = await getAllCategories()

    expect(categories).toEqual(mockCategories)
    expect(mockGet).toHaveBeenCalledWith({
      url: 'products/category',
    })
  })

  it('should handle errors from HttpServices.get', async () => {
    const mockError = 'Error fetching categories'
    mockGet.mockRejectedValueOnce(new Error(mockError))

    await expect(getAllCategories()).rejects.toThrow(mockError)
  })
})
