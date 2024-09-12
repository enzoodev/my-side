import { getProductsByCategory } from '@/query/products/getProductsByCategory'
import { HttpServices } from '../../../services/HttpServices'

jest.mock('../../../services/HttpServices')

describe('getProductsByCategory', () => {
  const mockGet = HttpServices.get as jest.MockedFunction<
    typeof HttpServices.get
  >

  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should fetch products by category', async () => {
    const mockCategory = 'electronics'
    const mockProducts = [
      { id: 1, name: 'Laptop' },
      { id: 2, name: 'Smartphone' },
    ]
    mockGet.mockResolvedValueOnce({ products: mockProducts })

    const products = await getProductsByCategory(mockCategory)

    expect(products).toEqual(mockProducts)
    expect(mockGet).toHaveBeenCalledWith({
      url: 'products/category',
      params: {
        type: mockCategory,
      },
    })
  })

  it('should handle errors from HttpServices.get', async () => {
    const mockCategory = 'fashion'
    const mockError = 'Error fetching products by category'
    mockGet.mockRejectedValueOnce(new Error(mockError))

    await expect(getProductsByCategory(mockCategory)).rejects.toThrow(mockError)
  })
})
