import { HttpServices } from '@/services/HttpServices'
import { defaultErrorMessage } from '@/utils/error/defaultErrorMessage'

global.fetch = jest.fn()

describe('HttpServices', () => {
  const mockFetch = global.fetch as jest.MockedFunction<typeof fetch>

  beforeEach(() => {
    jest.clearAllMocks()
  })

  describe('GET', () => {
    it('should perform a GET request successfully', async () => {
      const mockResponse = { data: 'some data' }
      mockFetch.mockResolvedValueOnce({
        ok: true,
        json: async () => mockResponse,
      } as Response)

      const result = await HttpServices.get({
        url: 'test-url',
        params: {
          type: 'mobile',
        },
      })

      expect(result).toEqual(mockResponse)
      expect(mockFetch).toHaveBeenCalledWith(
        'https://fakestoreapi.in/api/test-url?type=mobile',
        {
          method: 'GET',
          body: undefined,
        },
      )
    })
  })

  describe('POST', () => {
    it('should perform a POST request successfully', async () => {
      const mockResponse = { data: 'some data' }
      mockFetch.mockResolvedValueOnce({
        ok: true,
        json: async () => mockResponse,
      } as Response)

      const result = await HttpServices.post({
        url: 'test-url',
        data: { key: 'value' },
      })

      expect(result).toEqual(mockResponse)
      expect(mockFetch).toHaveBeenCalledWith(
        'https://fakestoreapi.in/api/test-url',
        {
          method: 'POST',
          body: JSON.stringify({ key: 'value' }),
        },
      )
    })
  })

  describe('PUT', () => {
    it('should perform a PUT request successfully', async () => {
      const mockResponse = { data: 'updated data' }
      mockFetch.mockResolvedValueOnce({
        ok: true,
        json: async () => mockResponse,
      } as Response)

      const result = await HttpServices.put({
        url: 'test-url',
        data: { key: 'updated-value' },
      })

      expect(result).toEqual(mockResponse)
      expect(mockFetch).toHaveBeenCalledWith(
        'https://fakestoreapi.in/api/test-url',
        {
          method: 'PUT',
          body: JSON.stringify({ key: 'updated-value' }),
        },
      )
    })
  })

  describe('DELETE', () => {
    it('should perform a DELETE request successfully', async () => {
      const mockResponse = { message: 'deleted' }
      mockFetch.mockResolvedValueOnce({
        ok: true,
        json: async () => mockResponse,
      } as Response)

      const result = await HttpServices.delete({ url: 'test-url' })

      expect(result).toEqual(mockResponse)
      expect(mockFetch).toHaveBeenCalledWith(
        'https://fakestoreapi.in/api/test-url',
        {
          method: 'DELETE',
          body: undefined,
        },
      )
    })
  })

  describe('PATCH', () => {
    it('should perform a PATCH request successfully', async () => {
      const mockResponse = { data: 'patched data' }
      mockFetch.mockResolvedValueOnce({
        ok: true,
        json: async () => mockResponse,
      } as Response)

      const result = await HttpServices.patch({
        url: 'test-url',
        data: { key: 'patched-value' },
      })

      expect(result).toEqual(mockResponse)
      expect(mockFetch).toHaveBeenCalledWith(
        'https://fakestoreapi.in/api/test-url',
        {
          method: 'PATCH',
          body: JSON.stringify({ key: 'patched-value' }),
        },
      )
    })
  })
})
