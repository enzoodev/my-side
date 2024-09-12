import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from '@/store'
import { ThemeProvider } from 'styled-components'
import { lightTheme } from '@/styles/theme/light'
import App from '@/pages/_app'
import { jest } from '@jest/globals'

jest.mock('next/head', () => ({
  __esModule: true,
  default: ({ children }: { children: React.ReactNode }) => <>{children}</>,
}))

const queryClient = new QueryClient()

describe('_app.tsx', () => {
  test('should render theme provider, toast container, and test component', () => {
    render(
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ThemeProvider theme={lightTheme}>
            <QueryClientProvider client={queryClient}>
              <App Component={() => <div>Test Component</div>} pageProps={{}} />
            </QueryClientProvider>
          </ThemeProvider>
        </PersistGate>
      </Provider>,
    )

    expect(screen.getByText('Test Component')).toBeInTheDocument()
  })
})
