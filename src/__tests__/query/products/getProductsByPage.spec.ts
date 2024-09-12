import { getProductsByPage } from '@/query/products/getProductsByPage'
import { HttpServices } from '../../../services/HttpServices'

jest.mock('../../../services/HttpServices')

describe('getProductsByPage', () => {
  const mockGet = HttpServices.get as jest.MockedFunction<
    typeof HttpServices.get
  >

  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should fetch products by page', async () => {
    const mockPage = 1
    const mockProducts = [
      { id: 1, name: 'Product 1' },
      { id: 2, name: 'Product 2' },
    ]
    mockGet.mockResolvedValueOnce({ products: mockProducts })

    const products = await getProductsByPage(mockPage)

    expect(products).toEqual(mockProducts)
    expect(mockGet).toHaveBeenCalledWith({
      url: 'products',
      params: {
        page: mockPage,
      },
    })
  })

  it('should handle errors from HttpServices.get', async () => {
    const mockPage = 2
    const mockError = 'Error fetching products'
    mockGet.mockRejectedValueOnce(new Error(mockError))

    await expect(getProductsByPage(mockPage)).rejects.toThrow(mockError)
  })
})
