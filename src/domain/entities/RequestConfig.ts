import { HttpMethod } from '@/enums/HttpMethod'

export type TRequestConfig = {
  url: string
  method?: HttpMethod
  data?: Record<string, unknown>
  params?: Record<string, any>
}
