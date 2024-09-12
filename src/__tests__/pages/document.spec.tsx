import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import Document from '@/pages/_document'

jest.mock('next/document', () => ({
  Html: ({ children }: { children: React.ReactNode }) => (
    <html>{children}</html>
  ),
  Head: ({ children }: { children: React.ReactNode }) => (
    <head>{children}</head>
  ),
  Main: () => <main />,
  NextScript: () => <script />,
}))

describe('_document.tsx', () => {
  test('should render document with correct meta tags and favicon links', () => {
    const { container, getByRole } = render(<Document />)

    expect(
      container.querySelector('link[rel="apple-touch-icon"]'),
    ).toHaveAttribute('sizes', '180x180')
    expect(
      container.querySelector('link[rel="apple-touch-icon"]'),
    ).toHaveAttribute('href', '/favicon/apple-touch-icon.png')

    expect(
      container.querySelector('link[rel="icon"][sizes="32x32"]'),
    ).toHaveAttribute('href', '/favicon/favicon-32x32.png')
    expect(
      container.querySelector('link[rel="icon"][sizes="16x16"]'),
    ).toHaveAttribute('href', '/favicon/favicon-16x16.png')

    expect(container.querySelector('link[rel="manifest"]')).toHaveAttribute(
      'href',
      '/favicon/site.webmanifest',
    )

    expect(container.querySelector('link[rel="mask-icon"]')).toHaveAttribute(
      'href',
      '/favicon/safari-pinned-tab.svg',
    )
    expect(container.querySelector('link[rel="mask-icon"]')).toHaveAttribute(
      'color',
      '#5bbad5',
    )

    expect(
      container.querySelector('meta[name="msapplication-TileColor"]'),
    ).toHaveAttribute('content', '#da532c')
    expect(container.querySelector('meta[name="theme-color"]')).toHaveAttribute(
      'content',
      '#ffffff',
    )

    expect(container.querySelector('main')).toBeInTheDocument()
    expect(container.querySelector('script')).toBeInTheDocument()
  })
})
