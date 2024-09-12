import { getProductById } from '@/query/products/getProductById'
import { HttpServices } from '../../../services/HttpServices'

jest.mock('../../../services/HttpServices')

describe('getProductById', () => {
  const mockGet = HttpServices.get as jest.MockedFunction<
    typeof HttpServices.get
  >

  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should fetch product by ID', async () => {
    const mockId = 1
    const mockProduct = { id: 1, name: 'Laptop', price: 999 }
    mockGet.mockResolvedValueOnce({ product: mockProduct })

    const product = await getProductById(mockId)

    expect(product).toEqual(mockProduct)
    expect(mockGet).toHaveBeenCalledWith({
      url: `products/${mockId}`,
    })
  })

  it('should handle errors from HttpServices.get', async () => {
    const mockId = 2
    const mockError = 'Error fetching product by ID'
    mockGet.mockRejectedValueOnce(new Error(mockError))

    await expect(getProductById(mockId)).rejects.toThrow(mockError)
  })
})
