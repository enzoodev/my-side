type TApiResponse<T = unknown> = {
  success: string
  message: string
  data: T
}
