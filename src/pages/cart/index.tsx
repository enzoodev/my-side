import { Fragment } from 'react'
import { NextPage } from 'next'
import Head from 'next/head'

import { useCartProducts } from '@/store/cart'

import { Header } from '@/components/elements/Header'

const Cart: NextPage = () => {
  const { cart } = useCartProducts()

  return (
    <Fragment>
      <Head>
        <title>Carrinho - MySide</title>
      </Head>
      <div>
        <Header />
        {cart.map((item) => (
          <p key={item.product.id}>
            {item.product.title} - {item.quantity}
          </p>
        ))}
      </div>
    </Fragment>
  )
}

export default Cart
