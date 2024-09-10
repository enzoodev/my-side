import { NextPage } from 'next'
import { useRouter } from 'next/router'

const Product: NextPage = () => {
  const router = useRouter()
  const { id } = router.query

  return (
    <div>
      <h1>Product {id}</h1>
    </div>
  )
}

export default Product
