export class UrlBuilder {
  public static readonly build = (
    baseURL: string,
    url: string,
    params?: Record<string, any>,
  ) => {
    const fullUrl = new URL(url, baseURL)

    if (params) {
      const filteredParams = Object.fromEntries(
        Object.entries(params).filter(([_, value]) => value !== undefined),
      )

      const searchParams = new URLSearchParams(filteredParams)
      fullUrl.search = searchParams.toString()
    }

    return fullUrl.toString()
  }
}
