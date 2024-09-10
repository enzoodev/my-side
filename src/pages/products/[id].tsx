import { Fragment } from 'react'
import { useRouter } from 'next/router'
import { NextPage } from 'next'
import Head from 'next/head'

import { Header } from '@/components/elements/Header'

const Product: NextPage = () => {
  const router = useRouter()
  const { id } = router.query

  return (
    <Fragment>
      <Head>
        <title>Produtos - MySide</title>
      </Head>
      <div>
        <Header />
        Produto {id}
      </div>
    </Fragment>
  )
}

export default Product
