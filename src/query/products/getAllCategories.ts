import { HttpServices } from '@/services/HttpServices'

export const getAllCategories = async () => {
  const { categories } = await HttpServices.get<GetAllCategoriesResponse>({
    url: 'products/category',
  })

  return categories
}
