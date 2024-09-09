import { Fragment } from 'react'
import { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Produtos - MySide</title>
      </Head>
      <div>
        <h1>Produtos</h1>
      </div>
    </Fragment>
  )
}

export default Home
