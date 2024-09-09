import { NextPage } from 'next'
import type { AppProps } from 'next/app'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import { Fragment } from 'react'

const inter = Inter({ subsets: ['latin'] })

const App: NextPage<AppProps> = ({ Component, pageProps }) => {
  return (
    <Fragment>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
      </Head>
      <div id="app" className={`${inter.className}`}>
        <Component {...pageProps} />
      </div>
    </Fragment>
  )
}

export default App
