import { NextPage } from 'next'
import Head from 'next/head'
import type { AppProps } from 'next/app'
import { Inter } from 'next/font/google'
import { QueryClientProvider } from '@tanstack/react-query'
import { Slide, ToastContainer } from 'react-toastify'
import { ThemeProvider } from 'styled-components'
import { Provider } from 'react-redux'
import { persistor, store } from '@/store'
import { PersistGate } from 'redux-persist/integration/react'

import { queryClient } from '@/services/queryClient'

import { GlobalStyles } from '@/styles/globalStyles'
import { lightTheme } from '@/styles/theme/light'

import 'react-toastify/dist/ReactToastify.css'

const inter = Inter({ subsets: ['latin'] })

const App: NextPage<AppProps> = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={lightTheme}>
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
              <GlobalStyles />
              <Component {...pageProps} />
            </div>
          </QueryClientProvider>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  )
}

export default App
