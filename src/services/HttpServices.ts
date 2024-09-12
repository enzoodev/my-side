import { TRequestConfig } from '@/domain/entities/RequestConfig'

import { HttpMethod } from '@/enums/HttpMethod'

import { UrlBuilder } from '@/utils/UrlBuilder'
import { AppError } from '@/utils/error/AppError'
import { defaultErrorMessage } from '@/utils/error/defaultErrorMessage'

export class HttpServices {
  private static readonly baseUrl =
    process.env.NEXT_PUBLIC_API_URL ?? 'https://fakestoreapi.in/api/'

  private static async request<T>({
    url,
    method = HttpMethod.GET,
    data,
    params,
  }: TRequestConfig): Promise<T> {
    try {
      const constructedUrl = UrlBuilder.build(this.baseUrl, url, params)
      const requestBody = data ? JSON.stringify(data) : undefined

      const response = await fetch(constructedUrl, {
        method,
        body: requestBody,
      })

      if (!response.ok) {
        const error: TApiResponse = await response.json()
        throw new AppError(error.message ?? defaultErrorMessage)
      }

      const responseData: T = await response.json()
      return responseData
    } catch (error) {
      if (error instanceof AppError) {
        throw error.message
      }

      throw defaultErrorMessage
    }
  }

  public static readonly get = async <T = unknown>(
    params: TRequestConfig,
  ): Promise<T> => {
    return this.request<T>({ method: HttpMethod.GET, ...params })
  }

  public static readonly post = async <T = unknown>(
    params: TRequestConfig,
  ): Promise<T> => {
    return this.request<T>({ method: HttpMethod.POST, ...params })
  }

  public static readonly put = async <T = unknown>(
    params: TRequestConfig,
  ): Promise<T> => {
    return this.request<T>({ method: HttpMethod.PUT, ...params })
  }

  public static readonly delete = async <T = unknown>(
    params: TRequestConfig,
  ): Promise<T> => {
    return this.request<T>({ method: HttpMethod.DELETE, ...params })
  }

  public static readonly patch = async <T = unknown>(
    params: TRequestConfig,
  ): Promise<T> => {
    return this.request<T>({ method: HttpMethod.PATCH, ...params })
  }
}
