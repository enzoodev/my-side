import { Fragment } from 'react'
import { NextPage } from 'next'
import Head from 'next/head'
import type { AppProps } from 'next/app'
import { Inter } from 'next/font/google'
import { QueryClientProvider } from '@tanstack/react-query'
import { Slide, ToastContainer } from 'react-toastify'

import { queryClient } from '@/services/queryClient'

import 'react-toastify/dist/ReactToastify.css'

const inter = Inter({ subsets: ['latin'] })

const App: NextPage<AppProps> = ({ Component, pageProps }) => {
  return (
    <Fragment>
      <ToastContainer
        position="bottom-left"
        autoClose={4000}
        pauseOnHover
        draggable
        draggableDirection="x"
        closeOnClick
        transition={Slide}
        closeButton
      />
      <QueryClientProvider client={queryClient}>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
        </Head>
        <div id="app" className={`${inter.className}`}>
          <Component {...pageProps} />
        </div>
      </QueryClientProvider>
    </Fragment>
  )
}

export default App
